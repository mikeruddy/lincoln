import { IsEmail } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("donate")
export class Donate extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    public id: number;

    @Column("int")
    public donor_id: number;

    @Column({
        type: "varchar",
        nullable: true
    })
    public name: string | null;

    @Column({
        type: "varchar",
        nullable: true
    })
    @IsEmail()
    public email: string | null;

    @Column({
        type: "int",
        nullable: true
    })
    public gender: number | null;

    @Column({
        type: "varchar",
        nullable: true
    })
    public address: string | null;

    @Column("int")
    public amount: number;

    @Column("date")
    public date: Date;
}
