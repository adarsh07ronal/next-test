import { client } from "@/lib/graphql/client";
import getCategory from "@/lib/graphql/query/getCategory";
import VideoThumbnail from "@/components/VideoThumbnail";

type Props = {
  params: Promise<{
    categoryId: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { categoryId } = await params;

  const data = await client.request(getCategory, {
    id: categoryId,
  });

  const category = data.category;

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        {category.name}
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {category.videos.map((video: any) => (
          <VideoThumbnail
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnail={video.landscapeThumbnail}
          />
        ))}
      </div>
    </main>
  );
}
