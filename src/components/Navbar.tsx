
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const { getItemCount } = useCart();
  const location = useLocation();
  
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`w-full transition-all duration-300 z-50 ${
      scrolled ? "navbar-fixed animate-fade-in py-2" : "py-4"
    }`}>
      <div className="container px-4 mx-auto flex items-center justify-between">
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base transition-colors hover:text-brand-700 ${
                location.pathname === link.path
                  ? "font-medium text-brand-700"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>
          
          {currentUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="w-full">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/orders" className="w-full">My Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logout()}>
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
          )}
          
          <Button variant="outline" size="icon" className="relative" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button variant="outline" size="icon" className="relative" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 py-4 px-6 animate-slide-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base transition-colors hover:text-brand-700 ${
                  location.pathname === link.path
                    ? "font-medium text-brand-700"
                    : "text-gray-700"
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              {currentUser ? (
                <>
                  <Link
                    to="/profile"
                    className="block py-2 text-base text-gray-700 hover:text-brand-700"
                    onClick={closeMenu}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block py-2 text-base text-gray-700 hover:text-brand-700"
                    onClick={closeMenu}
                  >
                    My Orders
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full mt-2"
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/login" onClick={closeMenu}>
                    Login / Register
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
