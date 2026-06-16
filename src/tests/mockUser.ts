import type { User } from "../types";

export function createMockUser(overrides: Partial<User> = {}): User {
  return {
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
    phone: "123-456-7890",
    age: 30,
    gender: "female",
    image: "https://example.com/avatar.png",
    address: {
      address: "123 Main St",
      city: "Springfield",
      state: "IL",
      postalCode: "62704",
    },
    company: {
      name: "Acme Corp",
      title: "Engineer",
      department: "Engineering",
    },
    ...overrides,
  };
}
