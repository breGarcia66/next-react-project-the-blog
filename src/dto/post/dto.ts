import { postModel } from "@/models/post/post-model";

export type publicPost = Omit<postModel, 'updatedAt'>

export const makePublicPost = (post: postModel): publicPost => {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    coverImageUrl: post.coverImageUrl,
    published: post.published,
    createdAt: post.createdAt,
    author: post.author,

  };
};
