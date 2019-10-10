import { IsEmail } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("donate")
export class Donate extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    public id: number;

    @Column("int")
    public donor_id: number;

    @Column("varchar")
    public name: string;

    @Column("varchar")
    @IsEmail()
    public email: string;

    @Column("int")
    public gender: number;

    @Column("varchar")
    public address: string;

    @Column("int")
    public amount: number;

    @Column("int")
    public donation_month: number;

    @Column("int")
    public donation_year: number;
}
