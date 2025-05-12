
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { getProductById } from "@/data/products";
import { toast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";

interface ProductCardProps {
  id: string;
  name: string;
  model: string;
  price: number;
  image: string;
  shortDescription: string;
}

const ProductCard = ({ id, name, model, price, image, shortDescription }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    const product = getProductById(id);
    if (product) {
      addToCart({
        id,
        name: `${name} ${model}`,
        price,
        image,
        quantity: 1
      });
      
      toast({
        title: "Added to Cart",
        description: `${name} ${model} has been added to your cart.`,
        duration: 3000,
      });
    }
  };

  return (
    <AnimatedSection>
      <div 
        className="product-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 border border-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden group">
          <Link to={`/products/${id}`} className="block h-64 flex items-center justify-center p-4">
            <img
              src={image}
              alt={`${name} ${model}`}
              className="h-64 object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </Link>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link 
              to={`/products/${id}`}
              className="bg-white text-gray-800 rounded-full p-3 hover:bg-brand-600 hover:text-white transition-colors"
            >
              <Eye className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="p-5">
          <Link to={`/products/${id}`}>
            <h3 className="text-lg font-semibold text-gray-800 hover:text-brand-700 truncate">
              {name} <span className="text-brand-600">{model}</span>
            </h3>
          </Link>
          <p className="mt-2 text-gray-600 text-sm line-clamp-2">{shortDescription}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
            <Button 
              onClick={handleAddToCart}
              className="bg-brand-600 hover:bg-brand-700 text-white flex items-center space-x-1"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProductCard;
