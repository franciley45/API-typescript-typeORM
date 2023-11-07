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
			name: 'Todo mundo em panico2',
			description: 'Filmes engraçados',
            duration: 120,
            category_id: '3a783c92-d359-4214-aa70-20b7940d4996'
		}

		const videoExists = await videoRepository.findOneBy({ name: videoData.name })

		if (!videoExists) {
			const newVideo = videoRepository.create(videoData)
			await videoRepository.save(newVideo)
		}
    }
}
