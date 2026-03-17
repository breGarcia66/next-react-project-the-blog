import Link from "next/link";

import clsx from "clsx";

export function Header() {
  const pageTitle = clsx(
    'text-5xl/normal',
    'font-extrabold',
    'py-10',

    //640px
    'sm:text-6xl/normal',
    'sm:py-12',

    //1024px
    'lg:text-7xl/normal',
    'lg:py-14',

    //1280px
    'xl:text-8xl/normal',
    'xl:py-16'
  );

  return (
    <header>
      <h1 className={pageTitle}>
        <Link href="/">The Blog</Link>
      </h1>
    </header>
  );
}
