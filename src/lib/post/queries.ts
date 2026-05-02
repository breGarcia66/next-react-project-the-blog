import { postRepository } from '@/repositories/post';
import { cacheTag } from 'next/cache';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export async function allPublicPosts() {
  'use cache';
  cacheTag('posts');

  return await postRepository.findAllPublic();
}

export const findPostById = cache(async (id: string) => {
  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) notFound();

  return post;
});


export async function findPostBySlug(slug: string) {
  'use cache';
  cacheTag(`post-${slug}`);

  const post = await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);

  if (!post) notFound();

  return post;
}
