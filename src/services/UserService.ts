import User from "../entities/User";
import IUser from "../interfaces/IUser";
import { AppDataSource } from "../database/data-source";
import { InsertResult } from "typeorm";
import userRequest from "../interfaces/IUserRequest";
import IUserRequest from "../interfaces/IUserRequest";
import { ValidadeUser } from "../middleware/ValidadeUser";
const jwt = require('jsonwebtoken');
require('dotenv').config()

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};
const userService = AppDataSource.getRepository(User);

const getUsers = async (): Promise<IUser[]> => {
  const result = await userService.find()
  return result
}

const createUser = async (name: string, email: string, password: string): Promise<IUserRequest> => {

  const validadeUser = ValidadeUser(name, email, password)
  if (!validadeUser) return { status: 409, message: "all required fields are filled in!" }

  const userExists = await userService.findOneBy({ email })
  if (userExists) return { status: 409, message: "User already exists in the database!" }


  const insertResult: InsertResult = await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([{ name, email, password }])
    .execute();

  const token = jwt.sign({ id: insertResult.identifiers[0].id }, process.env.JWT_SECRET, jwtConfig);

  return { status: 201, message: { user_id: insertResult.identifiers[0].id, name, token } };
}

const loginUser = async (email: string, password: string): Promise<IUserRequest> => {

  if(!email || !password) return { status: 409, message: "fill in all fields!" }

  const userExists = await userService.findOneBy({ email })

  if (!userExists) return { status: 409, message: "unregistered user!" }
  if (userExists.password !== password) return { status: 409, message: "wrong password!" }

  const token = jwt.sign({ id: 23 }, process.env.JWT_SECRET, jwtConfig);

  return { status: 201, message: { user_id: 23, name: userExists.name, token } };
}


export default { getUsers, createUser, loginUser };