// next
import Link from 'next/link';
import Image from 'next/image';

import clsx from 'clsx';

type PostCoverImageProps = {
  PostLinkProps: React.ComponentProps<typeof Link>;
  PostImageProps: React.ComponentProps<typeof Image>;
};

export function PostCoverImage({
  PostLinkProps,
  PostImageProps,
}: PostCoverImageProps) {

  const postLink = clsx('w-full', 'h-full', 'overflow-hidden', 'rounded-sm', PostLinkProps.className);
  const postImages = clsx(
    'group-hover:scale-110',
    'transition',
    'duration-100',
    'w-full',
    'h-full',
    'object-cover',
    'object-center',
    PostImageProps.className
  );

  return (
    <Link {...PostLinkProps} className={postLink}>
      <Image {...PostImageProps} className={postImages}/>
    </Link>
  );
}
