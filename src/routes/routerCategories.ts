import { Router } from 'express';
import { CreateCategoryController } from '../controllers/CreateCategoryController';
import { GetAllCategoryController } from '../controllers/GetAllCategoryController';
import { DeleteCategoryController } from '../controllers/DeleteCategoryController';
import { UpdateCategoryController } from '../controllers/UpdateCategoryController';
import { validateJWT } from '../middleware/ValidateJWT';

const routerCategories = Router();
routerCategories.get('/categories',validateJWT, new GetAllCategoryController().getAllCategory);
routerCategories.post('/categories',validateJWT, new CreateCategoryController().createCategory);
routerCategories.put('/categories/:id',validateJWT, new UpdateCategoryController().UpdateCategory);
routerCategories.delete('/categories/:id',validateJWT, new DeleteCategoryController().DeleteCategory);


export default routerCategories;