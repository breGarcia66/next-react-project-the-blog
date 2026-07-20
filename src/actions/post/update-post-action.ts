'use server';

import { makePartialPublicPost, makePublicPostFromDb, publicPost } from '@/dto/post/dto';
import { postRepository } from '@/repositories/post';
import { updateTag } from 'next/cache';

import { getZodErrorMessages } from '@/utils/get-zod-error-massages';
import { makeRandomString } from '@/utils/make-random-string';

import { verifyLoginSession } from '@/lib/login/login-manager';
import { PostUpdateSchema } from '@/lib/post/validations';

type updatePostActionState = {
  formState: publicPost;
  errors: string[];
  success?: string;
};

export async function updatePostAction(
  prevState: updatePostActionState,
  formData: FormData,
): Promise<updatePostActionState> {
  const isAuthenticated = await verifyLoginSession();

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    };
  }

  const id = formData.get('id')?.toString() || '';
  if (!id || typeof id !== 'string'){
    return {
      formState: prevState.formState,
      errors: ['ID inválido'],
    }
  }

  const formDataToObj = Object.fromEntries(formData.entries());
  const zodParsedObj = PostUpdateSchema.safeParse(formDataToObj);

  if(!isAuthenticated) {
    return {
      formState: makePartialPublicPost(formDataToObj),
      errors: ['Faça login em outra aba antes de salvar'],
    }
  }

  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(zodParsedObj.error);
    return {
      formState: makePartialPublicPost(formDataToObj),
      errors,
    };
  }

  const validPostData = zodParsedObj.data;
  const newPost = {
    ...validPostData,
  };

  let post;

  try{
    post = await postRepository.update(id, newPost);
  } catch(e: unknown) {
    if(e instanceof Error) {
      return {
        formState: makePartialPublicPost(formDataToObj),
        errors: [e.message],
      }
    }

    return {
      formState: makePartialPublicPost(formDataToObj),
      errors: ['Erro desconhecido'],
    }
  }

  updateTag('posts');
  updateTag(`post-${post.slug}`);

  return {
    formState: makePublicPostFromDb(post),
    errors: [],
    success: makeRandomString(),
  }
}
