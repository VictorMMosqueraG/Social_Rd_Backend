import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { ICreateUser } from "src/common/libs";

@Injectable()
export class UserRepository extends Repository<User>{

    constructor(private dataSource:DataSource){
        super(User, dataSource.createEntityManager());
    }

    async createUser(user:ICreateUser){
        const create = this.create(user);
        return await this.save(create);
    }
}