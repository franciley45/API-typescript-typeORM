import User from "../entities/User";
import IUser from "../interfaces/IUser";
import { AppDataSource } from "../database/data-source";
import { InsertResult } from "typeorm";

const userService = AppDataSource.getRepository(User);

const getUsers = (): Promise<IUser[]> => {
    return userService.find();
}

const createUser = async (name: string, email: string):Promise<IUser> => {
    const insertResult: InsertResult = await AppDataSource
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([{ name, email }])
      .execute();
    
    const [resultUser] =  await userService.find({ where: { id: insertResult.identifiers[0].id } })
    
    return resultUser
}

export default { getUsers, createUser };