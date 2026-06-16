interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex items-center justify-center gap-3 py-4">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
        className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium
          text-gray-700 disabled:cursor-not-allowed disabled:opacity-50
          hover:bg-gray-100
          dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
      >
        Previous
      </button>

      <span className="text-sm text-gray-600 dark:text-gray-300">
        Page {currentPage} of {totalPages}
      </span>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
        className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium
          text-gray-700 disabled:cursor-not-allowed disabled:opacity-50
          hover:bg-gray-100
          dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
      >
        Next
      </button>
    </div>
  );
}
