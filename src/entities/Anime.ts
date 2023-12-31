//@ts-check
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Chapter } from "./Chapter";
import { Category } from "./Category";
@Entity()
export class Anime extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    date: Date;

    @Column({ 
        default: true
    })
    state: boolean;

    @Column({ 
        default: "El mejor anime del mundo"
    })
    description: string;

    @Column({ 
        default: 0
    })
    views: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAd: Date;

    @OneToMany(() =>Chapter,(chapter)=> chapter.anime)
    chapters: Chapter[];

    @ManyToOne(() => Category, (category) => category.anime)
    category: Category;
}