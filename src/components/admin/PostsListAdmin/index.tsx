import { DeletePostButton } from '../DeletePostButton';

import { findAllPostAdmin } from '@/lib/post/admin';

import clsx from 'clsx';
import Link from 'next/link';
import { ErrorMessage } from '../../ErrorMessage';

export default async function AdminPostPage() {
  const allPosts = await findAllPostAdmin();
  if(allPosts.length === 0){
    return <ErrorMessage title='Opa!😱' textContent='Não temos nenhum post. Vamos publicar alguns?' />
  }

  return (
    <div className='pb-16'>
      {allPosts.map(post => {
        return (
          <div
            key={post.id}
            className={clsx(
              'p-2',
              !post.published && 'bg-stone-300',
              'flex gap-2 items-center justify-between',
            )}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (
              <span className='text-xs text-stone-600 italic'>
                (não publicado)
              </span>
            )}

            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}
