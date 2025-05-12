
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [couponCode, setCouponCode] = useState("");
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  
  const handleApplyCoupon = () => {
    setIsApplyingCoupon(true);
    
    setTimeout(() => {
      toast({
        title: "Invalid coupon code",
        description: "The coupon code you entered is invalid or has expired.",
        variant: "destructive",
      });
      setIsApplyingCoupon(false);
    }, 1000);
  };
  
  const handleCheckout = () => {
    if (!currentUser) {
      toast({
        title: "Please sign in",
        description: "You need to be logged in to checkout",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    
    navigate("/checkout");
  };
  
  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center py-16">
            <div className="flex justify-center mb-6">
              <ShoppingCart className="h-24 w-24 text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button asChild>
              <Link to="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-16">
      <div className="container px-4 mx-auto max-w-6xl">
        <AnimatedSection>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b text-sm font-medium text-gray-500">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>
                
                <div className="space-y-4 mt-4">
                  {cart.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 gap-4 py-4 border-b border-gray-100">
                      <div className="col-span-12 sm:col-span-6 flex items-center">
                        <div className="h-20 w-20 bg-gray-50 rounded-md overflow-hidden mr-4 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-full w-full object-contain p-2" 
                          />
                        </div>
                        <div>
                          <Link 
                            to={`/products/${item.id}`}
                            className="font-medium text-gray-900 hover:text-brand-600 line-clamp-2"
                          >
                            {item.name}
                          </Link>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="mt-1 flex items-center text-sm text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                      
                      <div className="col-span-4 sm:col-span-2 flex items-center justify-between sm:justify-center">
                        <span className="sm:hidden text-gray-500">Price:</span>
                        <span className="font-medium">${item.price.toFixed(2)}</span>
                      </div>
                      
                      <div className="col-span-4 sm:col-span-2 flex items-center justify-between sm:justify-center">
                        <span className="sm:hidden text-gray-500">Quantity:</span>
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="col-span-4 sm:col-span-2 flex items-center justify-between sm:justify-end">
                        <span className="sm:hidden text-gray-500">Total:</span>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex flex-wrap justify-between items-center">
                  <Button
                    variant="outline"
                    className="mb-4 sm:mb-0"
                    asChild
                  >
                    <Link to="/products">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Continue Shopping
                    </Link>
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">Calculated at checkout</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between text-base font-medium mb-6">
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                
                <Button 
                  className="w-full mb-4" 
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                
                <div>
                  <div className="flex space-x-2 mb-4">
                    <Input
                      placeholder="Coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button 
                      variant="outline"
                      disabled={!couponCode || isApplyingCoupon}
                      onClick={handleApplyCoupon}
                    >
                      {isApplyingCoupon ? "Applying..." : "Apply"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Cart;
