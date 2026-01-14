"use client";

import { useState } from "react";

export default function HomePage() {
  const [zip, setZip] = useState("");
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            The Bridge
          </h1>
          <p className="text-sm text-gray-600">
            Find free and low-cost medical support resources
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center">
        <div className="max-w-5xl mx-auto px-4 py-12 w-full">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Support shouldn’t depend on your location
            </h2>

            <p className="text-gray-700 mb-8 max-w-2xl">
              Search for free or reduced-cost mental health care, medications,
              counseling, post-diagnosis support, and hospice resources —
              anywhere in the United States.
            </p>

            {/* Search Box */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
  type="text"
  value={zip}
  onChange={(e) => setZip(e.target.value)}
  placeholder="Enter ZIP code"
  className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg"
  maxLength={5}
/>

            <a
  href={`/results?zip=${zip}`}
  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition text-center block"
>
  Search
</a>

 

            </div>

            <p className="text-sm text-gray-500 mt-4">
              You can search on behalf of a loved one or patient.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} The Bridge. Information only — not
            medical advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
