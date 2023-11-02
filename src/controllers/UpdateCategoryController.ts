import { Request, Response } from "express";
import { UpdateCategoryService } from "../services/UpdateCategoryService";


export class UpdateCategoryController {
	async UpdateCategory(req: Request, res: Response): Promise<Response> {
		const { id } = req.params
        const { name, description } = req.body
		const service = new UpdateCategoryService()
		const result = await service.UpdateCategory({id, name, description})
		
		if (result instanceof Error) {
			return res.status(400).json(result.message)
		}

		return res.status(200).json(result)
	}
}