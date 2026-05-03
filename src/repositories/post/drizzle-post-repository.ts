import { postModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { asyncDelay } from '@/utils/async-delay';
import { SIMULATE_WAIT_IN_MS } from '@/lib/constants';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<postModel[]> {
    asyncDelay(SIMULATE_WAIT_IN_MS, true);

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<postModel> {
    asyncDelay(SIMULATE_WAIT_IN_MS, true);

    const post = await drizzleDb.query.posts.findFirst({
      where: (post, { eq, and }) =>
        and(eq(post.published, true), eq(post.slug, slug)),
    });

    if (!post)
      throw new Error(
        `\n>>>${slug}<<<\n\nPost publicado com essa slug não encontrado.\n`,
      );

    return post;
  }

  async findById(id: string): Promise<postModel> {
    asyncDelay(SIMULATE_WAIT_IN_MS, true);

    const post = await drizzleDb.query.posts.findFirst({
      where: (post, { eq }) => eq(post.id, id),
    });

    if (!post)
      throw new Error(`\n>>>${id}<<<\n\nPost com esse ID não encontrado.\n`);

    return post;
  }

  async findAll(): Promise<postModel[]> {
    asyncDelay(SIMULATE_WAIT_IN_MS, true);

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }
}

// (async () => {
//   const drizzlePostRepository = new DrizzlePostRepository();
//   const posts = await drizzlePostRepository.findBySlugPublic(
//     'rotina-matinal-de-pessoas-altamente-eficazes',
//   );

//   console.log(posts);
// })();
