export interface PaginationState<T> {
  items?: T[];
  nextPageToken?: string | null | undefined;
  hasMadeAtLeastOneFetch?: boolean;
}

/**
 * Is there the potential to fetch more items?
 */
export function isPotentialForMore<T>(value: PaginationState<T>): boolean {
  return !!value.nextPageToken || !value.hasMadeAtLeastOneFetch;
}

/**
 * Should the client try to fetch more items regardless of potential?
 */
export function shouldFetchMore<T>(
  value: PaginationState<T>,
  paginationCurrent: number,
  paginationPageSize?: number
): boolean {
  const b: number = paginationPageSize || 0;
  const count: number = value.items?.length ?? 0;
  return count < paginationCurrent * b;
}
