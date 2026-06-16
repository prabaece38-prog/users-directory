import { describe, expect, it } from "vitest";
import { getTotalPages, paginate } from "../utils";

describe("paginate", () => {
  const items = [1, 2, 3, 4, 5, 6, 7];

  it("returns the correct slice for the first page", () => {
    expect(paginate(items, 1, 3)).toEqual([1, 2, 3]);
  });

  it("returns the correct slice for a middle page", () => {
    expect(paginate(items, 2, 3)).toEqual([4, 5, 6]);
  });

  it("returns a partial slice for the last page", () => {
    expect(paginate(items, 3, 3)).toEqual([7]);
  });

  it("returns an empty array when page is out of range", () => {
    expect(paginate(items, 10, 3)).toEqual([]);
  });
});

describe("getTotalPages", () => {
  it("calculates total pages correctly", () => {
    expect(getTotalPages(7, 3)).toBe(3);
    expect(getTotalPages(9, 3)).toBe(3);
    expect(getTotalPages(10, 3)).toBe(4);
  });

  it("returns 1 when there are no items", () => {
    expect(getTotalPages(0, 10)).toBe(1);
  });
});
