"use client";

import { useSearchParams } from "next/navigation";

export default function ResultsClient() {
  const searchParams = useSearchParams();
  const zip = searchParams.get("zip");

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold mb-4">Results</h1>

      {!zip && (
        <p className="text-gray-500">
          No ZIP code provided.
        </p>
      )}

      {zip && (
        <p className="text-gray-700">
          Showing resources for ZIP code <strong>{zip}</strong>
        </p>
      )}
    </main>
  );
}
