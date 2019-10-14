import {MigrationInterface, QueryRunner} from "typeorm";

export class HelloWorld41570923639871 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "donate" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "donor_id" integer NOT NULL, "name" varchar, "email" varchar, "gender" integer, "address" varchar, "amount" integer NOT NULL, "date" date NOT NULL)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "donate"`, undefined);
    }

}
