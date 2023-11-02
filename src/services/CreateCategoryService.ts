import { AppDataSource } from "../database/data-source";
import Category from "../entities/Category";
import CategoryRequest from "../interfaces/ICategoryRequest";

export class CreateCategoryService {
	async createCategory({ name, description }: CategoryRequest): Promise<Category | Error> {
		const repo = AppDataSource.getRepository(Category);
		const checkCategory = await repo.find({ where: { name } })

		if (checkCategory.length !== 0) {
			return Error("Category already exists");
		}

		const category = repo.create({ name, description })
		await repo.save(category)
		return category
	}
}