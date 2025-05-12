
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, Filter, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";

interface ProductFiltersProps {
  categories: string[];
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
  isFiltersApplied: boolean;
  setIsFiltersApplied: (value: boolean) => void;
  handleApplyFilters: () => void;
  handleClearFilters: () => void;
  filtersOpen: boolean;
  setFiltersOpen: (value: boolean) => void;
}

const ProductFilters = ({
  categories,
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  priceRange,
  setPriceRange,
  isFiltersApplied,
  setIsFiltersApplied,
  handleApplyFilters,
  handleClearFilters,
  filtersOpen,
  setFiltersOpen
}: ProductFiltersProps) => {
  return (
    <>
      {/* Mobile Filters Toggle */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center bg-white border-gray-300 hover:bg-gray-50 transition-all"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <Filter className="h-4 w-4 mr-2 text-brand-600" />
          {filtersOpen ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>
      
      {/* Filters Sidebar */}
      <AnimatedSection delay={200}>
        <div className={`lg:block transition-all duration-300 ${filtersOpen ? 'block' : 'hidden'}`}>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <Filter className="h-5 w-5 mr-2 text-brand-600" />
                Filter Products
              </h2>
              {isFiltersApplied && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleClearFilters} 
                  className="text-xs flex items-center text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  Clear All
                </Button>
              )}
            </div>
            
            {/* Search */}
            <div className="mb-6">
              <Label htmlFor="search" className="text-gray-700 mb-2 block font-medium">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="search"
                  placeholder="Search products..."
                  className="pl-9 border-gray-200 rounded-lg bg-gray-50 focus:ring-brand-500 focus:border-brand-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    if (e.target.value) setIsFiltersApplied(true);
                  }}
                />
              </div>
            </div>
            
            <Separator className="my-5 bg-gray-100" />
            
            {/* Accordion for mobile */}
            <div className="lg:hidden">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="category" className="border-b-0">
                  <AccordionTrigger className="py-3 text-gray-800 hover:no-underline">
                    <span className="font-medium">Categories</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <div key={cat} className="flex items-center">
                          <Button
                            variant="ghost"
                            className={`w-full justify-start text-left ${
                              category === cat 
                                ? "bg-brand-50 text-brand-700 font-medium" 
                                : "text-gray-600"
                            }`}
                            onClick={() => {
                              setCategory(cat);
                              setIsFiltersApplied(true);
                            }}
                          >
                            {category === cat && (
                              <Check className="h-4 w-4 mr-2 text-brand-600" />
                            )}
                            <span className="capitalize">
                              {cat === "all" ? "All Categories" : cat}
                            </span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="price" className="border-b-0">
                  <AccordionTrigger className="py-3 text-gray-800 hover:no-underline">
                    <span className="font-medium">Price Range</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        max={2000}
                        step={10}
                        onValueChange={(value) => {
                          setPriceRange(value as [number, number]);
                          setIsFiltersApplied(true);
                        }}
                        className="my-6"
                      />
                      <div className="flex justify-between mt-2 text-sm">
                        <span className="font-medium text-gray-700">${priceRange[0]}</span>
                        <span className="font-medium text-gray-700">${priceRange[1]}</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Desktop filters */}
            <div className="hidden lg:block">
              {/* Category */}
              <div className="mb-6">
                <Label htmlFor="category" className="text-gray-700 mb-2 block font-medium">Categories</Label>
                <div className="space-y-2 mt-2">
                  {categories.map((cat) => (
                    <div 
                      key={cat} 
                      className={`flex items-center p-2.5 rounded-lg cursor-pointer transition-all ${
                        category === cat 
                          ? "bg-brand-50 border border-brand-100" 
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => {
                        setCategory(cat);
                        setIsFiltersApplied(true);
                      }}
                    >
                      <div className={`w-4 h-4 rounded-full mr-2.5 flex items-center justify-center ${
                        category === cat 
                          ? "bg-brand-600" 
                          : "border border-gray-300"
                      }`}>
                        {category === cat && <Check className="h-3 w-3 text-white" />}
                      </div>
                      <span className={`capitalize ${category === cat ? "font-medium text-brand-700" : "text-gray-600"}`}>
                        {cat === "all" ? "All Categories" : cat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator className="my-5 bg-gray-100" />
              
              {/* Price Range */}
              <div className="mb-6">
                <Label className="text-gray-700 mb-2 block font-medium">Price Range</Label>
                <div className="mt-4 px-2">
                  <Slider
                    value={priceRange}
                    max={2000}
                    step={10}
                    onValueChange={(value) => {
                      setPriceRange(value as [number, number]);
                      setIsFiltersApplied(true);
                    }}
                    className="my-6"
                  />
                  <div className="flex justify-between mt-2">
                    <div className="bg-gray-50 px-3 py-1.5 rounded border border-gray-200 text-gray-700 font-medium">
                      ${priceRange[0]}
                    </div>
                    <div className="bg-gray-50 px-3 py-1.5 rounded border border-gray-200 text-gray-700 font-medium">
                      ${priceRange[1]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 lg:hidden">
              <Button 
                onClick={handleApplyFilters} 
                className="w-full py-6 bg-brand-600 hover:bg-brand-700 text-white font-medium transition-all"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default ProductFilters;
