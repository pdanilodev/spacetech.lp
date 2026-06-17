"use client";

import { useEffect } from "react";

const CHUNK_ERROR_PATTERNS = [
  "originalFactory.call",
  "reading 'call'",
  "Loading chunk",
  "ChunkLoadError",
  "Failed to fetch dynamically imported module",
];

function isChunkLoadError(message: string) {
  return CHUNK_ERROR_PATTERNS.some((pattern) => message.includes(pattern));
}

export function ChunkLoadRecovery() {
  useEffect(() => {
    const reloadKey = "st_chunk_reload";

    const tryReload = () => {
      const last = sessionStorage.getItem(reloadKey);
      const now = Date.now();
      if (last && now - Number(last) < 10_000) return;
      sessionStorage.setItem(reloadKey, String(now));
      window.location.reload();
    };

    const onError = (event: ErrorEvent) => {
      if (isChunkLoadError(event.message ?? "")) tryReload();
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const message =
        typeof reason === "string"
          ? reason
          : reason instanceof Error
            ? reason.message
            : "";
      if (isChunkLoadError(message)) tryReload();
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
