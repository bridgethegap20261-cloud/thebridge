import { Suspense } from "react";
import ResultsClient from "./results-client";

export const dynamic = "force-dynamic";

export default function ResultsPage() {
  return (
    <Suspense fallback={<p className="p-8">Loading results…</p>}>
      <ResultsClient />
    </Suspense>
  );
}
