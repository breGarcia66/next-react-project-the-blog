import { findPostBySlug } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type PostPageProps = {
  params: Promise<{slug: string}>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await findPostBySlug(slug);

  return (
    <h1>{post.title}</h1>
  );
}
