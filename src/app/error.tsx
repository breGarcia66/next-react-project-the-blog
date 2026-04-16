'use client';

import { ErrorMessage } from '@/components/ErrorMessage';

export default function RootErrorPage() {
  return (
    <ErrorMessage
      title='Internal Error'
      textContent='Ocorreu um erro na aplicação. Tente mais tarde'
    />
  );
}
