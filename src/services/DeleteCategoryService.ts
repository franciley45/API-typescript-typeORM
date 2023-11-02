import { AppDataSource } from "../database/data-source";
import Category from "../entities/Category";
export class DeleteCategoryService {
	async DeleteCategory(id: string) {
		const repo = AppDataSource.getRepository(Category)

		const checkCategory = await repo.find({ where: { id } })
		if (checkCategory.length == 0) return Error("category not found");

		await repo.delete(id)

	}
}