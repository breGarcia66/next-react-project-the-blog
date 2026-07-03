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
          'w-4 h-4',
          'cursor-pointer',
          'outline-none',

          'focus:ring-1',
          'focus:ring-stone-600',
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
