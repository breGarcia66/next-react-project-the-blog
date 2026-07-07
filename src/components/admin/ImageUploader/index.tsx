'use-client';

import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { showMessage } from '@/adapters/wrapperToastfy';
import { IMAGE_UPLOAD_MAX_SIZE } from '@/lib/constants';
import { useRef, useState, useTransition } from 'react';
import { Button } from '@/components/Button';
import { ImageUpIcon } from 'lucide-react';

import clsx from 'clsx';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState('');

  function handleUploadImage() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChangeFile() {
    showMessage.dismiss();

    if (!fileInputRef.current) return;

    const fileInput = fileInputRef.current;
    const file = fileInput.files?.[0];

    if (!file) {
      setImgUrl('');
      return;
    };

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      showMessage.error('Envie imgens de no máximo 900Kb');

      setImgUrl('');
      fileInput.value = '';
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.erro) {
        showMessage.error(result.erro);
        fileInput.value = '';
        setImgUrl('');

        return;
      }

      setImgUrl(result.url);
      showMessage.success('Imagem enviada');
    });

    fileInput.value = '';
  }

  return (
    <div className='flex flex-col gap-2 py-4'>
      <Button
        onClick={handleUploadImage}
        type='button'
        disabled={isUploading}
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

      {!!imgUrl && (
        <div className='flex flex-col gap-4'>
          <p>
            <b>URL: </b>
            {imgUrl}
          </p>

          <img className='rounded-sm' src={imgUrl} />
        </div>
      )}

      <input
        onChange={handleChangeFile}
        ref={fileInputRef}
        className='hidden'
        type='file'
        name='file'
        accept='image/*'
        disabled={isUploading}
      />
    </div>
  );
}
