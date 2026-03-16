import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const allPublicPosts = cache(
  async () => await postRepository.findAllPublic(),
);
