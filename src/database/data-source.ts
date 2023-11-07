import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import User from "../entities/User" 
import Category from "../entities/Category"
import Video from "../entities/Video"
import { SeederOptions } from "typeorm-extension"
import { UserSeed1699116647883 } from "./seeds/1699116647883-UserSeed"
import { CategorySeed1699116937326 } from "./seeds/1699116937326-CategorySeed"
import { VideoSeed1699128473504 } from "./seeds/1699128473504-VideoSeed"
require('dotenv').config()


const options: DataSourceOptions & SeederOptions = {
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
    seeds: [UserSeed1699116647883, CategorySeed1699116937326, VideoSeed1699128473504],
    subscribers: []
}

export const AppDataSource = new DataSource(options)
