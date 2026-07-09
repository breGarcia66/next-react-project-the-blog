import { ManagerPostForm } from '@/components/admin/ManagePostForm';
import { makePublicPostFromDb } from '@/dto/post/dto';
import { findPostById } from '@/lib/post/admin';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type AdminPostIdPorps = {
  params: Promise<{
    id: string;
  }>;
};

export const metadata: Metadata = {
  title: 'Editar Post',
};

export default async function AdminPostId({ params }: AdminPostIdPorps) {
  const { id } = await params;
  const post = await findPostById(id).catch();

  if (!post) notFound();

  const publicPost = makePublicPostFromDb(post);

  return (
    <div className='flex flex-col'>
      <h1 className='text-2xl font-bold'>Criar Post</h1>
      <ManagerPostForm publicPost={publicPost} />
    </div>
  );
}
