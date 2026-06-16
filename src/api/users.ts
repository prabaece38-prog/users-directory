import { apiGet } from "./client";
import { USERS_FETCH_LIMIT } from "../constants";
import type { UsersResponse } from "../types";

export function fetchUsers(): Promise<UsersResponse> {
  return apiGet<UsersResponse>(`/users?limit=${USERS_FETCH_LIMIT}`);
}
