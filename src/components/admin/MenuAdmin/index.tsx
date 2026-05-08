'use client';

import clsx from 'clsx';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import {
  ChevronDownIcon,
  ChevronRightIcon,
  FilePlusCornerIcon,
  FileTextIcon,
  HouseIcon,
} from 'lucide-react';

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navAdmin = clsx(
    'bg-stone-900',
    'text-stone-100',
    'rounded-sm',
    'flex',
    'flex-col',
    'overflow-hidden',
    'mb-4',

    'sm:flex-row',
    'sm:flex-wrap',
    'sm:h-auto',

    !isOpen && 'h-10',
  );
  const linkAdmin = clsx(
    '[&_svg]:w-5',
    '[&_svg]:h-5',
    'px-4',
    'flex',
    'items-center',
    'justify-start',
    'gap-2',
    'cursor-pointer',
    'transition',
    'hover:bg-stone-800',
    'h-10',
    'shrink-0',
    'text-base/tight',
  );

  const openCloseMenuButton = clsx(linkAdmin, 'text-blue-100', 'sm:hidden');

  return (
    <nav className={navAdmin}>
      <button
        className={openCloseMenuButton}
        onClick={() => setIsOpen(state => !state)}
      >
        {!isOpen ? <ChevronRightIcon /> : <ChevronDownIcon />}
        Menu
      </button>

      <a href='/' target='_blank' className={linkAdmin}>
        <HouseIcon />
        Home
      </a>

      <Link href={'/admin/post'} className={linkAdmin}>
        <FileTextIcon />
        Post
      </Link>

      <Link href={'/admin/post/new'} className={linkAdmin}>
        <FilePlusCornerIcon />
        Novo Post
      </Link>
    </nav>
  );
}
