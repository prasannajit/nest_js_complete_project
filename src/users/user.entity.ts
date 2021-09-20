import { AfterRemove, AfterUpdate, AfterInsert, Entity, Column, PrimaryGeneratedColumn } from "typeorm";
//import { Exclude } from "class-transformer";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    //@Exclude()
    password: string;

    @AfterInsert()
    logInsert(){
        console.log(`Entity inserted ${this.id}`);
    }

    @AfterRemove()
    logRemove(){
        console.log(`Entity removed ${this.id}`);
    }

    @AfterUpdate()
    logUpdate(){
        console.log(`Entity updated ${this.id}`);
    }
}