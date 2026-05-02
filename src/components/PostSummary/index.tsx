import { PostHeading } from '../PostHeading';

import clsx from 'clsx';
import { RelativeDate } from '../RelativeDate';

type PostSummaryProps = {
  url: string;
  as: 'h2' | 'h3';
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({ ...props }: PostSummaryProps) {
  const postContent = clsx('text-justify');

  return (
    <div>
      <RelativeDate date={props.createdAt} className='text-sm/tight text-stone-500'/>

      <PostHeading url={props.url} as={props.as}>
        {props.title}
      </PostHeading>

      <p className={postContent}>{props.excerpt}</p>
    </div>
  );
}
