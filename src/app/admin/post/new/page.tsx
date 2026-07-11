import { ManagerPostForm } from '@/components/admin/ManagePostForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Novo Post'
}

export default async function AdminNewPost() {

  return (
    <div className='flex flex-col'>
      <h1 className='text-2xl font-bold'>Criar Post</h1>
      <ManagerPostForm mode='create' />
    </div>
  );
}
