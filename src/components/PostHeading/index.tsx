import Link from 'next/link';
import clsx from 'clsx';

type PostHeadingPops = {
  children: React.ReactNode;
  url: string;
  as: 'h2' | 'h3';
};

export function PostHeading({
  children,
  url,
  as: HeadingTag = 'h3',
}: PostHeadingPops) {
  const postTitleType = {
    h2: 'text-3xl',
    h3: 'text-2xl',
  };

  const commumClasses = clsx(
    'font-bold',
    'mb-4',
    'hover:text-stone-600',
    'transition',
    'duration-100',
  );

  return (
    <HeadingTag className={clsx(commumClasses, postTitleType[HeadingTag])}>
      <Link href={url}>{children}</Link>
    </HeadingTag>
  );
}
