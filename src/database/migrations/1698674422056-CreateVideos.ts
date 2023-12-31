import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateVideos1698674422056 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "videos",
				columns: [
					{
						name: "video_id",
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
						name: "category_id",
						type: "varchar",

					},
					{
						name: "duration",
						type: "numeric"
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()"
					}
				],
				foreignKeys: [
					{
						name: "fk_videos_category",
						columnNames: ["category_id"],
						referencedTableName: "categories",
						referencedColumnNames: ["category_id"]
					}
				]
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("videos");
	}

}
