import { Controller, Post, Body,BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiResponse({status:201,description:'user was created'})
  @ApiResponse({status:400,description:'bad request'})
  @ApiResponse({status:500,description:'internal server error'})
  async create(@Body() createUserDto: CreateUserDto):Promise<void> {
    await this.userService.create(createUserDto);
  }

}
