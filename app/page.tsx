import { client } from "@/lib/graphql/client";
import getHomeScreens from "@/lib/graphql/query/getHomeScreens";
import VideoThumbnail from "@/components/VideoThumbnail";
import Link from "next/link";


export default async function Home() {
  const data = await client.request(getHomeScreens);

  return (
    <main className="p-8 space-y-12">
      {data.homeScreens.map((screen: any) => (
        <section key={screen.id}>
         <h2 className="text-lg font-semibold mb-4">
  <Link
    href={`/category/${screen.category.id}`}
    className="hover:underline"
  >
    {screen.category.name}
  </Link>
</h2>


<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {screen.videos.map((video: any) => (
              <VideoThumbnail
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnail={video.landscapeThumbnail}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
