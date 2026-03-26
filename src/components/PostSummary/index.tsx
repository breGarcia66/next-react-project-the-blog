import { PostHeading } from '../PostHeading';
import { PostDate } from '../PostDate';

import clsx from 'clsx';

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
      <PostDate dateTime={props.createdAt} />

      <PostHeading url={props.url} as={props.as}>
        {props.title}
      </PostHeading>

      <p className={postContent}>{props.excerpt}</p>
    </div>
  );
}
