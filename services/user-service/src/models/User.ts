import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column("simple-array") // Preferences stored as comma-separated values
    preferences: string[];

    constructor() {
        this.name = "";
        this.email = "";
        this.password = "";
        this.preferences = [];
    }
}
