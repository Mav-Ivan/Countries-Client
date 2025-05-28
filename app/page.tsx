"use client";

import useSWR from "swr";
import { useEffect, useState, useMemo } from "react";
import { ClipLoader } from "react-spinners";

import CardsContainer from "@/components/CardsContainer";
import FilterBlock from "@/components/FilterBlock";
import Pagination from "@/components/Pagination";

import { fetcher } from "@/lib/utils";
import { Country } from "@/types/Country.interface";
import { useDebounce } from "@/hooks/useDebounce";
import Loading from "./loading";

interface CountriesApiResponse {
  data: Country[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const limit = 12;

  const debouncedSearch = useDebounce(searchQuery, 1000);
  const query = useMemo(() => {
    return `/countries?page=${currentPage}&limit=${limit}&search=${encodeURIComponent(debouncedSearch)}&region=${encodeURIComponent(selectedRegion)}`;
  }, [currentPage, debouncedSearch, selectedRegion]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedRegion]);

  const { error, data, isLoading } = useSWR<CountriesApiResponse>(query, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 0,
  });

  if (error) {
    throw new Error(error);
  }

  const content = isLoading ? <Loading /> : <CardsContainer countries={data?.data || []} />;

  return (
    <main className="flex flex-col items-center justify-start min-h-[90vh] md:min-h-[85vh] p-10 bg-[#fafafa] text-black dark:bg-[#222d37] dark:text-white">
      <FilterBlock
        onSearchChange={setSearchQuery}
        onRegionChange={setSelectedRegion}
        currentRegion={selectedRegion}
        searchQuery={searchQuery}
      />
      {content}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={data?.pagination?.totalPages || 0}
      />
    </main>
  );
}
