'use client';

import { createPostAction } from '@/actions/post/create-post-action';
import { makePartialPublicPost, publicPost } from '@/dto/post/dto';
import { useActionState, useEffect, useState } from 'react';
import { showMessage } from '@/adapters/wrapperToastfy';
import { ImageUploader } from '../ImageUploader';

import { MarkdownEditor } from '@/components/MarkdownEditor';
import { InputCheckBox } from '@/components/InputCheckBox';
import { InputText } from '@/components/InputText';
import { Button } from '@/components/Button';

import clsx from 'clsx';

type ManagePostFormProps = {
  publicPost?: publicPost;
};

export function ManagerPostForm({ publicPost }: ManagePostFormProps) {
  const initalState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };

  const [state, action, isPending] = useActionState(
    createPostAction,
    initalState,
  );

  useEffect(() => {
    if(state.errors.length > 0){
      showMessage.dismiss();
      state.errors.forEach(error => {
        showMessage.error(error);
      })
    }
  }, [state.errors]);

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
          readOnly
        />

        <InputText
          labelText='Slug'
          name='slug'
          type='text'
          placeholder='Slug gerada automaticamente'
          defaultValue={formState.slug}
          readOnly
        />

        <InputText
          labelText='Autor'
          name='author'
          type='text'
          placeholder='Digite o nome do autor'
          defaultValue={formState.author}
        />

        <InputText
          labelText='Título'
          name='title'
          type='text'
          placeholder='Título do post'
          defaultValue={formState.title}
        />

        <InputText
          labelText='Excerto'
          name='excerpt'
          type='text'
          placeholder='Resumo do post'
          defaultValue={formState.excerpt}
        />

        <MarkdownEditor
          labelText='Conteúdo'
          value={contentValue}
          setValue={setContentValue}
          textAreaName='content'
        />

        <ImageUploader />

        <InputText
          labelText='URL da imagem de capa'
          name='coverImageUrl'
          type='text'
          placeholder='Digite a URL da imagem'
          defaultValue={formState.coverImageUrl}
        />

        <InputCheckBox
          labelText='Publicar'
          name='published'
          type='checkbox'
          defaultChecked={formState.published}
        />
      </div>

      <div className='flex justify-end'>
        <Button
          type='submit'
          size='lg'
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
