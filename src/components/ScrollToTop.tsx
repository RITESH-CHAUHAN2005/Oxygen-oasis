
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);
  
  // Handle route change - more efficient by using requestAnimationFrame
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
    
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(scrollToTop);
  }, [pathname]);
  
  // Show/hide back-to-top button based on scroll position with debounce for performance
  useEffect(() => {
    let timeout: number | null = null;
    
    const handleScroll = () => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }
      
      timeout = window.requestAnimationFrame(() => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <>
      {showButton && (
        <div className="fixed right-6 bottom-6 z-50 transition-all duration-300 animate-fade-in">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="bg-white rounded-full shadow-lg hover:bg-gray-50 border border-gray-200 w-12 h-12 flex items-center justify-center transition-all"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
