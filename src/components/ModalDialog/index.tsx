'use client';

import clsx from 'clsx';
import { CircleXIcon, EraserIcon } from 'lucide-react';

type ModalDialogProps = {
  isVisible?: boolean;
  title: string;
  content: React.ReactNode;
  disabled: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ModalDialog({
  isVisible = false,
  title,
  content,
  disabled,
  onCancel,
  onConfirm,
}: ModalDialogProps) {
  const dialogBackground = clsx(
    'fixed',
    'z-50',
    'inset-0',
    'bg-stone-900/40',
    'backdrop-blur-xs',
    'flex',
    'items-center',
    'justify-center',
  );

  const dialogBody = clsx(
    'bg-stone-100',
    'p-6',
    'rounded-sm',
    'max-w-2xl',
    'mx-6',
    'flex',
    'flex-col',
    'gap-6',
    'shadow-md',
    'shadow-black/30',
  );

  const cancelButton = clsx(
    'bg-stone-300',
    'text-stone-900',
    'transition',

    'hover:bg-stone-400',

    'flex',
    'items-center',
    'justify-center',
    'gap-2',

    'py-2',
    'px-4',
    'rounded-xs',
    'cursor-pointer',

    'disabled:bg-stone-300',
    'disabled:text-stone-400',
    'disabled:cursor-not-allowed',
  );

  const confirmButton = clsx(
    'bg-blue-500',
    'text-stone-100',
    'transition',

    'hover:bg-blue-800',

    'flex',
    'items-center',
    'justify-center',
    'gap-2',

    'py-2',
    'px-4',
    'rounded-xs',
    'cursor-pointer',

    'disabled:bg-stone-300',
    'disabled:text-stone-400',
    'disabled:cursor-not-allowed',
  );

  function handleCancel() {
    if(disabled) return;

    onCancel();
  }

  return (
    <div className={dialogBackground} onClick={handleCancel}>
      <div
        className={dialogBody}
        role='dialog'
        aria-modal={true}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        onClick={e => e.stopPropagation()}
      >
        <h3 id='dialog-title' className='text-2xl font-bold'>
          {title}
        </h3>

        <div id='dialog-description'>{content}</div>

        <div className='flex items-center justify-end gap-6'>
          <button
            className={cancelButton}
            onClick={handleCancel}
            disabled={disabled}
            autoFocus
          >
            cancelar
            <CircleXIcon />
          </button>

          <button
            className={confirmButton}
            onClick={onConfirm}
            disabled={disabled}
          >
            apagar
            <EraserIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
