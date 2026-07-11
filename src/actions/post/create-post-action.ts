'use server';

import { makePartialPublicPost, publicPost } from '@/dto/post/dto';
import { PostCreateSchema } from '@/lib/post/validations';
import { postRepository } from '@/repositories/post';
import { v4 as uuidV4 } from 'uuid';

import { getZodErrorMessages } from '@/utils/get-zod-error-massages';
import { makeSlugFromText } from '@/utils/make-slug-from-text';

import { updateTag } from 'next/cache';
import { redirect } from 'next/navigation';

type createPostActionState = {
  formState: publicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: createPostActionState,
  formData: FormData,
): Promise<createPostActionState> {
  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    };
  }

  const formDataToObj = Object.fromEntries(formData.entries());
  const zodParsedObj = PostCreateSchema.safeParse(formDataToObj);

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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    id: uuidV4(),
    slug: makeSlugFromText(validPostData.title),
  };

  try{
    await postRepository.create(newPost);
  } catch(e: unknown) {
    if(e instanceof Error) {
      return {
        formState: newPost,
        errors: [e.message],
      }
    }

    return {
      formState: newPost,
      errors: ['Erro desconhecido'],
    }
  }

  updateTag('posts');
  redirect(`/admin/post/${newPost.id}`);
}
