export default function CommentsSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-6 w-32 bg-gray-200 rounded" />

      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-1/3" />
        </div>
      ))}
    </div>
  );
}
