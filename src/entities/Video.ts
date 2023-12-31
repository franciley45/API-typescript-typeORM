import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Category from './Category';

@Entity('videos')
class Video {
	@PrimaryColumn()
	video_id: string;

	@Column()
	name: string;

	@Column()
	description: string;

    @Column()
	duration: number;

    @Column()
    category_id: string;
    
    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id"})
    category: Category;

	@CreateDateColumn()
	created_at: string;

	constructor() {
		if (!this.video_id) {
			this.video_id = uuid();
		}
	}
}

export default Video;