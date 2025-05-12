
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Subscribed!",
      description: `Thank you for subscribing to our newsletter. We've sent a confirmation to ${email}.`,
      variant: "default",
    });
    setEmail("");
  };

  const footerLinks = {
    products: [
      { name: "Oxygen Concentrators", path: "/products/category/concentrators", content: "High-quality stationary oxygen concentrators with advanced features for home use." },
      { name: "Portable Oxygen", path: "/products/category/portable", content: "Lightweight, battery-powered oxygen solutions for active lifestyles and travel." },
      { name: "Accessories", path: "/products/category/accessories", content: "Essential add-ons including cannulas, tubing, filters, and carrying cases." },
      { name: "Spare Parts", path: "/products/category/spare-parts", content: "Genuine replacement parts to maintain optimal performance of your equipment." },
    ],
    company: [
      { name: "About Us", path: "/about", content: "Learn about our mission to provide high-quality respiratory solutions worldwide." },
      { name: "Our Team", path: "/team", content: "Meet our team of respiratory specialists, engineers, and customer care professionals." },
      { name: "Careers", path: "/careers", content: "Join our growing team and help make a difference in respiratory healthcare." },
      { name: "Blog", path: "/blog", content: "Stay updated with the latest news and insights about respiratory health and equipment." },
    ],
    support: [
      { name: "Contact Us", path: "/contact", content: "Get in touch with our customer support team for any questions or assistance." },
      { name: "FAQ", path: "/faq", content: "Find answers to commonly asked questions about our products and services." },
      { name: "Warranty", path: "/warranty", content: "Detailed information about our product warranties and coverage policies." },
      { name: "Returns", path: "/returns", content: "Our hassle-free return and exchange policy for all products." },
    ],
    legal: [
      { name: "Terms of Service", path: "/terms", content: "The legal terms governing the use of our website and services." },
      { name: "Privacy Policy", path: "/privacy", content: "How we collect, use, and protect your personal information." },
      { name: "Shipping Policy", path: "/shipping", content: "Information about shipping methods, costs, and delivery timeframes." },
      { name: "Refund Policy", path: "/refund", content: "Our policy regarding refunds for returned or defective products." },
    ],
  };

  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container px-4 mx-auto">
        {/* Desktop Footer */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-8 h-8 text-brand-600"
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M19.7 14a2 2 0 0 0-1.7-1h-1.5a4.5 4.5 0 0 1-4.5-4.5v-1c0-1.2-.768-2-2-2h-2.975a2 2 0 0 0-1.897 1.374L3.372 12.5c-.247.738-.307 1.33-.058 1.843.248.513.766.657 1.428.657H6" />
                <path d="M8 20a2 2 0 1 0 4 0v-3.5a2 2 0 0 0-2-2" />
                <path d="M20.2 9c-1.267.013-2.2-1.11-2.2-2.15C18 5.317 18.683 4 20 4h-.5a7.75 7.75 0 0 0-1.956.266 5.228 5.228 0 0 0-.773.24c-1.8.9-2.712 3.024-2.771 5.163V11" />
                <path d="M10 11h4" />
                <path d="M17.4 12.5c.722.648 1.154.999 1.4 1a2 2 0 0 0 1.2-.5" />
                <path d="M18 14v7" />
              </svg>
              <span className="text-xl font-bold text-brand-800">OxygenOasis</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Providing high-quality oxygen concentrators and respiratory equipment for better breathing and improved quality of life.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-600" />
                <span className="text-sm text-gray-600">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-600" />
                <span className="text-sm text-gray-600">contact@oxygenoasis.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-600 mt-0.5" />
                <span className="text-sm text-gray-600">
                  1234 Respiratory Lane<br />
                  Oxygen City, OX 98765<br />
                  United States
                </span>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-6">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter for updates, tips, and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-gray-300 focus:border-brand-600"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-6">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Mobile Footer Accordion */}
        <div className="md:hidden">
          <div className="mb-6">
            <Link to="/" className="flex items-center space-x-2">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-8 h-8 text-brand-600"
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M19.7 14a2 2 0 0 0-1.7-1h-1.5a4.5 4.5 0 0 1-4.5-4.5v-1c0-1.2-.768-2-2-2h-2.975a2 2 0 0 0-1.897 1.374L3.372 12.5c-.247.738-.307 1.33-.058 1.843.248.513.766.657 1.428.657H6" />
                <path d="M8 20a2 2 0 1 0 4 0v-3.5a2 2 0 0 0-2-2" />
                <path d="M20.2 9c-1.267.013-2.2-1.11-2.2-2.15C18 5.317 18.683 4 20 4h-.5a7.75 7.75 0 0 0-1.956.266 5.228 5.228 0 0 0-.773.24c-1.8.9-2.712 3.024-2.771 5.163V11" />
                <path d="M10 11h4" />
                <path d="M17.4 12.5c.722.648 1.154.999 1.4 1a2 2 0 0 0 1.2-.5" />
                <path d="M18 14v7" />
              </svg>
              <span className="text-xl font-bold text-brand-800">OxygenOasis</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Providing high-quality oxygen concentrators and respiratory equipment for better breathing and improved quality of life.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="products">
              <AccordionTrigger className="text-lg font-semibold text-gray-900">Products</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-2">
                  {footerLinks.products.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path} 
                        className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="company">
              <AccordionTrigger className="text-lg font-semibold text-gray-900">Company</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-2">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path} 
                        className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="support">
              <AccordionTrigger className="text-lg font-semibold text-gray-900">Support</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-2">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path} 
                        className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="legal">
              <AccordionTrigger className="text-lg font-semibold text-gray-900">Legal</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-2">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path} 
                        className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="contact">
              <AccordionTrigger className="text-lg font-semibold text-gray-900">Contact</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-brand-600" />
                    <span className="text-sm text-gray-600">+1 (800) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-brand-600" />
                    <span className="text-sm text-gray-600">contact@oxygenoasis.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-brand-600 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      1234 Respiratory Lane<br />
                      Oxygen City, OX 98765<br />
                      United States
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter for updates, tips, and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-gray-300 focus:border-brand-600"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
          
          <div className="mt-6 flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} OxygenOasis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
