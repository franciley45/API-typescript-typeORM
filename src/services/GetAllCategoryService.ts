import { AppDataSource } from "../database/data-source";
import Category from "../entities/Category";

export class GetAllCategoryService {
	async getAllCategory(): Promise<Category[]> {
		const repo = AppDataSource.getRepository(Category);
		const category = await repo.find()
		return category
	}
}