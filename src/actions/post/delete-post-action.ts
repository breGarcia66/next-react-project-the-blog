'use server';

import { postRepository } from '@/repositories/post';
import { updateTag } from 'next/cache';

import { asyncDelay } from '@/utils/async-delay';
import { logColor } from '@/utils/log-colors';


export async function deletePostAction(id: string) {
  await asyncDelay(2000);
  logColor(`=SERVER=\n${id}`);

  if (!id || typeof id != 'string') {
    return {
      erro: 'Dados de ID inválidos',
    };
  }

  let post;

  try {
   post = await postRepository.delete(id);
  } catch(e: unknown) {
    if(e instanceof Error) {
      return {
        erro: e.message,
      }
    }

    return {
      erro: 'Erro desconhecido',
    }
  };

  updateTag('posts');
  updateTag(`post-${post.slug}`);

  return {
    erro: '',
  };
}
