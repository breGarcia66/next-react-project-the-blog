'use server';

import { drizzleDb } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';

import { asyncDelay } from '@/utils/async-delay';
import { logColor } from '@/utils/log-colors';

import { postRepository } from '@/repositories/post';

import { eq } from 'drizzle-orm';
import { updateTag } from 'next/cache';

export async function deletePostAction(id: string) {
  await asyncDelay(2000);
  logColor(`=SERVER=\n${id}`);

  if (!id || typeof id != 'string') {
    return {
      erro: 'Dados de ID inválidos',
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return {
      erro: 'Post não existe na base de dados',
    };
  }

  await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

  // updateTag('posts');
  // updateTag(`post-${post.slug}`);

  return {
    erro: '',
  };
}
