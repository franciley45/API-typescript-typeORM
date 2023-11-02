import { Router } from 'express';
import { CreateVideoController } from '../controllers/CreateVideoController';
import { GetAllVideosController } from '../controllers/GetAllVideosController';


const routerVideos = Router();

routerVideos.get('/videos', new GetAllVideosController().GetAllVideo);
routerVideos.post('/videos', new CreateVideoController().createVideo);

export default routerVideos;