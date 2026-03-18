import clsx from 'clsx';
import { text } from 'stream/consumers';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  const mainDiv = clsx('bg-stone-200', 'min-h-screen');

  const formattingDiv = clsx('max-w-5xl', 'mx-auto', 'px-8', className);

  return (
    <div className={mainDiv}>
      <div className={formattingDiv}>{children}</div>
    </div>
  );
}
