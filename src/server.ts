import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";
import routerUsers from "./routes/routerUsers";
import routerCategories from "./routes/routerCategories";
import routerVideos from "./routes/routerVideos";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./swagger.json"

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(routerUsers);
app.use(routerCategories);
app.use(routerVideos);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
AppDataSource.initialize().then( async () => {
console.log('Database OK')
app.listen(port, () => {
    console.log('Server started on por 3000')
})
})
