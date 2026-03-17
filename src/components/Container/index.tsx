import clsx from 'clsx';
import { text } from 'stream/consumers';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  const colorDiv = clsx('bg-stone-200', 'min-h-screen');

  const formattingDiv = clsx('max-w-5xl', 'mx-auto', 'px-8');

  return (
    <div className={colorDiv}>
      <div className={formattingDiv}>{children}</div>
    </div>
  );
}
