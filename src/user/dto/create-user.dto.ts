import { ICreateUser } from "src/common/libs";
import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto implements ICreateUser {

    @ApiProperty({
        example:'victormmosquerag@gmail.com',
        description:"email for create new user",
        nullable:false
    })
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        example:'MyNewPassword',
        description:'password of my count',
        nullable:false
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    password: string;
}
