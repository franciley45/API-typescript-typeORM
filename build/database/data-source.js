"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = __importDefault(require("../entities/User"));
var Category_1 = __importDefault(require("../entities/Category"));
var Video_1 = __importDefault(require("../entities/Video"));
require('dotenv').config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME_MYSQL,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    entities: [User_1.default, Category_1.default, Video_1.default],
    migrations: ["./migrations/*.ts"],
    subscribers: [],
});
