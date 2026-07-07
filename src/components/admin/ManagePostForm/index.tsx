'use client';

import { Button } from '@/components/Button';
import { InputCheckBox } from '@/components/InputCheckBox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';

import { useState } from 'react';
import { ImageUploader } from '../ImageUploader';

import clsx from 'clsx';

export function ManagerPostForm() {
  const [contentValue, setContentValue] = useState('');

  return (
    <form action='' className='mb-16'>
      <div className='py-12 flex flex-col gap-4'>
        <InputText
          labelText='Identificador'
          name='id'
          type='text'
          placeholder='ID gerado automaticamente'
          readOnly
        />

        <InputText
          labelText='Slug'
          name='slug'
          type='text'
          placeholder='Slug gerada automaticamente'
          readOnly
        />

        <InputText
          labelText='Autor'
          name='author'
          type='text'
          placeholder='Digite o nome do autor'
        />

        <InputText
          labelText='Título'
          name='title'
          type='text'
          placeholder='Título do post'
        />

        <InputText
          labelText='Excerto'
          name='excerpt'
          type='text'
          placeholder='Resumo do post'
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
        />

        <InputCheckBox
          labelText='Publicar'
          name='published'
          type='checkbox'
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
