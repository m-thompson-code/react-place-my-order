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

function useFetchWrapper<T>(url: string): ApiState<T> {
  const { data, error } = useFetch<{ data: T }>(`http://localhost:7070/${url}`);
  let state: 'loading' | 'loaded' | 'failed' = 'loading';

  if (error) { state = 'failed'} else if (data) { state = 'loaded'; }

  return { state, data: data?.data, error } as ApiState<T>;
}

export const useFetchFromPlaceMyOrderApi = useFetchWrapper;
