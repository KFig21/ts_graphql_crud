import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Movie extends BaseEntity{
    @Field(() => Int) // typegraphql type
    @PrimaryGeneratedColumn() // database type
    id: number

    @Field()
    @Column()
    title: string

    @Field(() => Int)
    @Column('int', { default: 60 })
    minutes: number
}