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

    @Column("boolean")
    public gender: boolean;

    @Column("varchar")
    public address: string;

    @Column("int")
    public amount: number;
}
