import { useMemo, useState } from "react";
import {
  EmptyState,
  ErrorMessage,
  Pagination,
  SearchBar,
  SkeletonGrid,
  ThemeToggle,
  UserGrid,
} from "../components";
import { DEFAULT_PAGE_SIZE, SEARCH_DEBOUNCE_MS } from "../constants";
import { useDebounce, usePagination, useUsers } from "../hooks";
import { filterUsersBySearchTerm } from "../services";

export function UsersPage() {
  const { users, isLoading, error, retry } = useUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, SEARCH_DEBOUNCE_MS);

  const filteredUsers = useMemo(
    () => filterUsersBySearchTerm(users, debouncedSearchTerm),
    [users, debouncedSearchTerm]
  );

  const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(
    filteredUsers,
    DEFAULT_PAGE_SIZE
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Users Directory
          </h1>
          <ThemeToggle />
        </header>

        <div className="mb-6">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>

        {isLoading && <SkeletonGrid />}

        {!isLoading && error && <ErrorMessage message={error} onRetry={retry} />}

        {!isLoading && !error && filteredUsers.length === 0 && <EmptyState />}

        {!isLoading && !error && filteredUsers.length > 0 && (
          <>
            <UserGrid users={paginatedItems} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
            />
          </>
        )}
      </div>
    </div>
  );
}
