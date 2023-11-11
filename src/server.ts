import "reflect-metadata";
import express, { Request, Response } from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";
import routerUsers from "./routes/routerUsers";
import routerCategories from "./routes/routerCategories";
import routerVideos from "./routes/routerVideos";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./public/swagger.json"
import path from "path";
const {
    SwaggerUIBundle,
    SwaggerUIStandalonePreset,
  } = require("swagger-ui-dist");


const app = express();

const port = 3000;


app.use(cors());
app.use(express.json());
app.use(routerUsers);
app.use(routerCategories);
app.use(routerVideos);



/* app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument)) */

const CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';

const options = {
customCssUrl: CSS_URL,
};

app.use('/api-docs', swaggerUI.serveFiles(swaggerDocument, options), swaggerUI.setup(swaggerDocument, options));



app.get('/swagger', (req:Request, res: Response) =>{
    return res.sendFile(path.resolve('src', 'public', 'swagger.json'))
})
app.get('/docs', (req:Request, res: Response) =>{
    return res.sendFile(path.resolve('src', 'public', 'index.html'))
})

AppDataSource.initialize().then( async () => {
console.log('Database OK')
app.listen(port, () => {
    console.log('Server started on por 3000')
})
})
