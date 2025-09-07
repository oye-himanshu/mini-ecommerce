export default function ProductSkeletonList() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[1,2,3,4,5,6,7,8].map((i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
}


function ProductSkeleton() {
  return (
    <div className="w-full max-w-xs rounded-lg border p-4 shadow animate-pulse">
      <div className="h-40 w-full rounded bg-gray-300"></div>

      <div className="mt-4 h-4 w-3/4 rounded bg-gray-300"></div>

      <div className="mt-2 h-3 w-1/2 rounded bg-gray-200"></div>

      <div className="mt-2 h-3 w-full rounded bg-gray-200"></div>
      <div className="mt-1 h-3 w-5/6 rounded bg-gray-200"></div>

      <div className="mt-3 flex gap-1">
        <div className="h-4 w-4 rounded bg-gray-300"></div>
        <div className="h-4 w-4 rounded bg-gray-300"></div>
        <div className="h-4 w-4 rounded bg-gray-300"></div>
        <div className="h-4 w-4 rounded bg-gray-300"></div>
        <div className="h-4 w-4 rounded bg-gray-300"></div>
      </div>
      <div className="mt-3 h-5 w-16 rounded bg-gray-300"></div>
    </div>
  );
}
