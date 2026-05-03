type AdminPostIdPorps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminPostId({ params }: AdminPostIdPorps) {
  const { id } = await params;

  return <div className='py-16 text-6xl'>Página de post ID: { id }</div>;
}
