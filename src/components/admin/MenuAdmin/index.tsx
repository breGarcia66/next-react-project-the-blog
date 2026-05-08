import clsx from 'clsx';
import Link from 'next/link';
import { FileTextIcon, HouseIcon } from 'lucide-react';

export function MenuAdmin() {
  const navAdmin = clsx(
    'bg-stone-900',
    'text-stone-100',
    'rounded-xs',
    'flex',
    'flex-col',
    'overflow-hidden',

    'sm:flex-row',
    'sm:flex-wrap',
  );
  const linkAdmin = clsx(
    '[&_svg]:w-4',
    '[&_svg]:h-4',
    'px-4',
    'flex',
    'items-center',
    'gap-2',
    'transition',
    'hover:bg-stone-800',
    'h-10',
    'shrink-0',
  );

  return (
    <nav className={navAdmin}>
      <a href='/' target='_blank' className={linkAdmin}>
        <HouseIcon />
        Home
      </a>
      <Link href={'/admin/post'} className={linkAdmin}>
        <FileTextIcon />
        Post
      </Link>
    </nav>
  );
}
