'use server';

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

  const uploadMaxSize = Number(process.env.NEXT_PUBLIC_IMAGE_UPLOAD_MAX_SIZE) || 921600
  const imageServerUrl = process.env.IMAGE_SERVER_URL || 'uploads';
  const imageUploadDirectory = process.env.IMAGE_UPLOAD_DIRECTORY || 'http://localhost:3000/uploads';

  if (!(formdata instanceof FormData)) {
    return makeResult({ erro: 'Dados inválidos' });
  }

  const file = formdata.get('file');

  if (!(file instanceof File)) {
    return makeResult({ erro: 'Arquivo inválido' });
  }

  if (file.size > uploadMaxSize) {
    return makeResult({ erro: 'Arquivo excede o tamanho limite' });
  }

  if (!file.type.startsWith('image/')) {
    return makeResult({ erro: 'Arquivo inaválido' });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  const uploadFullPath = resolve(process.cwd(), 'public', imageUploadDirectory);
  await mkdir(uploadFullPath, {recursive: true});

  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);

  const fileFullPath = resolve(uploadFullPath, uniqueImageName);

  await writeFile(fileFullPath, buffer);

  const url = `${imageServerUrl}/${uniqueImageName}`;

  return makeResult({ url });
}
