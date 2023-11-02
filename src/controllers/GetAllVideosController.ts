import { Request, Response } from "express";
import { GetAllVideosService } from "../services/GetAllVideosService";


export class GetAllVideosController {
	async GetAllVideo(req: Request, res: Response) {
	
        const service =  new GetAllVideosService()

        const result = await service.GetAllVideos()

        return res.status(201).json(result)
	}

}