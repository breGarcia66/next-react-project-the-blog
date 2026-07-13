'use client';

import { loginAction } from '@/actions/login/login-action';
import { LogInIcon } from 'lucide-react';
import { useActionState, useEffect } from 'react';

import { InputText } from '@/components/InputText';
import { Button } from '@/components/Button';

import clsx from 'clsx';
import { showMessage } from '@/adapters/wrapperToastfy';

const mainDiv = clsx(
  'flex',
  'items-center',
  'justify-center',
  'text-center',
  'max-w-sm',
  'mt-16',
  'mb-28',
  'mx-auto',
);

const loginButton = clsx(
  'bg-stone-900',
  'text-stone-200',

  'hover:bg-stone-200',
  'hover:text-stone-900',
  'hover:ring-1',
  'hover:ring-stone-900',

  'mt-2',
);

export function LoginFormAdmin() {
  const initialState = {
    username: '',
    error: '',
  };

  const [state, action, isPending] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state.error) {
      showMessage.error(state.error);
    }
  }, [state])

  return (
    <div className={mainDiv}>
      <form
        action={action}
        className='flex-1 flex flex-col gap-4 w-60 sm:w-lg lg:w-xl'
      >
        <InputText
          type='text'
          name='username'
          labelText='Usuário'
          placeholder='Seu usuário'
          disabled={isPending}
          defaultValue={state.username}
        />

        <InputText
          type='password'
          name='password'
          labelText='Senha'
          placeholder='Sua senha'
          disabled={isPending}
        />

        <Button type='submit' className={loginButton} disabled={isPending}>
          <LogInIcon />
          Entrar
        </Button>

        {!!state.error && <p className='text-red-700'>{state.error}</p>}
      </form>
    </div>
  );
}
