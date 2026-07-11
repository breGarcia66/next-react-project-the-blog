import { postModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { asyncDelay } from '@/utils/async-delay';
import { SIMULATE_WAIT_IN_MS } from '@/lib/constants';
// import { eq, or } from 'drizzle-orm';
import { postsTable } from '@/db/drizzle/schemas';
import { eq } from 'drizzle-orm';

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

  async create(post: postModel): Promise<postModel> {
    const postExists = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, or }) =>
        or(eq(posts.id, post.id), eq(posts.slug, post.slug)),
      columns: { id: true },
    });

    if (!!postExists) {
      throw new Error('Post com ID ou Slug já existente na base de dados');
    }

    await drizzleDb.insert(postsTable).values(post);
    return post;
  }

  async delete(id: string): Promise<postModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) {
      throw new Error('Post não existe na base de dados');
    }

    await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

    return post;
  }

  async update(
    id: string,
    newPostData: Omit<postModel, 'id' | 'slug' | 'createdAt' | 'updatedAt'>,
  ): Promise<postModel> {
    const oldPost = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!oldPost) {
      throw new Error('Post não existe na base de dados');
    }

    const newUpdatedAt = new Date().toISOString();
    const postData: Omit<postModel, 'id' | 'slug' | 'createdAt'> = {
      author: newPostData.author,
      title: newPostData.title,
      excerpt: newPostData.excerpt,
      content: newPostData.content,
      coverImageUrl: newPostData.coverImageUrl,
      published: newPostData.published,
      updatedAt: newUpdatedAt,
    };

    await drizzleDb.update(postsTable).set(postData).where(eq(postsTable.id, id));

    return {
      ...oldPost,
      ...postData,
    };
  }
}

// (async () => {
//   const drizzlePostRepository = new DrizzlePostRepository();
//   const posts = await drizzlePostRepository.findBySlugPublic(
//     'rotina-matinal-de-pessoas-altamente-eficazes',
//   );

//   console.log(posts);
// })();
