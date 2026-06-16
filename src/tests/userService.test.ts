import { describe, expect, it } from "vitest";
import { filterUsersBySearchTerm, getFullName } from "../services";
import { createMockUser } from "./mockUser";

describe("getFullName", () => {
  it("combines first and last name", () => {
    const user = createMockUser({ firstName: "John", lastName: "Smith" });
    expect(getFullName(user)).toBe("John Smith");
  });
});

describe("filterUsersBySearchTerm", () => {
  const users = [
    createMockUser({ id: 1, firstName: "John", lastName: "Smith", email: "john@mail.com" }),
    createMockUser({ id: 2, firstName: "Alice", lastName: "Brown", email: "alice@mail.com" }),
  ];

  it("returns all users when search term is empty", () => {
    expect(filterUsersBySearchTerm(users, "")).toHaveLength(2);
  });

  it("filters by name, case-insensitively", () => {
    const result = filterUsersBySearchTerm(users, "john");
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("John");
  });

  it("filters by email", () => {
    const result = filterUsersBySearchTerm(users, "alice@mail.com");
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Alice");
  });

  it("returns an empty array when nothing matches", () => {
    expect(filterUsersBySearchTerm(users, "nonexistent")).toHaveLength(0);
  });
});
