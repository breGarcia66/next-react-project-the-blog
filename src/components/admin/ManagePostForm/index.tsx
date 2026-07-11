'use client';

import { makePartialPublicPost, publicPost } from '@/dto/post/dto';
import { showMessage } from '@/adapters/wrapperToastfy';
import { ImageUploader } from '../ImageUploader';

import { MarkdownEditor } from '@/components/MarkdownEditor';
import { InputCheckBox } from '@/components/InputCheckBox';
import { InputText } from '@/components/InputText';
import { Button } from '@/components/Button';

import { updatePostAction } from '@/actions/post/update-post-action';
import { createPostAction } from '@/actions/post/create-post-action';

import { useSearchParams, useRouter } from 'next/navigation';
import { Router } from 'next/router';

import { useActionState, useEffect, useState } from 'react';

import clsx from 'clsx';

type ManagePostFormUpdateProps = {
  mode: 'update';
  publicPost: publicPost;
};

type ManagePostFormCreateProps = {
  mode: 'create';
};

type ManagePostFormProps =
  | ManagePostFormCreateProps
  | ManagePostFormUpdateProps;

export function ManagerPostForm(props: ManagePostFormProps) {
  const { mode } = props;
  let publicPost;

  if (mode === 'update') {
    publicPost = props.publicPost;
  }

  const actionsMap = {
    create: createPostAction,
    update: updatePostAction,
  };

  const initalState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };

  const [state, action, isPending] = useActionState(
    actionsMap[mode],
    initalState,
  );

  const searchParams = useSearchParams();
  const router = useRouter();

  const created = searchParams.get('created');

  useEffect(() => {
    if (state.errors.length > 0) {
      showMessage.dismiss();
      state.errors.forEach(error => {
        showMessage.error(error);
      });
    }
  }, [state.errors]);

  useEffect(() => {
    if (state.success) {
      showMessage.dismiss();
      showMessage.success('Post atualizado');
    }
  }, [state.success]);

  useEffect(() => {
    if (created === '1') {
      showMessage.dismiss();
      showMessage.success('Novo post salvo');

      const url = new URL(window.location.href);

      url.searchParams.delete('created');
      router.replace(url.toString());
    }
  }, [created, router]);

  const { formState } = state;
  const [contentValue, setContentValue] = useState(formState.content);

  return (
    <form action={action} className='mb-16'>
      <div className='py-12 flex flex-col gap-4'>
        <InputText
          labelText='Identificador'
          name='id'
          type='text'
          placeholder='ID gerado automaticamente'
          defaultValue={formState.id}
          disabled={isPending}
          readOnly
        />

        <InputText
          labelText='Slug'
          name='slug'
          type='text'
          placeholder='Slug gerada automaticamente'
          defaultValue={formState.slug}
          disabled={isPending}
          readOnly
        />

        <InputText
          labelText='Autor'
          name='author'
          type='text'
          placeholder='Digite o nome do autor'
          defaultValue={formState.author}
          disabled={isPending}
        />

        <InputText
          labelText='Título'
          name='title'
          type='text'
          placeholder='Título do post'
          defaultValue={formState.title}
          disabled={isPending}
        />

        <InputText
          labelText='Excerto'
          name='excerpt'
          type='text'
          placeholder='Resumo do post'
          defaultValue={formState.excerpt}
          disabled={isPending}
        />

        <MarkdownEditor
          labelText='Conteúdo'
          value={contentValue}
          setValue={setContentValue}
          textAreaName='content'
          disabled={isPending}
        />

        <ImageUploader disabled={isPending} />

        <InputText
          labelText='URL da imagem de capa'
          name='coverImageUrl'
          type='text'
          placeholder='Digite a URL da imagem'
          defaultValue={formState.coverImageUrl}
          disabled={isPending}
        />

        <InputCheckBox
          labelText='Publicar'
          name='published'
          type='checkbox'
          defaultChecked={formState.published}
          disabled={isPending}
        />
      </div>

      <div className='flex justify-end'>
        <Button
          type='submit'
          size='lg'
          disabled={isPending}
          className={clsx(
            'bg-stone-900',
            'text-stone-200',

            'hover:bg-stone-200',
            'hover:text-stone-900',
            'hover:ring-1',
            'hover:ring-stone-900',
          )}
        >
          Enviar
        </Button>
      </div>
    </form>
  );
}
