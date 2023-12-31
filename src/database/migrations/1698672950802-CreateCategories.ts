import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCategories1698672950802 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "categories",
				columns: [
					{
						name: "category_id",
						type: "varchar",
						isPrimary: true
					},
					{
						name: "name",
						type: "varchar",
						isUnique: true
					},
					{
						name: "description",
						type: "varchar"
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()"
					}
				]
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('categories');
	}

}
