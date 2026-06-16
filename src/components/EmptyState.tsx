interface EmptyStateProps {
  message?: string;
}

export function EmptyState({ message = "No users found." }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-2 py-16 text-center">
      <span className="text-4xl">🔍</span>
      <p className="text-gray-500 dark:text-gray-400">{message}</p>
    </div>
  );
}
