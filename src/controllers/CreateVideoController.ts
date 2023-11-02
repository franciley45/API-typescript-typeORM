import { Request, Response } from "express";
import { CreateVideoService } from "../services/CreateVideoService";


export class CreateVideoController {
	async createVideo(req: Request, res: Response) {
		const { name, description, duration, category_id } =  req.body;

        const service =  new CreateVideoService()

        const result = await service.createVideo({ name, description, duration, category_id })

        if(result instanceof Error) return res.status(400).json(result.message)

        return res.status(201).json(result)
	}

}