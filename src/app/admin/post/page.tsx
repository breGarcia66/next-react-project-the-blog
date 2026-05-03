import PostsListAdmin from '@/components/PostsListAdmin';
import { SpinLoader } from '@/components/SpinLoader';

import { findAllPostAdmin } from '@/lib/post/admin';

import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Admin',
};

export default async function AdminPostPage() {
  const allPosts = await findAllPostAdmin();

  return (
    <Suspense fallback={<SpinLoader className='py-16' />}>
      <PostsListAdmin />
    </Suspense>
  );
}
