interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by name or email..."
      aria-label="Search users"
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2
        text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none
        focus:ring-2 focus:ring-blue-500
        dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
    />
  );
}
