import { useCallback, useEffect, useState } from "react";
import { fetchUsers } from "../api";
import type { User } from "../types";

interface UseUsersResult {
  users: User[];
  isLoading: boolean;
  error: string | null;
  retry: () => void;
}

export function useUsers(): UseUsersResult {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchUsers();
      setUsers(data.users);
    } catch {
      setError("Something went wrong while fetching users. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return { users, isLoading, error, retry: loadUsers };
}
