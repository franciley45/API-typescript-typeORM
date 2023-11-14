import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import Video from '../../entities/Video';

export class VideoSeed1699128473504 implements Seeder {
    track = false;

    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const videoRepository = dataSource.getRepository(Video)
		const videoData = {
			name: 'Todo mundo em Panico2',
			description: 'Filmes engraçados',
            duration: 120,
            category_id: 'aqui vai o ID da Categoria vc precisa tb descomenta essa seed no arquivo data-source.ts'
		}

		const videoExists = await videoRepository.findOneBy({ name: videoData.name })

		if (!videoExists) {
			const newVideo = videoRepository.create(videoData)
			await videoRepository.save(newVideo)
		}
    }
}
