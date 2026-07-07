'use-client';

import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { showMessage } from '@/adapters/wrapperToastfy';
import { IMAGE_UPLOAD_MAX_SIZE } from '@/lib/constants';
import { useRef, useTransition } from 'react';
import { Button } from '@/components/Button';
import { ImageUpIcon } from 'lucide-react';

import clsx from 'clsx';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();

  function handleUploadImage() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChangeFile() {
    if (!fileInputRef.current) return;

    const fileInput = fileInputRef.current;
    const file = fileInput.files?.[0];

    if (!file) return;

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      showMessage.error('Envie imgens de no máximo 900Kb');

      fileInput.value = '';
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    startTransition(async () => {
      const result = await uploadImageAction();
    })

    showMessage.success(`${file.name} enviado`);
    fileInput.value = '';
  }

  return (
    <div className='flex flex-col gap-2 py-4'>
      <Button
        onClick={handleUploadImage}
        type='button'
        className={clsx(
          'self-start',
          'bg-stone-900',
          'text-stone-200',

          'hover:bg-stone-200',
          'hover:text-stone-900',
          'hover:ring-1',
          'hover:ring-stone-900',
        )}
      >
        <ImageUpIcon />
        Upload
      </Button>

      <input
        onChange={handleChangeFile}
        ref={fileInputRef}
        className='hidden'
        type='file'
        name='file'
        accept='image/*'
      />
    </div>
  );
}
