import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import User from '../../entities/User';

export class Userupdate1699192959717 implements Seeder {
    track = false;

    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const userRepository = dataSource.getRepository(User)


        const newUser = userRepository.create([
            { name: "user1", email: "user1@gmail.com" },
            { name: "user2", email: "user2@gmail.com" },
            { name: "user3", email: "user3@gmail.com" },
            { name: "user4", email: "user4@gmail.com" },
            { name: "user5", email: "user5@gmail.com" },
        ])
        await userRepository.save(newUser)
    }
}
