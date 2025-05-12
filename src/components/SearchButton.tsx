
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import SearchDialog from "./SearchDialog";

const SearchButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setOpen(true)}
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </Button>
      
      <SearchDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default SearchButton;
