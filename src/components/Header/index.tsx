import Link from "next/link";

import clsx from "clsx";

export function Header() {
  const pageTitle = clsx(
    'text-5xl/normal',
    'font-extrabold',
    'pt-8',
    'pb-16',
    'text-stone-800',

    //640px
    'sm:text-6xl/normal',
    'sm:pt-10',
    'sm:pb-20',

    //1024px
    'lg:text-7xl/normal',
    'lg:pt-12',
    'lg:pb-24',

    //1280px
    'xl:text-8xl/normal',
    'xl:pt-14',
    'xl:pb-28'
  );

  return (
    <header>
      <h1 className={pageTitle}>
        <Link href="#">The Blog</Link>
      </h1>
    </header>
  );
}
