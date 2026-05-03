import { postRepository } from '@/repositories/post';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findPostById = cache(async (id: string) => {
  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) notFound();

  return post;
});

export const findAllPostAdmin = cache(async () => {
  const posts = await postRepository.findAll();

  if (!posts) notFound();

  return posts;
});
