import { Request, Response } from "express";
import { DeleteCategoryService } from "../services/DeleteCategoryService";


export class DeleteCategoryController {
	async DeleteCategory(req: Request, res: Response): Promise<Response> {
		const { id } = req.params
		const service = new DeleteCategoryService()
		const result = await service.DeleteCategory(id)
		
		if (result instanceof Error) {
			return res.status(400).json(result.message)
		}

		return res.status(204).end()
	}
}