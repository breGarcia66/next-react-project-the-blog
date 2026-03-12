// components
import { Container } from '@/components/Container';
import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Header } from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import { PostCoverImage } from '@/components/PostCoverImage';

import { Suspense } from 'react';

import clsx from 'clsx';

export default async function HomePage() {
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
    <Container>
      <Header />

      <section className={mainPostContainer}>
        <PostCoverImage
          PostLinkProps={{ href: '#'}}
          PostImageProps={{
            alt: 'Imagem do Post',
            src: '/images/bryen_7.png',
            width: 1200,
            height: 720,
            priority: true,
          }}
        />

        <div>
          <time dateTime='2026-03-12' className={mainPostTime}>
            12/03/2026 - 12:58
          </time>

          <PostHeading url='#' as='h2'>
            Título do Post
          </PostHeading>

          <p className={postContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            fugit. Dicta non voluptates aut aspernatur modi doloribus dolorem
            porro perspiciatis error nostrum, cupiditate dolor. Voluptas aperiam
            architecto eos sint cum?
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <h1 className='text-6xl font-bold text-center py-8'>Rodapé</h1>
      </footer>
    </Container>
  );
}
