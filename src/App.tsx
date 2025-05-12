
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

// Pages
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import GenericPage from "./pages/GenericPage";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      cacheTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<ProductDetail />} />
                <Route path="/products/category/:category" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Support Pages */}
                <Route path="/faq" element={<GenericPage title="Frequently Asked Questions" type="faq" />} />
                <Route path="/warranty" element={<GenericPage title="Warranty Information" type="warranty" />} />
                <Route path="/returns" element={<GenericPage title="Returns Policy" type="returns" />} />
                
                {/* Legal Pages */}
                <Route path="/terms" element={<GenericPage title="Terms of Service" type="terms" />} />
                <Route path="/privacy" element={<GenericPage title="Privacy Policy" type="privacy" />} />
                <Route path="/shipping" element={<GenericPage title="Shipping Policy" type="shipping" />} />
                <Route path="/refund" element={<GenericPage title="Refund Policy" type="refund" />} />
                
                {/* Company Pages */}
                <Route path="/team" element={<GenericPage title="Our Team" type="team" />} />
                <Route path="/careers" element={<GenericPage title="Careers" type="careers" />} />
                <Route path="/blog" element={<GenericPage title="Blog" type="blog" />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
