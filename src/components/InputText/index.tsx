import clsx from 'clsx';
import { useId } from 'react';

type InputTextProps = {
  labelText?: string;
} & React.ComponentProps<'input'>;

export function InputText({ labelText = '', ...props }: InputTextProps) {
  const inputId = useId();

  const inputTextStyles = clsx(
    'outline-0',
    'ring-0',
    'ring-stone-400',
    'bg-stone-200',
    'text-base/tight',
    'ring-1',
    'rounded-xs',
    'p-1',
    'transition',
    'placeholder-stone-400',
    'focus:ring-stone-600',

    'disabled:bg-stone-300',
    'disabled:placeholder-stone-400',

    'read-only:bg-stone-200',
    'read-only:ring-transparent',
    'read-only:text-stone-400',

    props.className,
  );

  return (
    <div className='flex flex-col gap-2'>
      {labelText && (
        <label htmlFor={inputId} className='text-sm'>
          {labelText}
        </label>
      )}
      <input
        id={inputId}
        {...props}
        className={inputTextStyles}
       />
    </div>
  );
}
