"use client";

import { useCallback, useState } from "react";

export function useAdminStore<T>(
  getter: () => T,
  setter: (value: T) => void
) {
  const [data, setData] = useState<T>(() => getter());

  const update = useCallback(
    (value: T | ((prev: T) => T)) => {
      setData((prev) => {
        const next =
          typeof value === "function" ? (value as (p: T) => T)(prev) : value;
        setter(next);
        return next;
      });
    },
    [setter]
  );

  return [data, update] as const;
}
