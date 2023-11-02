import { Router } from 'express';
import { CreateCategoryController } from '../controllers/CreateCategoryController';
import { GetAllCategoryController } from '../controllers/GetAllCategoryController';
import { DeleteCategoryController } from '../controllers/DeleteCategoryController';
import { UpdateCategoryController } from '../controllers/UpdateCategoryController';

const routerCategories = Router();
routerCategories.get('/categories', new GetAllCategoryController().getAllCategory);
routerCategories.post('/categories', new CreateCategoryController().createCategory);
routerCategories.put('/categories/:id', new UpdateCategoryController().UpdateCategory);
routerCategories.delete('/categories/:id', new DeleteCategoryController().DeleteCategory);


export default routerCategories;