import { clsx } from 'clsx';

type SpinLoeaderProps = {
  containerClasses?: string;
};

export default async function SpinLoader({
  containerClasses,
}: SpinLoeaderProps) {

  const spinContent = clsx(
    'flex',
    'justify-center',
    'items-center',
    containerClasses
  );

  const spin = clsx(
    'w-10',
    'h-10',
    'border-4',
    'border-t-transparent',
    'border-slate-900',
    'rounded-full',
    'animate-spin',
  );

  return (
    <div className={spinContent}>
      <div className={spin}></div>
    </div>
  );
}
