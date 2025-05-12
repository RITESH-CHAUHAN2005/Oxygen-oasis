
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRight as ArrowRightIcon, Shield, Star, Truck, Check, Heart } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  // Load the hero image in advance to improve performance
  useEffect(() => {
    const heroImage = new Image();
    heroImage.src = "/lovable-uploads/060d3144-ad01-4138-abe0-5a1fa49a1a34.png";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                Breathe Easier with <span className="text-brand-600">Premium</span> Oxygen Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Your trusted source for high-quality oxygen concentrators and respiratory equipment for enhanced quality of life.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button asChild size="lg" className="text-base">
                  <Link to="/products">
                    Browse Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <div className="relative">
                <img
                  src="/lovable-uploads/060d3144-ad01-4138-abe0-5a1fa49a1a34.png"
                  alt="Oxygen Concentrator"
                  className="w-full h-auto max-w-lg mx-auto object-contain rounded-lg animate-scale-in"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Choose <span className="text-brand-600">OxygenOasis</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-brand-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  All our products are sourced from trusted manufacturers and undergo rigorous quality checks.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-brand-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Service</h3>
                <p className="text-gray-600">
                  Our team of respiratory specialists is always available to help you find the perfect solution.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-brand-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <Truck className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Shipping</h3>
                <p className="text-gray-600">
                  Enjoy free shipping on all orders with quick delivery straight to your doorstep.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-brand-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Care</h3>
                <p className="text-gray-600">
                  We prioritize your health and satisfaction with 24/7 support and easy returns.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Products Section */}
      <AnimatedSection delay={200}>
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Featured Products
                </h2>
                <p className="text-lg text-gray-600">
                  Explore our most popular oxygen concentrators
                </p>
              </div>
              <Button variant="link" asChild className="text-brand-600 mt-4 md:mt-0 flex items-center">
                <Link to="/products">
                  View All Products <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
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
        </section>
      </AnimatedSection>

      {/* Key Features */}
      <AnimatedSection delay={400}>
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <img
                  src="https://static.wixstatic.com/media/cc4ffa_750cca6badc3433c8b379a8fa713b3ef~mv2_d_5000_3333_s_4_2.jpg/v1/fill/w_871,h_880,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cc4ffa_750cca6badc3433c8b379a8fa713b3ef~mv2_d_5000_3333_s_4_2.jpg"
                  alt="Oxygen Concentrator Features"
                  className="w-full h-auto max-w-full object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Advanced Features for Better Care
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our oxygen concentrators come equipped with cutting-edge technology and thoughtful design elements to ensure optimal performance and user comfort.
                </p>
                <ul className="space-y-4">
                  {[
                    "Built-in Pulse Oximeter",
                    "Back-lit LCD screen",
                    "Remote control operation",
                    "Nebulizer air outlet",
                    "Multiple safety alarms",
                    "German precision technology",
                    "8,000+ hours service life",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Check className="h-5 w-5 text-brand-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8">
                  <Link to="/products">
                    Explore Features <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call To Action */}
      <AnimatedSection delay={600}>
        <section className="py-16 bg-brand-600 text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Better Breathing?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
              Browse our collection of premium oxygen concentrators or contact our experts for personalized advice.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-brand-600">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                <Link to="/contact">Get Expert Advice</Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Index;
