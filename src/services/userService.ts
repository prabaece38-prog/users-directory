
import type { User } from "../types";

export function getFullName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}

export function filterUsersBySearchTerm(users: User[], term: string): User[] {
  const normalized = term.trim().toLowerCase();

  if (!normalized) return users;

  return users.filter((user) => {
    const fullName = getFullName(user).toLowerCase();
    const email = user.email.toLowerCase();
    return fullName.includes(normalized) || email.includes(normalized);
  });
}
