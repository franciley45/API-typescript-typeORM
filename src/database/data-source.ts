import "reflect-metadata"
import { DataSource } from "typeorm"
import User from "../entities/User" 
import Category from "../entities/Category"
import Video from "../entities/Video"
require('dotenv').config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME_MYSQL,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, Category,Video],
    migrations: ["./migrations/*.ts"],
    subscribers: [],
})
