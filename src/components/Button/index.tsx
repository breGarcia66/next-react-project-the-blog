'use cliente';

import clsx from 'clsx';

type ButtonVariants = 'default' | 'ghost' | 'danger';
type ButtonSizes = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
} & React.ComponentProps<'button'>;

export function Button({
  children,
  variant = 'default',
  size = 'md',
  ...props
}: ButtonProps) {
  const buttonVariants: Record<ButtonVariants, string> = {
    default: clsx('bg-blue-600', 'hover:bg-blue-700', 'text-blue-100'),
    ghost: clsx('bg-stone-300', 'hover:bg-stone-400', 'text-stone-900'),
    danger: clsx('bg-red-600', 'hover:bg-red-700', 'text-red-100'),
  };

  const buttonSizes: Record<ButtonSizes, string> = {
    sm: clsx('px-2'),
    md: clsx('px-4'),
    lg: clsx('px-6'),
  };

  const buttonClasses = clsx(
    buttonVariants[variant],
    buttonSizes[size],
    'py-2',
    'rounded-sm',
    'flex',
    'items-center',
    'gap-2',
    'cursor-pointer',
    'transition',
    'text-base/tight',

    '[&_svg]:h-5',
    '[&_svg]:w-5',

    'disabled:bg-stone-300',
    'disabled:text-stone-400',
    'disabled:cursor-not-allowed',
    props.className,
  );

  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
}
