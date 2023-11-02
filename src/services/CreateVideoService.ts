import { AppDataSource } from "../database/data-source";
import Category from "../entities/Category";
import Video from "../entities/Video";
import videoRequest from "../interfaces/IVideoRequest";

export class CreateVideoService {
	async createVideo({ name, description, duration, category_id }: videoRequest): Promise<Video | Error> {
		const repo = AppDataSource.getRepository(Video)
		const repoCategory = AppDataSource.getRepository(Category)

		if (!await repoCategory.findOne({ where: { id: category_id } })) return Error("category not found");

		const video = repo.create({ name, description, duration, category_id });

		repo.save(video)

		return video
	}
}