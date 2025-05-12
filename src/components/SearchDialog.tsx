
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, X, ArrowRight } from "lucide-react";
import { products } from "@/data/products";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface SearchResult {
  id: string;
  name: string;
  model: string;
  image: string;
  match: string;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  // Focus input when dialog opens
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        const input = document.getElementById("search-input");
        if (input) input.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Handle search input
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = products
      .filter(product => {
        const nameMatch = product.name.toLowerCase().includes(query);
        const modelMatch = product.model.toLowerCase().includes(query);
        const descMatch = product.description.toLowerCase().includes(query);
        return nameMatch || modelMatch || descMatch;
      })
      .map(product => {
        let match = "name";
        if (product.name.toLowerCase().includes(query)) {
          match = "name";
        } else if (product.model.toLowerCase().includes(query)) {
          match = "model";
        } else {
          match = "description";
        }
        return {
          id: product.id,
          name: product.name,
          model: product.model,
          image: product.image,
          match
        };
      })
      .slice(0, 5); // Limit to 5 results for better performance

    setSearchResults(results);
  }, [searchQuery]);

  const handleProductClick = (productId: string) => {
    onOpenChange(false);
    setSearchQuery("");
    navigate(`/products/${productId}`);
  };

  const handleViewAllResults = () => {
    onOpenChange(false);
    setSearchQuery("");
    navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden max-h-[90vh]">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <SearchIcon className="h-5 w-5 text-gray-500 mr-2" />
            <Input
              id="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="border-none shadow-none focus-visible:ring-0 flex-1"
              autoComplete="off"
            />
            {searchQuery && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSearchQuery("")}
                className="hover:bg-transparent"
              >
                <X className="h-5 w-5 text-gray-500" />
              </Button>
            )}
          </div>
        </div>

        <div className="max-h-[calc(90vh-120px)] overflow-y-auto p-2">
          {searchResults.length > 0 ? (
            <div className="space-y-2">
              {searchResults.map((result) => (
                <button
                  key={result.id}
                  className="w-full p-2 hover:bg-gray-50 rounded flex items-center text-left transition-colors"
                  onClick={() => handleProductClick(result.id)}
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded overflow-hidden border">
                    <img 
                      src={result.image} 
                      alt={result.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">{result.name}</p>
                    <p className="text-xs text-gray-500">{result.model}</p>
                  </div>
                </button>
              ))}
              
              {searchResults.length > 0 && (
                <div className="pt-2 border-t mt-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-between"
                    onClick={handleViewAllResults}
                  >
                    View all results
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          ) : (
            searchQuery.length >= 2 && (
              <div className="py-8 text-center">
                <p className="text-gray-500">No results found for "{searchQuery}"</p>
                <p className="text-sm text-gray-400 mt-1">Try a different search term or browse our products</p>
                
                <Button
                  className="mt-4"
                  onClick={() => {
                    onOpenChange(false);
                    navigate('/products');
                  }}
                >
                  Browse All Products
                </Button>
              </div>
            )
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
