'use client';

import clsx from 'clsx';
import { CircleXIcon, EraserIcon } from 'lucide-react';
import { Button } from '../Button';

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
          <Button
            onClick={handleCancel}
            disabled={disabled}
            variant='ghost'
            autoFocus
          >
            cancelar
            <CircleXIcon />
          </Button>

          <Button
            onClick={onConfirm}
            disabled={disabled}
            variant='default'
          >
            apagar
            <EraserIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
