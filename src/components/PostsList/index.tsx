//components
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';

import { findAllPostsPublic } from '@/lib/post/public';
import { formatDatetime } from '@/utils/format-datetime';

import { formatRelativeDate } from '@/utils/format-relative-date';

import clsx from 'clsx';

export async function PostList() {
  const posts = (await findAllPostsPublic()).slice(1);

  const postListContainer = clsx(
    'grid',
    'grid-cols-1',
    'gap-16',

    //640px
    'sm:grid-cols-2',

    //1024px
    'lg:grid-cols-3',
  );
  const postContainer = clsx('flex', 'flex-col', 'gap-6', 'group');

  return (
    <section className={postListContainer}>
      {posts.map(post => {
        const postLink = `post/${post.slug}`;

        return (
          <div key={post.id} className={postContainer}>
            <PostCoverImage
              PostLinkProps={{ href: postLink }}
              PostImageProps={{
                src: post.coverImageUrl,
                alt: post.title,
                width: 1200,
                height: 720,
              }}
            />

            <PostSummary
              url={postLink}
              as='h3'
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </section>
  );
}
