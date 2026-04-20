import { postModel } from '@/models/post/post-model';

export interface PostRepository {
  findAllPublic(): Promise<postModel[]>;
  findBySlug(slug: string): Promise<postModel>;
  findById(id: string): Promise<postModel>;
  findAll(): Promise<postModel[]>;
}
