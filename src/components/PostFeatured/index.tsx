//components
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { findAllPostsPublic } from '@/lib/post/public';
import { RelativeDate } from '../RelativeDate';

import { formatDatetime } from '@/utils/format-datetime';

import clsx from 'clsx';

export async function PostFeatured() {
  const posts = await findAllPostsPublic();
  const postFeatured = posts[0];

  const postLink = `post/${postFeatured.slug}`;

  const mainPostContainer = clsx(
    'grid',
    'grid-cols-1',
    'gap-6',
    'mb-20',
    'group',

    //768px
    'md:grid-cols-2',
  );
  const mainPostTime = clsx('text-sm/tight', 'text-stone-500', 'block');
  const postContent = clsx('text-justify');

  return (
    <section className={mainPostContainer}>
      <PostCoverImage
        PostLinkProps={{ href: postLink }}
        PostImageProps={{
          alt: postFeatured.title,
          src: postFeatured.coverImageUrl,
          width: 1200,
          height: 720,
          priority: true,
        }}
      />

      <div>
        <RelativeDate
          date={postFeatured.createdAt}
          className='text-sm/tight text-stone-500 block'
        />

        <PostHeading url={postLink} as='h2'>
          {postFeatured.title}
        </PostHeading>

        <p className={postContent}>{postFeatured.excerpt}</p>
      </div>
    </section>
  );
}
