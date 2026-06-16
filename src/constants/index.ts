// Centralised "magic numbers" / strings so they don't get
// scattered (and duplicated) across components.

export const API_BASE_URL = "https://dummyjson.com";

// dummyjson caps "limit" at 100 users per request, so we fetch
// everything once and paginate on the client.
export const USERS_FETCH_LIMIT = 100;

export const PAGE_SIZE_OPTIONS = [5, 10, 20, 50] as const;
export const DEFAULT_PAGE_SIZE = 10;

// Wait time before a search actually triggers a re-filter
export const SEARCH_DEBOUNCE_MS = 400;

export const THEME_STORAGE_KEY = "users-directory-theme";
