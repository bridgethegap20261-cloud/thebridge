"use client";

import { useSearchParams } from "next/navigation";

export default function ResultsClient() {
  const searchParams = useSearchParams();
  const zip = searchParams.get("zip");

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold">Results</h1>
      <p>ZIP code: {zip}</p>
    </main>
  );
}
