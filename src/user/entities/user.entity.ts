import { IUser } from "src/common/libs";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User implements IUser{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column('varchar',{length:100,nullable:false,unique:true})
    email: string;
  
    @Column('varchar',{length:60,nullable:false})
    password: string;
}
