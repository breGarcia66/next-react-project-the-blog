'use server';

import { verifyLoginSession } from '@/lib/login/login-manager';
import { postRepository } from '@/repositories/post';
import { updateTag } from 'next/cache';

export async function deletePostAction(id: string) {
  const isAuthenticated = await verifyLoginSession();

  if(!isAuthenticated) {
    return {
      erro: 'Faça login novamente em outra aba',
    }
  }
  
  if (!id || typeof id != 'string') {
    return {
      erro: 'Dados de ID inválidos',
    };
  }

  let post;

  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        erro: e.message,
      };
    }

    return {
      erro: 'Erro desconhecido',
    };
  }

  updateTag('posts');
  updateTag(`post-${post.slug}`);

  return {
    erro: '',
  };
}
