
import { AppDataSource } from "../database/data-source";
import Category from "../entities/Category";
import CategoryRequest from "../interfaces/ICategoryRequest";

export class UpdateCategoryService {
	async UpdateCategory({ id, name, description }: CategoryRequest): Promise<Category | Error> {
		const repo = AppDataSource.getRepository(Category);
		const [checkCategory] = await repo.find({ where: { category_id: id } })
         
		if (!checkCategory) {
			return Error("The category does not exist");
		}

        checkCategory.name = name ? name : checkCategory.name;
        checkCategory.description = description ? description: checkCategory.description;
        await repo.save(checkCategory)

		return checkCategory
	}
}