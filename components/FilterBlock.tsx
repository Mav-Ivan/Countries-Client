import Select from "./Select";
import SearchInput from "./SearchInput";

interface FilterBlockProps {
  onSearchChange: (value: string) => void;
  onRegionChange: (value: string) => void;
  currentRegion: string;
  searchQuery: string;
}

export default function FilterBlock({
  onSearchChange,
  onRegionChange,
  currentRegion,
  searchQuery,
}: FilterBlockProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between h-28 lg:h-min">
      <SearchInput searchQuery={searchQuery} onSearchChange={onSearchChange} />
      <Select setFilter={onRegionChange} currentRegion={currentRegion} />
    </div>
  );
}
