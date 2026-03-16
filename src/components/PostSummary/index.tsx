import { PostHeading } from '../PostHeading';

import clsx from 'clsx';

type PostSummaryProps = {
  url: string;
  as: 'h2' | 'h3';
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({ ...props }: PostSummaryProps) {
  const postTime = clsx('text-sm/tight', 'text-stone-500', 'block');
  const postContent = clsx('text-justify');

  return (
    <div>
      <time className={postTime} dateTime={props.createdAt}>
        {props.createdAt}
      </time>

      <PostHeading url={props.url} as={props.as}>
        {props.title}
      </PostHeading>

      <p className={postContent}>{props.excerpt}</p>
    </div>
  );
}
