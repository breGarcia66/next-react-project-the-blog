import Link from 'next/link';

import clsx from 'clsx';

export function Footer() {
  const footer = clsx('py-18', 'text-center', 'text-sm', 'italic');

  return (
    <footer className={footer}>
      <p>
        Copyright &copy; {new Date().getFullYear()} -{' '}
        <Link href='/'>The Blog</Link>
      </p>
    </footer>
  );
}
