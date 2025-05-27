"use client";

import useSWR from "swr";
import { Suspense, useEffect, useState, useMemo } from "react";

import CardsContainer from "@/components/CardsContainer";
import FilterBlock from "@/components/FilterBlock";
import Pagination from "@/components/Pagination";

import { fetcher } from "@/lib/utils";
import Loading from "./loading";
import { Country } from "@/types/Country.interface";
import { useDebounce } from "@/hooks/useDebounce";

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

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    throw new Error(error);
  }

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-10 bg-[#fafafa] text-black dark:bg-[#222d37] dark:text-white">
      <FilterBlock
        onSearchChange={setSearchQuery}
        onRegionChange={setSelectedRegion}
        currentRegion={selectedRegion}
        searchQuery={searchQuery}
      />
      <Suspense fallback={<Loading />}>
        <CardsContainer countries={data?.data || []} />
      </Suspense>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={data?.pagination?.totalPages || 0}
      />
    </main>
  );
}
