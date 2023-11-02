import { Request, Response } from "express";
import { GetAllCategoryService } from "../services/GetAllCategoryService";

export class GetAllCategoryController {
	async getAllCategory(_req: Request, res: Response):Promise<Response> {
		const service = new GetAllCategoryService()
		const result = await service.getAllCategory()
		return res.status(201).json(result)
	}
}