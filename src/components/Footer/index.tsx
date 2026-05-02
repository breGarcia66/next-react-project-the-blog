'use client';

import Link from 'next/link';
import clsx from 'clsx';

export function Footer() {
  const footer = clsx('py-18', 'text-center', 'text-sm', 'italic');
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footer}>
      <p>
        Copyright &copy; {currentYear} -{' '}
        <Link href='/'>The Blog</Link>
      </p>
    </footer>
  );
}
