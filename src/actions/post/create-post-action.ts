'use server';

type createPostActionState = {
  numero: number;
};

export async function createPostAction(
  prevState: createPostActionState,
  formData: FormData,
): Promise<createPostActionState> {
  console.log({ prevState });
  console.log(formData);

  return {
    numero: prevState.numero + 1,
  };
}
