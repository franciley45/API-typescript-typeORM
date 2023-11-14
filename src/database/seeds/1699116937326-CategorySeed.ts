import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import Category from '../../entities/Category';

export class CategorySeed1699116937326 implements Seeder {
    track = false;

    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const CategoryRepository = dataSource.getRepository(Category)

		const CategoryData = {
			name: 'Comedia',
			description: 'filmes de comedia',
		}

		const CategoryExists = await CategoryRepository.findOneBy({ name: CategoryData.name })

		if (!CategoryExists) {
			const newCategory = CategoryRepository.create(CategoryData)
			await CategoryRepository.save(newCategory)
		}
    }
}
