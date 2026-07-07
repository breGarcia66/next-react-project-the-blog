import clsx from 'clsx';
import { useId } from 'react';

type InputCheckBoxProps = {
  labelText?: string;
  type?: 'checkbox';
} & React.ComponentProps<'input'>;

export function InputCheckBox({
  labelText = '',
  type = 'checkbox',
  ...props
}: InputCheckBoxProps) {
  const id = useId();

  return (
    <div className='flex items-center gap-2'>
      <input
        {...props}
        className={clsx(
          'appearance-none',
          'w-4 h-4',
          'rounded-xs',
          'border',
          'border-stone-900',
          'cursor-pointer',
          'outline-none',

          'checked:bg-stone-900',
          'checked:text-stone-200',

          'focus:outline-none',

          'transition',
          props.className)}
        type={type} />

      {labelText && (
        <label className='text-sm' htmlFor={id}>
          {labelText}
        </label>
      )}
    </div>
  );
}
