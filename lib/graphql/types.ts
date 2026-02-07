export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  description?: string;
  likeCount?: number;
}

export interface Category {
  id: string;
  name: string;
  videos: Video[];
}

export interface Comment {
  id: string;
  text: string;
  userName: string;
}
