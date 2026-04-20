import { postModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<postModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
  async findBySlug(slug: string): Promise<postModel> {}
  async findById(id: string): Promise<postModel> {}
  async findAll(): Promise<postModel[]> {}
}

(async() => {
  const drizzlePostRepository = new DrizzlePostRepository;
  const postsNonPublished = await drizzlePostRepository.findAllPublic();

  postsNonPublished.forEach(post => {console.log(post.slug, post.published)});
})();
