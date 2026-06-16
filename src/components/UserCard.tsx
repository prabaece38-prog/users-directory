import { getFullName } from "../services";
import type { User } from "../types";

interface UserCardProps {
  user: User;
}

// Card layout used inside the responsive grid.
export function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200
      bg-white p-4 text-center shadow-sm
      dark:border-gray-700 dark:bg-gray-800">
      <img
        src={user.image}
        alt={getFullName(user)}
        className="h-16 w-16 rounded-full object-cover"
        loading="lazy"
      />
      <p className="font-semibold text-gray-900 dark:text-gray-100">
        {getFullName(user)}
      </p>
      <p className="break-all text-sm text-gray-500 dark:text-gray-400">
        {user.email}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {user.company.title} at {user.company.name}
      </p>
      <p className="text-xs text-gray-400 dark:text-gray-500">
        {user.address.city}, {user.address.state}
      </p>
    </div>
  );
}
