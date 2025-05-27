import React from "react";
import {
  Pagination as PaginationShad,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

export default function Pagination({ currentPage, setCurrentPage, totalPages }: PaginationProps) {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (totalPages === 0) {
    return null;
  }

  return (
    <PaginationShad className="mt-15">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`text-lg ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
            onClick={handlePreviousPage}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={`text-lg ${currentPage === totalPages ? "pointer-events-none opacity-50" : ""}`}
            onClick={handleNextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationShad>
  );
}
