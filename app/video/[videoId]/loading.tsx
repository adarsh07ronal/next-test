export default function LoadingVideoPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Video info skeleton */}
        <section className="md:col-span-2 space-y-4">
          <div className="h-8 w-3/4 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
          <div className="h-4 w-2/3 bg-gray-200 rounded" />
          <div className="h-4 w-24 bg-gray-200 rounded mt-4" />
        </section>

        {/* Right: Comments skeleton */}
        <aside className="border-l pl-6 space-y-4">
          <div className="h-6 w-32 bg-gray-200 rounded" />

          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full" />
                <div className="h-4 w-24 bg-gray-200 rounded" />
              </div>
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-3 w-1/3 bg-gray-200 rounded" />
            </div>
          ))}
        </aside>
      </div>
    </main>
  );
}
