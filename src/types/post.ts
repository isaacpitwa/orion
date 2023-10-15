export type Post = {
  caption: string;
  images: string[];
  location: string;
  category: Array<PostCategory>;
};

export type PostCategory = {
  id: number;
  name: string;
};
