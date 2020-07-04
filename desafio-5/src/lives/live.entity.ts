import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Live {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    live: string;

    @Column()
    speaker: string;

    @Column()
    url: string;
}