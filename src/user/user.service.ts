import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repositories/user.repository';




@Injectable()
export class UserService {

  constructor(private readonly userRepository:UserRepository){}

  async create(createUserDto: CreateUserDto) {
    const {email}=createUserDto
    try {
      await this.findAndValidIfAlreadyExist(email);
     
      return await this.userRepository.createUser(createUserDto);
    } catch (error) {
      throw error;
    } 
  }

  //this method find in table user and valid if exist other user with equals email
  async findAndValidIfAlreadyExist(email: string){
    try {
      const user = await this.userRepository.createQueryBuilder('user').where('user.email = :email', { email }).getOne();
      if (user) throw new BadRequestException('User already exists.');
    } catch (error) {
      throw error;
    }
  }



}
