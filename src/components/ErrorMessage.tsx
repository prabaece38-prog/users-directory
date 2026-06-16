interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-red-200
      bg-red-50 p-8 text-center dark:border-red-800 dark:bg-red-900/20">
      <p className="text-red-700 dark:text-red-300">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white
          hover:bg-red-700"
      >
        Retry
      </button>
    </div>
  );
}
