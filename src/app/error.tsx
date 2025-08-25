"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <html>
      <body className="flex items-center justify-center h-screen bg-white">
        <div className="text-center px-6">
          <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
          <p className="mt-2 text-gray-600">{error.message}</p>
          <button
            onClick={() => reset()}
            className="mt-4 px-6 py-3 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
