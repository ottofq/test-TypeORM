import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export default class CreateRatings1597969100222 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "ratings",
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
            type: "integer",
          },
          {
            name: "protein",
            type: "integer",
          },
          {
            name: "accompany",
            type: "integer",
          },
          {
            name: "garnish",
            type: "integer",
          },
          {
            name: "dessert",
            type: "integer",
          },
          {
            name: "comment",
            type: "text",
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "menu_id",
            type: "uuid",
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

    await queryRunner.createForeignKey(
      "ratings",
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "ratings",
      new TableForeignKey({
        columnNames: ["menu_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "menus",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("ratings");
  }
}
