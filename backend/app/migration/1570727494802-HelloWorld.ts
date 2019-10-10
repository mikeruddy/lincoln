import {MigrationInterface, QueryRunner} from "typeorm";

export class HelloWorld1570727494802 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "donate" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "donor_id" integer NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "gender" boolean NOT NULL, "address" varchar NOT NULL, "amount" integer NOT NULL)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "donate"`, undefined);
    }

}
