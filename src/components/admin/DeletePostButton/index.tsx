'use client';

import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';

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
  );

  function handleClick() {
    alert(`Post ID: ${id}`);
  }

  return (
    <button
      className={deleteButton}
      aria-label={`deletar post: ${title}`}
      title={`deletar post: ${title}`}

      onClick={handleClick}
    >
      <Trash2Icon />
    </button>
  );
}
