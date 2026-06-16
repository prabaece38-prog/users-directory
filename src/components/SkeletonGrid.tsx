
function SkeletonCard() {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200
      bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
      <div className="h-16 w-16 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-3 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-3 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}

interface SkeletonGridProps {
  count?: number;
}

export function SkeletonGrid({ count = 8 }: SkeletonGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
