//components
import { SinglePost } from '@/components/SinglePost';
import { SpinLoader } from '@/components/SpinLoader';

import { findPostBySlug } from '@/lib/post/queries';

import { Metadata } from 'next';
import { Suspense } from 'react';

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlug(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}


export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
