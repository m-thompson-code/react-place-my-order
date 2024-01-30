export function dataPatch<T>(value: { data: T }): T {
  return "data" in value ? value.data : value as T;
}

export function fetchFromPlaceMyOrderApi<T>(url: string, options: { params?: Record<string, boolean | string | number>, options?: RequestInit | undefined | null } = {}): Promise<T> {
  const urlInstance = new URL(`http://localhost:7070/${url}`);

  const { params, options: fetchOptions } = options;

  if (params) {
    for (const key in params) {
      urlInstance.searchParams.append(key, params[key].toString());
    }
  }

  return fetch(urlInstance.toString(), fetchOptions ?? undefined).then(res => res.json() as Promise<{ data: T }>).then(dataPatch);
}
