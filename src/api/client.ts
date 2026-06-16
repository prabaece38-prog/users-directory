// Thin wrapper around fetch. Keeps base URL + error handling
// in one place so services don't repeat fetch boilerplate.

import { API_BASE_URL } from "../constants";

export class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new ApiError(
      `Request failed with status ${response.status}`,
      response.status
    );
  }

  return response.json() as Promise<T>;
}
