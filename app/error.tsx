"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Homepage error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="glass-card p-8 text-center max-w-md">
        <h2 className="text-xl font-bold text-white/95 mb-2">
          Something went wrong
        </h2>
        <p className="text-sm text-white/65 mb-5">{error.message}</p>
        <button
          onClick={reset}
          className="px-5 py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent/30 transition-colors text-sm font-medium"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
