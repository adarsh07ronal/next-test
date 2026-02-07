import { Suspense } from "react";
import { client } from "@/lib/graphql/client";
import getOriginalVideo from "@/lib/graphql/query/getOriginalVideo";
import VideoComments from "@/components/VideoComments";

type Props = {
  params: Promise<{
    videoId: string;
  }>;
};

export default async function VideoPage({ params }: Props) {
  // ✅ FIX 1: await params
  const { videoId } = await params;

  const data = await client.request(getOriginalVideo, {
    id: videoId,
  });

  const video = data.originalVideo;

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Movie info */}
        <section className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">
            {video.title}
          </h1>

          <p className="text-gray-700 mb-6">
            {video.description}
          </p>

          <p className="text-sm">
            ❤️ {video.likeNum}
          </p>
        </section>

        {/* Right: Comments */}
        <aside className="border-l pl-6">
          <Suspense fallback={<p className="text-gray-400">Loading comments…</p>}>
            <VideoComments videoId={videoId} />
          </Suspense>
        </aside>
      </div>
    </main>
  );
}
