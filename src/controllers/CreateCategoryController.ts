import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";


export class CreateCategoryController {
	async createCategory(req: Request, res: Response) {
		const { name, description } = req.body;
		const service = new CreateCategoryService()
		const result = await service.createCategory({ name, description })

		if (result instanceof Error) {
			return res.status(400).json(result.message)
		}
		return res.status(201).json(result)
	}

}