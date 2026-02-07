import SkeletonThumbnail from "@/components/SkeletonThumbnail";

export default function LoadingCategory() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      {/* Category title skeleton */}
      <div className="h-8 w-64 bg-gray-200 rounded mb-6 animate-pulse" />

      {/* Thumbnails skeleton grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <SkeletonThumbnail key={i} />
        ))}
      </div>
    </main>
  );
}
