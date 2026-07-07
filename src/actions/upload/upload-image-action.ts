'use server';

import { IMAGE_SERVER_URL, IMAGE_UPLOAD_DIRECTORY, IMAGE_UPLOAD_MAX_SIZE } from '@/lib/constants';
import { asyncDelay } from '@/utils/async-delay';
import { mkdir, writeFile } from 'fs/promises';
import { extname, resolve } from 'path';

type UploadImageActionResult = {
  url: string;
  erro: string;
};

export async function uploadImageAction(
  formdata: FormData,
): Promise<UploadImageActionResult> {

  const makeResult = ({ url = '', erro = '' }): UploadImageActionResult => ({
    url,
    erro,
  });

  if (!(formdata instanceof FormData)) {
    return makeResult({ erro: 'Dados inválidos' });
  }

  const file = formdata.get('file');

  if (!(file instanceof File)) {
    return makeResult({ erro: 'Arquivo inválido' });
  }

  if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
    return makeResult({ erro: 'Arquivo excede o tamanho limite' });
  }

  if (!file.type.startsWith('image/')) {
    return makeResult({ erro: 'Arquivo inaválido' });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  const uploadFullPath = resolve(process.cwd(), 'public', IMAGE_UPLOAD_DIRECTORY);
  await mkdir(uploadFullPath, {recursive: true});

  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);

  const fileFullPath = resolve(uploadFullPath, uniqueImageName);

  await writeFile(fileFullPath, buffer);

  const url = `${IMAGE_SERVER_URL}/${uniqueImageName}`;

  return makeResult({ url });
}
