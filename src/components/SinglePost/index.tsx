import { findPostBySlug } from '@/lib/post/queries';

import { PostDate } from '../PostDate';

import { formatDatetime } from '@/utils/format-datetime';

import Image from 'next/image';

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlug(slug);

  return (
    <article className='mb-16'>
      <header className='flex flex-col gap-2'>
        <Image
          className='rounded-md'
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
        />

        <p className='text-4xl font-bold'>{post.title}</p>

        <p className='text-stone-500 mb-8'>
          {post.author} - <PostDate dateTime={formatDatetime(post.createdAt)} />
        </p>
      </header>

      <p>{post.content}</p>
    </article>
  );
}
