import { Suspense } from "react";
import { client } from "@/lib/graphql/client";
import getOriginalVideo from "@/lib/graphql/query/getOriginalVideo";
import getVideoComments from "@/lib/graphql/query/getVideoComments";
import VideoComments from "@/components/VideoComments";

export default async function VideoPage({ params }: {
  params: { videoId: string };
}) {
  const { videoId } = params;

  const videoData = await client.request(getOriginalVideo, { id: videoId });

  const commentsData = await client.request(getVideoComments, {
    id: videoId,
    first: 5,
  });

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">
            {videoData.originalVideo.title}
          </h1>

          <p className="text-gray-700 mb-6">
            {videoData.originalVideo.description}
          </p>

          <p className="text-sm">
            ❤️ {videoData.originalVideo.likeNum}
          </p>
        </section>

        <aside className="border-l pl-6">
          <Suspense fallback={<p>Loading comments…</p>}>
            <VideoComments
              videoId={videoId}
              initialData={commentsData.videoComments}
            />
          </Suspense>
        </aside>
      </div>
    </main>
  );
}
