import clsx from "clsx";

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  const postTime = clsx('text-sm/tight', 'text-stone-500');

  return (
    <time className={postTime} dateTime={dateTime}>
      {dateTime}
    </time>
  );
}
