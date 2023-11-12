import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('categoreis')
class Category {
	@PrimaryColumn()
	category_id: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@CreateDateColumn()
	created_at: string;

	constructor() {
		if (!this.category_id) {
			this.category_id = uuid();
		}
	}
}

export default Category;