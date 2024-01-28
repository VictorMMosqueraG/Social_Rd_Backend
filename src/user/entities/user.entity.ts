import { IUser } from "src/common/libs";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@Index("unique_email_constraint", ["email"], { unique: true })
export class User implements IUser {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 100, nullable: false })
    email: string;
  
    @Column('varchar', { length: 60, nullable: false })
    password: string;
}
