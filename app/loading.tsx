import SkeletonThumbnail from "@/components/SkeletonThumbnail";

export default function LoadingHome() {
  return (
    <main className="p-8 space-y-12">
      {[1, 2, 3].map((section) => (
        <section key={section}>
          <div className="h-6 w-48 bg-gray-200 rounded mb-4 animate-pulse" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonThumbnail key={i} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
