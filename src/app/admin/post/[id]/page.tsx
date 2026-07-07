import { ManagerPostForm } from '@/components/admin/ManagePostForm';
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

  return (
    <div className='flex flex-col'>
      <h1 className='text-2xl font-bold'>Criar Post</h1>
      <ManagerPostForm />
    </div>
  );
}
