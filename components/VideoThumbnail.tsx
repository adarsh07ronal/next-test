import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  thumbnail: string;
};

export default function VideoThumbnail({ id, title, thumbnail }: Props) {
  return (
    <Link href={`/video/${id}`} className="block">
    <div className="aspect-video overflow-hidden rounded-lg">
  <Image
  src={thumbnail}
  alt={title}
  width={320}
  height={180}
  className="rounded-lg object-cover w-full"
/>
</div>

      <p className="mt-2 text-sm">{title}</p>
    </Link>
  );
}