import { useEffect, useMemo, useState } from "react";
import { getTotalPages, paginate } from "../utils";

interface UsePaginationResult<T> {
  currentPage: number;
  totalPages: number;
  paginatedItems: T[];
  goToPage: (page: number) => void;
}

export function usePagination<T>(
  items: T[],
  pageSize: number
): UsePaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => getTotalPages(items.length, pageSize),
    [items.length, pageSize]
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const paginatedItems = useMemo(
    () => paginate(items, currentPage, pageSize),
    [items, currentPage, pageSize]
  );

  const goToPage = (page: number) => {
    const safePage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(safePage);
  };

  return { currentPage, totalPages, paginatedItems, goToPage };
}
