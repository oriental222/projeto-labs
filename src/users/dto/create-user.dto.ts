import { IsEmail, IsString, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  reserva: string;
 
  @IsString()
  hotel: string;
 
  @IsString()
  name: string;

  @IsString()
  @MinLength(6)
  password: string;
}
