import { postModel } from '@/models/post/post-model';

export interface PostRepository {
  findAllPublic(): Promise<postModel[]>;
  findBySlugPublic(slug: string): Promise<postModel>;
  findById(id: string): Promise<postModel>;
  findAll(): Promise<postModel[]>;

  create(post: postModel): Promise<postModel>;
  delete(id: string): Promise<postModel>;
  update(
    id: string,
    newPostData: Omit<postModel, 'id' | 'slug' | 'createdAt' | 'updatedAt'>,
  ): Promise<postModel>;
}
