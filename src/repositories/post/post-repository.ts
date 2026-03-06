import { postModel } from "@/app/models/post/post-model";

export interface PostRepository {
  findAll(): Promise<postModel[]>,
  findById(id: string): Promise<postModel>
}
