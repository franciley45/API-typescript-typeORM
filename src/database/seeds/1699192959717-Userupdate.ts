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

        const userRepo = await userRepository.find()

        const users = [
            { name: "user1", email: "user1@gmail.com", password: "12345" },
            { name: "user2", email: "user2@gmail.com", password: "12345" },
            { name: "user3", email: "user3@gmail.com", password: "12345" },
        ]

        userRepo.forEach( async (element) => {
            const resultado = users.filter(elemento => elemento.email == element.email);
            const newUser = userRepository.create(resultado)
            await userRepository.save(newUser)
        })
    }
}
