import { useEffect, useMemo, useState } from "react";
import { getTotalPages, paginate } from "../utils";

interface UsePaginationResult<T> {
  currentPage: number;
  totalPages: number;
  paginatedItems: T[];
  goToPage: (page: number) => void;
}

// Handles "current page" state + slicing the list for that page.
// If the underlying list shrinks (e.g. due to search) and the
// current page no longer exists, it resets to page 1.
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
