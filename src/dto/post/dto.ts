import { postModel } from '@/models/post/post-model';

export type publicPost = Omit<postModel, 'updatedAt'>;

export const makePartialPublicPost = (
  post?: Partial<postModel>,
): publicPost => {
  return {
    id: post?.id || '',
    title: post?.title || '',
    slug: post?.slug || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    coverImageUrl: post?.coverImageUrl || '',
    published: post?.published || false,
    createdAt: post?.createdAt || '',
    author: post?.author || '',
  };
};

export const makePublicPostFromDb = (post: postModel): publicPost => {
  return makePartialPublicPost(post);
};
