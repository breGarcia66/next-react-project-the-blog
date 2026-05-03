'use client';

import { deletePostAction } from '@/actions/post/delete-post-action';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import { useTransition } from 'react';

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const deleteButton = clsx(
    'text-red-500',
    'border-2',
    'p-1',
    'rounded-sm',
    'cursor-pointer',
    'transition',

    '[&_svg]:w-4',
    '[&_svg]:h-4',

    'hover:scale-120',
    'hover:text-red-800',

    'disabled:text-red-300',
    'disabled:cursor-not-allowed',
  );

  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async() => {
      const result = await deletePostAction(id);
      alert(`${result}`);
    })
  }

  return (
    <button
      className={deleteButton}
      aria-label={`deletar post: ${title}`}
      title={`deletar post: ${title}`}

      onClick={handleClick}
      disabled={isPending}
    >
      <Trash2Icon />
    </button>
  );
}
