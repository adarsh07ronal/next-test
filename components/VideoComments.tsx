"use client";

import { useState } from "react";
import { GraphQLClient } from "graphql-request";
import getVideoComments from "@/lib/graphql/query/getVideoComments";

const client = new GraphQLClient(
  "https://develop.api.samansa.com/graphql"
);

type Props = {
  videoId: string;
  initialData: {
    allCount: number;
    pageInfo: {
      endCursor: string | null;
      hasNextPage: boolean;
    };
    edges: any[];
  };
};

export default function VideoComments({ videoId, initialData }: Props) {
  const [edges, setEdges] = useState(initialData.edges);
  const [pageInfo, setPageInfo] = useState(initialData.pageInfo);
  const [loading, setLoading] = useState(false);

  async function loadMore() {
    if (!pageInfo.hasNextPage || loading) return;

    setLoading(true);

    const data = await client.request(getVideoComments, {
      id: videoId,
      first: 5,
      after: pageInfo.endCursor,
    });

    setEdges((prev) => [...prev, ...data.videoComments.edges]);
    setPageInfo(data.videoComments.pageInfo);
    setLoading(false);
  }

  if (edges.length === 0) {
    return <p className="text-sm text-gray-500">No comments yet.</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">
        Comments ({initialData.allCount})
      </h2>

      {edges.map((edge) => {
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
              <span>❤️ {comment.likeNum}</span>
              <span>
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        );
      })}

      {pageInfo.hasNextPage && (
        <button
          onClick={loadMore}
          disabled={loading}
          className="text-sm text-blue-600 hover:underline disabled:text-gray-400"
        >
          {loading ? "Loading…" : "Load more comments"}
        </button>
      )}
    </div>
  );
}
