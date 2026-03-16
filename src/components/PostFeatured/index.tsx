//components
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

import { allPublicPosts } from '@/lib/post/queries';

import { formatRelativeDate } from '@/utils/format-relative-date';

import clsx from 'clsx';

export async function PostFeatured() {
  const posts = await allPublicPosts();
  const postFeatured = posts[0];

  const postLink = `post/${postFeatured.slug}`;

  const mainPostContainer = clsx(
    'grid',
    'grid-cols-1',
    'gap-6',
    'mb-20',
    'group',
    'text-stone-800',

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
        <time
          dateTime={formatRelativeDate(postFeatured.createdAt)}
          className={mainPostTime}
        >
          {formatRelativeDate(postFeatured.createdAt)}
        </time>

        <PostHeading url='#' as='h2'>
          {postFeatured.title}
        </PostHeading>

        <p className={postContent}>{postFeatured.excerpt}</p>
      </div>
    </section>
  );
}
