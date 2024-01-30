import { useEffect, useRef, useState } from 'react';

interface _AsyncState<V = unknown, E = Error> {
  status: 'idle' | 'loading' | 'loaded' | 'failed';
  value?: V;
  error?: E;
}

interface PendingAsyncState extends _AsyncState {
  status: 'idle';
  value?: never;
  error?: never;
}

interface LoadingAsyncState extends _AsyncState {
  status: 'loading';
  value?: never;
  error?: never;
}

interface LoadedAsyncState<V> extends _AsyncState<V> {
  status: 'loaded';
  value: V;
  error?: never;
}

interface FailedAsyncState<E = Error> extends _AsyncState<never, E> {
  status: 'failed';
  value?: never;
  error: E;
}

type AsyncState<V = unknown, E = Error> =
  | PendingAsyncState
  | LoadingAsyncState
  | LoadedAsyncState<V>
  | FailedAsyncState<E>;

export function useMoo<V, D extends readonly unknown[], E = Error>(
  // fn: (...dependencies: [...D]) => AsyncState<V, E> | Promise<V>,
  fn: (...dependencies: [...D]) => void | Promise<V>,
  dependencies: [...D],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serialize?: (...dependencies: [...D]) => any
): AsyncState<V, E> {
  // // Used to prevent state update if the component is unmounted
  // const cancelled = useRef<boolean>(false);

  // Used to state asynchronous function calls
  const id = useRef(0);

  const [asyncState, setAsyncState] = useState<AsyncState<V, E>>({
    status: 'loading',
  });

  useEffect(() => {
    // assign each new assignment based on dependencies with an id
    // This id will be used to ignore state asynchronous updates
    id.current += 1;

    const previousId = id.current;
    const _setAsyncState = (asyncState: AsyncState<V, E>) => {
      // // Skip if component is unmounted
      // if (cancelled.current) {
      //   return;
      // }

      // Ignore previous asynchronous function calls
      if (id.current !== previousId) {
        return;
      }

      /** debugging */ console.log(
        asyncState,
        dependencies,
        id.current,
        previousId
      );
      setAsyncState(asyncState);
    };

    const result = fn(...dependencies);

    // Check if result is (not) a Promise
    // if (!('then' in result)) {
    if (!result) {
      // _setAsyncState(result);
      return { status: 'idle' };
      // return;
    }

    _setAsyncState({ status: 'loading' });

    result
      .then((value) => _setAsyncState({ status: 'loaded', value }))
      .catch((error) => _setAsyncState({ status: 'failed', error }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [...(serialize ? [serialize(...dependencies)] : dependencies)]);

  return asyncState;
  // return { ...asyncState, cancel: () => {
  //   cancelled.current = true;
  // } };
}
