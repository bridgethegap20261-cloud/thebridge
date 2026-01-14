"use client";
import ResourceCard from "../components/ResourceCard";
import { useSearchParams } from "next/navigation";
import { resources } from "@/data/resources";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const zip = searchParams.get("zip");

  const filteredResources = resources.filter((resource) =>
    zip ? resource.coverageZips.includes(zip) : false
  );

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Available Resources
        </h1>

        <p className="text-gray-600 mb-6">
          Showing resources for ZIP code{" "}
          <span className="font-semibold">{zip}</span>
        </p>

        <button
  onClick={() => {
    window.location.href = "/";
  }}
  className="text-blue-600 underline mb-6"
>
  Change ZIP code
</button>


        {filteredResources.length === 0 && (
          <p className="text-gray-500">
            No resources found for this ZIP code.
          </p>
        )}

       {filteredResources.map((resource) => (
  <ResourceCard
    key={resource.id}
    resource={resource}
  />
))}

      </div>
    </main>
  );
}
