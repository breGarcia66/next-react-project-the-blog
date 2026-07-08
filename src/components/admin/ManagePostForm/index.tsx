'use client';

import { MarkdownEditor } from '@/components/MarkdownEditor';
import { InputCheckBox } from '@/components/InputCheckBox';
import { InputText } from '@/components/InputText';
import { ImageUploader } from '../ImageUploader';
import { Button } from '@/components/Button';
import { publicPost } from '@/dto/post/dto';

import { useActionState, useEffect, useState } from 'react';

import clsx from 'clsx';
import { createPostAction } from '@/actions/post/create-post-action';

type ManagePostFormProps = {
  publicPost?: publicPost;
};

export function ManagerPostForm({ publicPost }: ManagePostFormProps) {
  const [contentValue, setContentValue] = useState(publicPost?.content || '');

  const initalState = {
    numero: 0,
  };

  const [state, action, isPending] = useActionState(
    createPostAction,
    initalState,
  );

  useEffect(() => {
    console.log(state.numero);
  }, [state]);

  return (
    <form action={action} className='mb-16'>
      <div className='py-12 flex flex-col gap-4'>
        <InputText
          labelText='Identificador'
          name='id'
          type='text'
          placeholder='ID gerado automaticamente'
          defaultValue={publicPost?.id || ''}
          readOnly
        />

        <InputText
          labelText='Slug'
          name='slug'
          type='text'
          placeholder='Slug gerada automaticamente'
          defaultValue={publicPost?.slug || ''}
          readOnly
        />

        <InputText
          labelText='Autor'
          name='author'
          type='text'
          placeholder='Digite o nome do autor'
          defaultValue={publicPost?.author || ''}
        />

        <InputText
          labelText='Título'
          name='title'
          type='text'
          placeholder='Título do post'
          defaultValue={publicPost?.title || ''}
        />

        <InputText
          labelText='Excerto'
          name='excerpt'
          type='text'
          placeholder='Resumo do post'
          defaultValue={publicPost?.excerpt || ''}
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
          defaultValue={publicPost?.coverImageUrl || ''}
        />

        <InputCheckBox
          labelText='Publicar'
          name='published'
          type='checkbox'
          defaultChecked={publicPost?.published}
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
