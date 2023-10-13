import { useFetch } from "usehooks-ts";

interface _ApiState<T = unknown> {
  state: 'loading' | 'loaded' | 'failed';
  data?: T;
  error?: Error;
}

interface LoadingApiState extends _ApiState {
  state: 'loading';
  data?: never;
  error?: never;
}

interface LoadedApiState<T> extends _ApiState<T> {
  state: 'loaded';
  data: T;
  error?: never;
}

interface FailedApiState extends _ApiState {
  state: 'failed';
  data?: never;
  error: Error;
}

type ApiState<T> = LoadingApiState | LoadedApiState<T> | FailedApiState;

function useFetchWrapper<T>(url: string, params: Record<string, boolean | string | number> = {}, options?: Parameters<typeof useFetch>[1]): ApiState<T> {
  const urlInstance = new URL(`http://localhost:7070/${url}`);

  for (const key in params) {
    urlInstance.searchParams.append(key, params[key].toString());
  }

  const { data: res, error } = useFetch<{ data: T }>(urlInstance.toString(), options);

  if (error) {
    return { state: 'failed', error };
  }

  if (res) {
    return { state: 'loaded', data: res.data ? res.data : (res as T) };
  }

  return { state: 'loading' };
}

export const useFetchFromPlaceMyOrderApi = useFetchWrapper;
