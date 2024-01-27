import { ICreateUser } from "../dto";

export interface IUser extends ICreateUser{
    id: string;
}