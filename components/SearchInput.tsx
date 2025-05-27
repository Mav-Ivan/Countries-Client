"use client";

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function SearchInput({ searchQuery, onSearchChange }: SearchInputProps) {
  const handleClearSearch = () => {
    onSearchChange("");
  };

  const handleSearchChange = (value: string) => {
    onSearchChange(value);
  };

  return (
    <div className="relative w-[100%] lg:w-[30%]">
      <Input
        type="text"
        value={searchQuery}
        placeholder="Search for a country..."
        className="w-full pl-8 bg-white"
        onChange={e => handleSearchChange(e.target.value)}
      />
      <Search
        size={15}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      />
      {searchQuery && (
        <X
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black cursor-pointer"
          onClick={handleClearSearch}
        />
      )}
    </div>
  );
}
