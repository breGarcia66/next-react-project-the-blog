import { findAllPostAdmin } from '@/lib/post/admin';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin',
};

export default async function AdminPostPage() {
  const allPosts = await findAllPostAdmin();

  return (
    <div className='py-16'>
      {allPosts.map(post => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
