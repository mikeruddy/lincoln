import {MigrationInterface, QueryRunner} from "typeorm";

export class HelloWorld21570737624164 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_donate" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "donor_id" integer NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "gender" boolean NOT NULL, "address" varchar NOT NULL, "amount" integer NOT NULL, "donation_month" integer NOT NULL, "donation_year" integer NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_donate"("id", "donor_id", "name", "email", "gender", "address", "amount", "donation_month", "donation_year") SELECT "id", "donor_id", "name", "email", "gender", "address", "amount", "donation_month", "donation_year" FROM "donate"`, undefined);
        await queryRunner.query(`DROP TABLE "donate"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_donate" RENAME TO "donate"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_donate" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "donor_id" integer NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "gender" integer NOT NULL, "address" varchar NOT NULL, "amount" integer NOT NULL, "donation_month" integer NOT NULL, "donation_year" integer NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_donate"("id", "donor_id", "name", "email", "gender", "address", "amount", "donation_month", "donation_year") SELECT "id", "donor_id", "name", "email", "gender", "address", "amount", "donation_month", "donation_year" FROM "donate"`, undefined);
        await queryRunner.query(`DROP TABLE "donate"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_donate" RENAME TO "donate"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "donate" RENAME TO "temporary_donate"`, undefined);
        await queryRunner.query(`CREATE TABLE "donate" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "donor_id" integer NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "gender" boolean NOT NULL, "address" varchar NOT NULL, "amount" integer NOT NULL, "donation_month" integer NOT NULL, "donation_year" integer NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "donate"("id", "donor_id", "name", "email", "gender", "address", "amount", "donation_month", "donation_year") SELECT "id", "donor_id", "name", "email", "gender", "address", "amount", "donation_month", "donation_year" FROM "temporary_donate"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_donate"`, undefined);
        await queryRunner.query(`ALTER TABLE "donate" RENAME TO "temporary_donate"`, undefined);
        await queryRunner.query(`CREATE TABLE "donate" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "donor_id" integer NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "gender" boolean NOT NULL, "address" varchar NOT NULL, "amount" integer NOT NULL, "donation_month" integer NOT NULL, "donation_year" integer NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "donate"("id", "donor_id", "name", "email", "gender", "address", "amount", "donation_month", "donation_year") SELECT "id", "donor_id", "name", "email", "gender", "address", "amount", "donation_month", "donation_year" FROM "temporary_donate"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_donate"`, undefined);
    }

}
