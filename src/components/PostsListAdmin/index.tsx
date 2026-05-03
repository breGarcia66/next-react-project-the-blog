import { DeletePostButton } from '../admin/DeletePostButton';

import { findAllPostAdmin } from '@/lib/post/admin';

import { CircleXIcon, EraserIcon } from 'lucide-react';

import clsx from 'clsx';
import Link from 'next/link';

export default async function AdminPostPage() {
  const allPosts = await findAllPostAdmin();

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

      <div
        className={clsx(
          'fixed',
          'z-50',
          'inset-0',
          'bg-stone-900/40',
          'backdrop-blur-xs',
          'flex',
          'items-center',
          'justify-center',
        )}
      >
        <div
          className={clsx(
            'bg-stone-100',
            'p-6',
            'rounded-sm',
            'max-w-2xl',
            'mx-6',
            'flex',
            'flex-col',
            'gap-6',
            'shadow-md',
            'shadow-black/30',
          )}
        >
          <h3 className='text-2xl font-bold'>Título do dialog</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            facilis, voluptatum porro laudantium temporibus voluptas corrupti
            esse suscipit doloribus ipsum et assumenda perferendis quae rem
            atque placeat at accusantium reiciendis.
          </p>
          <div className='flex items-center justify-end gap-6'>
            <button
              className={clsx(
                'bg-stone-200',
                'text-stone-900',
                'transition',

                'hover:bg-stone-300',

                'flex',
                'items-center',
                'justify-center',
                'gap-2',

                'py-2',
                'px-4',
                'rounded-xs',
                'cursor-pointer',
              )}
            >
              cancelar
              <CircleXIcon />
            </button>
            <button
              className={clsx(
                'bg-blue-500',
                'text-stone-100',
                'transition',

                'hover:bg-blue-800',

                'flex',
                'items-center',
                'justify-center',
                'gap-2',

                'py-2',
                'px-4',
                'rounded-xs',
                'cursor-pointer',
              )}
            >
              apagar
              <EraserIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
