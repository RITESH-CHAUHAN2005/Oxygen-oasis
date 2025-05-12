
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import ProductFilters from "@/components/ProductFilters";
import ProductSortAndCount from "@/components/ProductSortAndCount";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { toast } = useToast();
  const initialCategory = searchParams.get("category") || "all";
  const initialMinPrice = Number(searchParams.get("minPrice")) || 0;
  const initialMaxPrice = Number(searchParams.get("maxPrice")) || 2000;
  const initialSort = searchParams.get("sort") || "featured";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<string>(initialCategory);
  const [priceRange, setPriceRange] = useState<[number, number]>([initialMinPrice, initialMaxPrice]);
  const [sortBy, setSortBy] = useState(initialSort);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);
  
  // Get unique categories
  const categories = ["all", ...Array.from(new Set(products.map(product => product.category)))];
  
  // Update search params when filters change
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    
    if (priceRange[0] > 0) {
      params.set("minPrice", priceRange[0].toString());
    } else {
      params.delete("minPrice");
    }
    
    if (priceRange[1] < 2000) {
      params.set("maxPrice", priceRange[1].toString());
    } else {
      params.delete("maxPrice");
    }
    
    if (sortBy !== "featured") {
      params.set("sort", sortBy);
    } else {
      params.delete("sort");
    }
    
    setSearchParams(params);
  }, [category, priceRange, sortBy]);
  
  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
                         
    const matchesCategory = category === "all" || product.category === category;
    const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPriceRange;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default: // "featured"
        return 0;
    }
  });
  
  const handleClearFilters = () => {
    setSearchTerm("");
    setCategory("all");
    setPriceRange([0, 2000]);
    setSortBy("featured");
    setSearchParams({});
    setIsFiltersApplied(false);
    toast({
      title: "Filters Reset",
      description: "All filters have been cleared.",
    });
  };

  const handleApplyFilters = () => {
    setIsFiltersApplied(true);
    setFiltersOpen(false);
    toast({
      title: "Filters Applied",
      description: `Showing ${sortedProducts.length} products based on your filters.`,
    });
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <AnimatedSection>
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oxygen Concentrators
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our selection of high-quality oxygen concentrators for home and portable use.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <ProductFilters 
              categories={categories}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              category={category}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              isFiltersApplied={isFiltersApplied}
              setIsFiltersApplied={setIsFiltersApplied}
              handleApplyFilters={handleApplyFilters}
              handleClearFilters={handleClearFilters}
              filtersOpen={filtersOpen}
              setFiltersOpen={setFiltersOpen}
            />
          </div>
          
          {/* Products Grid */}
          <div className="lg:w-3/4">
            {sortedProducts.length > 0 ? (
              <>
                <ProductSortAndCount 
                  productCount={sortedProducts.length}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  setIsFiltersApplied={setIsFiltersApplied}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
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
              </>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <Button onClick={handleClearFilters} className="bg-brand-600 hover:bg-brand-700 text-white">Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
