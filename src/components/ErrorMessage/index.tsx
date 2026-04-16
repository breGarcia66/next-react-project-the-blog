import clsx from 'clsx';

type ErrorMessageProps = {
  title: string;
  textContent: string;
};

export function ErrorMessage({ title, textContent }: ErrorMessageProps) {
  const mainDiv = clsx(
    'flex',
    'items-center',
    'justify-center',
    'min-h-[340px]',
  );
  const content = clsx('flex', 'items-center', 'justify-center', 'gap-2');
  const code = clsx('text-8xl', 'font-bold', 'mb-2', 'pr-2');
  const pipe = clsx('px-px', 'py-10', 'bg-stone-800');
  const text = clsx('pl-4', 'text-lg/tight');

  return (
    <div className={mainDiv}>
      <div className={content}>
        <h1 className={code}>{title}</h1>
        <div className={pipe}></div>
        <p className={text}>{textContent}</p>
      </div>
    </div>
  );
}
