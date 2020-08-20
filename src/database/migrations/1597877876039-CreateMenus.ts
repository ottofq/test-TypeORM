import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMenus1597877876039 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "menus",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "starter_course",
            type: "varchar",
          },
          {
            name: "protein",
            type: "varchar",
          },
          {
            name: "accompany",
            type: "varchar",
          },
          {
            name: "garnish",
            type: "varchar",
          },
          {
            name: "dessert",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp with time zone",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp with time zone",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("menus");
  }
}
