'use server';

import { logColor } from "@/utils/log-colors";

export async function uploadImageAction() {
  logColor('ACTION: Upando Imagem...');

  return {
    user: 'Butecinha',
  }
}
