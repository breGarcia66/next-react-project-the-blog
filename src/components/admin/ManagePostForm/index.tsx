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
      <div className='py-16 flex flex-col gap-4'>
        <InputCheckBox labelText='Sobrenome' />

        <InputText labelText='nome' type='text' placeholder='Digite seu nome' />

        <ImageUploader />

        <InputText
          labelText='sobrenome'
          type='text'
          placeholder='Digite seu sobrenome'
        />

        <InputText
          disabled
          labelText='nome'
          type='text'
          placeholder='Digite seu nome'
        />

        <MarkdownEditor
          labelText='Conteúdo'
          disabled={false}
          textAreaName='content'
          value={contentValue}
          setValue={setContentValue}
        />

        <InputText
          disabled
          labelText='sobrenome'
          type='text'
          placeholder='Digite seu sobrenome'
        />
        <InputText
          readOnly
          labelText='nome'
          type='text'
          defaultValue='Digite seu nome'
        />
        <InputText
          readOnly
          labelText='sobrenome'
          type='text'
          defaultValue='Digite seu sobrenome'
        />
      </div>

      <div>
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
