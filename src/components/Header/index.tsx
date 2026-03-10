import clsx from "clsx";

export function Header() {
  const pageTitle = clsx(
    //mobile
    'text-5xl/normal',
    'font-extrabold',
    'py-8',

    //tablet (vertical)
    'sm:text-6xl/normal',
    'sm:py-10',

    //tabler(horizontal)
    'lg:text-7xl/normal',
    'lg:py-12',

    //notebooks and desktops
    'xl:text-8xl/normal',
    'xl:py-14'
  );

  return (
    <header>
      <h1 className={pageTitle}>
        <a href="#">The Blog</a>
      </h1>
    </header>
  );
}
