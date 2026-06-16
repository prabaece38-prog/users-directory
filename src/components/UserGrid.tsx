import { UserCard } from "./UserCard";
import type { User } from "../types";

interface UserGridProps {
  users: User[];
}


export function UserGrid({ users }: UserGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
