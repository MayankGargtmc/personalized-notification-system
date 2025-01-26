import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Recommendation {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    userId!: string;

    @Column("text")
    content!: string; // JSON string to store product recommendations

    @Column()
    createdAt!: Date;

}
