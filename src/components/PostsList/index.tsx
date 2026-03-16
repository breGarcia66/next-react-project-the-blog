import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

import { postRepository } from '@/repositories/post';
import clsx from 'clsx';

export async function PostList() {
  const posts = await postRepository.findAll();

  const postTime = clsx('text-sm/tight', 'text-stone-500', 'block');
  const postContent = clsx('text-justify');
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

            <div>
              <time className={postTime} dateTime={post.createdAt}>
                {post.createdAt}
              </time>

              <PostHeading url={postLink} as='h3'>
                {post.title}
              </PostHeading>

              <p className={postContent}>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
