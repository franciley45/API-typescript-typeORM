import { Router } from 'express';
import { CreateVideoController } from '../controllers/CreateVideoController';
import { GetAllVideosController } from '../controllers/GetAllVideosController';
import { validateJWT } from '../middleware/ValidateJWT';


const routerVideos = Router();

routerVideos.get('/videos',validateJWT, new GetAllVideosController().GetAllVideo);
routerVideos.post('/videos',validateJWT, new CreateVideoController().createVideo);

export default routerVideos;