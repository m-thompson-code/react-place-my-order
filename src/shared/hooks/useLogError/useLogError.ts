import { useEffect } from "react";

export const useLogError = (error: Error | string | undefined | null) => {
  const hasError = !!error;
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasError]);
}
