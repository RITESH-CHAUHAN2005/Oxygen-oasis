
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  
  const product = productId ? getProductById(productId) : undefined;
  const relatedProducts = productId ? getRelatedProducts(productId) : [];

  const handleQuantityChange = (value: number) => {
    if (value < 1) return;
    setQuantity(value);
  };
  
  const handleAddToCart = () => {
    if (!product) return;
    
    if (!currentUser) {
      toast({
        title: "Please sign in",
        description: "You need to be logged in to add items to your cart",
        variant: "destructive",
      });
      return;
    }
    
    addToCart({
      id: product.id,
      name: `${product.name} ${product.model}`,
      price: product.price,
      image: product.image,
      quantity: quantity,
    });
    
    setQuantity(1);
  };
  
  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="container px-4 mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container px-4 mx-auto">
        <AnimatedSection>
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-brand-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-brand-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name} {product.model}</span>
          </div>
          
          {/* Product Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-lg p-8 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={`${product.name} ${product.model}`} 
                className="w-full h-auto max-h-96 object-contain" 
              />
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {product.name} <span className="text-brand-600">{product.model}</span>
              </h1>
              <div className="mt-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                {product.inStock ? (
                  <span className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    In Stock
                  </span>
                ) : (
                  <span className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Out of Stock
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-8">{product.description}</p>
              
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 mb-2">Features:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {product.inStock && (
                <>
                  <Separator className="mb-8" />
                  
                  <div className="flex items-center mb-8">
                    <span className="mr-4 font-medium">Quantity:</span>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(quantity - 1)}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-10 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full md:w-auto py-6 text-base"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </>
              )}
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          {/* Product Details Tabs */}
          <Tabs defaultValue="description" className="mb-16" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full md:w-auto grid grid-cols-2 md:inline-flex gap-2">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-600">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <table className="w-full border-collapse">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-2 px-4 border-b border-gray-200 font-medium">{key}</td>
                          <td className="py-2 px-4 border-b border-gray-200">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
        
        {relatedProducts.length > 0 && (
          <AnimatedSection delay={400}>
            {/* Related Products */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    model={product.model}
                    price={product.price}
                    image={product.image}
                    shortDescription={product.shortDescription}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
