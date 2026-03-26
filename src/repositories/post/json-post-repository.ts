import { postModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POST_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<postModel[]> {
    const jsonContent = await readFile(JSON_POST_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;

    return posts;
  }

  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  async findAllPublic(): Promise<postModel[]> {
    await this.simulateWait();

    const posts = await this.readFromDisk();
    return posts.filter(post => post.published);
  }

  async findById(id: string): Promise<postModel> {
    const posts = await this.findAllPublic();
    const searchedPost = posts.find(post => post.id === id);

    if (!searchedPost) throw new Error('Post não econtrado');

    return searchedPost;
  }

  async findBySlug(slug: string): Promise<postModel> {
    const posts = await this.findAllPublic();
    const searchedPost = posts.find(post => post.slug === slug);

    if (!searchedPost) throw new Error('Post não encontrado');

    return searchedPost;
  }
}
