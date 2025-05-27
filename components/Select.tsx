import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Regions } from "@/types/Regions.interface";

interface SelectProps {
  setFilter: (value: string) => void;
  currentRegion: string;
}

export default function Select({ setFilter, currentRegion }: SelectProps) {
  const { error, data, isLoading } = useSWR(
    "/regions",
    fetcher
  );

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    throw new Error(error);
  }

  const regions = Array.isArray(data) ? data.map((el: Regions) => el.region) : [];

  return (
    <select
      value={currentRegion}
      className="bg-white dark:bg-[#2c3743] dark:text-[#a1a1a1] p-2 rounded-md"
      onChange={e => setFilter(e.target.value)}
    >
      <option value="">All regions</option>
      {regions.map((el: string) => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
}
