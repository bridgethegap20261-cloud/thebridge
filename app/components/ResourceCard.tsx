type Resource = {
  id: number;
  name: string;
  services: string;
  zipCodes: string[];
  telehealth: boolean;
};

export default function ResourceCard({
  resource,
}: {
  resource: Resource;
}) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h2 className="text-lg font-semibold">{resource.name}</h2>

      <p className="text-sm text-gray-600 mt-1">
        {resource.services}
      </p>

      {resource.telehealth && (
        <p className="text-sm text-green-600 mt-2">
          Telehealth available
        </p>
      )}
    </div>
  );
}
