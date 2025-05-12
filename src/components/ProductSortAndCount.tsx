
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AnimatedSection from "@/components/AnimatedSection";

interface ProductSortAndCountProps {
  productCount: number;
  sortBy: string;
  setSortBy: (value: string) => void;
  setIsFiltersApplied: (value: boolean) => void;
}

const ProductSortAndCount = ({ 
  productCount, 
  sortBy, 
  setSortBy, 
  setIsFiltersApplied 
}: ProductSortAndCountProps) => {
  return (
    <AnimatedSection>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-gray-700 mb-2 sm:mb-0">
          Showing <span className="font-medium">{productCount}</span> {productCount === 1 ? 'product' : 'products'}
        </p>
        <div className="hidden sm:block">
          <Select value={sortBy} onValueChange={(value) => {
            setSortBy(value);
            setIsFiltersApplied(true);
          }}>
            <SelectTrigger className="w-[180px] border-gray-300 bg-gray-50 focus:ring-brand-500 focus:border-brand-500">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProductSortAndCount;
