import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async() => {
  const jsonPostRepository = new JsonPostRepository;
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.insert(postsTable).values(posts);
    console.log(`${posts.length} novos posts foram salvos`);
  }
  catch(erro) {
    console.log(`\nOcorreu um erro...\n\n${erro}\n\n`);
  }
})();
