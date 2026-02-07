import { client } from "@/lib/graphql/client";
import getVideoComments from "@/lib/graphql/query/getVideoComments";

type Props = {
  videoId: string;
};

export default async function VideoComments({ videoId }: Props) {
  const data = await client.request(getVideoComments, {
    id: videoId,
    first: 10,
  });

  const edges = data.videoComments.edges;

if (!edges || edges.length === 0) {
  return (
    <p className="text-sm text-gray-500">
      No comments yet.
    </p>
  );
}

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg mb-2">
        Comments ({data.videoComments.allCount})
      </h2>

      {edges.map((edge: any) => {
        const comment = edge.node;

        return (
          <div key={comment.id} className="text-sm border-b pb-2">
            <div className="flex items-center gap-2 mb-1">
              <img
  src={comment.user.avatar || "/avatar-placeholder.svg"}
  alt={comment.user.name}
  className="w-6 h-6 rounded-full"
/>

              <span className="font-medium">
                {comment.user.name}
              </span>
            </div>

            <p className="text-gray-700 mb-1">
              {comment.contents}
            </p>

            <div className="text-xs text-gray-500 flex gap-4">
              <span>
                ❤️ {comment.likeNum}
              </span>
              <span>
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
