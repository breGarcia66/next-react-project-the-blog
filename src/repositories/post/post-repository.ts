import { postModel } from '@/models/post/post-model';

export interface PostRepository {
  findAllPublic(): Promise<postModel[]>;
  findBySlugPublic(slug: string): Promise<postModel>;
  findById(id: string): Promise<postModel>;
  findAll(): Promise<postModel[]>;
}
