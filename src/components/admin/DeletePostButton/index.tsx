'use client';

import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';

import { useState, useTransition } from 'react';
import { ModalDialog } from '@/components/ModalDialog';

import { deletePostAction } from '@/actions/post/delete-post-action';
import { showMessage } from '@/adapters/wrapperToastfy';

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
  const [showDialog, setShowDialog] = useState(false);

  function handleClick() {
    setShowDialog(true);
  }

  function handleConfirm() {
    startTransition(async () => {
      const result = await deletePostAction(id);
      setShowDialog(false);

      showMessage.dismiss();

      if (result.erro) {
        showMessage.error(`Erro: ${result.erro}`);
        return;
      }

      showMessage.success('Post apagado!');
    });
  }

  return (
    <>
      <button
        className={deleteButton}
        aria-label={`deletar post: ${title}`}
        title={`deletar post: ${title}`}
        onClick={handleClick}
        disabled={isPending}
      >
        <Trash2Icon />
      </button>

      {showDialog && (
        <ModalDialog
          isVisible={showDialog}
          title={'Apagar Post'}
          content={`Apagar post \"${title}\"?`}
          onCancel={() => setShowDialog(false)}
          onConfirm={handleConfirm}
          disabled={isPending}
        />
      )}
    </>
  );
}
