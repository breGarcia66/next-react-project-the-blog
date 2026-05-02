import { revalidateExampleAction } from "@/actions/relativedate-example";

export default async function ExampleDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = await params;

  return (
    <main className='min-h-[600px] text-4xl font-bold'>

      <form className='py-16' action={revalidateExampleAction}>
        <input type='hidden' name='path' defaultValue={`/exemplo/${id}`} />

        <button
          className='bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer'
          type='submit'
        >
          REVALIDATE
        </button>
      </form>
    </main>
  );
}
