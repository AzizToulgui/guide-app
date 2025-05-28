import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Experience {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    location: string;

    @Column('text', { array: true, nullable: true })
    images: string[];

    @Column('text', { array: true, nullable: true })
    tags: string[];

    @Column('decimal')
    price: number;

    @Column({ nullable: true })
    duration: string;

    @Column('int', { nullable: true })
    review: number;

    @Column('text', { array: true, nullable: true })
    targetedGroups: string[];
}
