export function Spinner() {
  return (
    <div className="flex items-center justify-center py-16" role="status" aria-label="Loading">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300
        border-t-blue-600 dark:border-gray-600 dark:border-t-blue-400" />
    </div>
  );
}
