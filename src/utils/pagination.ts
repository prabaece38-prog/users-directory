// Generic, reusable pagination helper.
// Given the full list + page info, returns just the slice
// that should be shown on the current page.

export function paginate<T>(items: T[], page: number, pageSize: number): T[] {
  const startIndex = (page - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
}

export function getTotalPages(totalItems: number, pageSize: number): number {
  if (totalItems === 0) return 1;
  return Math.ceil(totalItems / pageSize);
}
