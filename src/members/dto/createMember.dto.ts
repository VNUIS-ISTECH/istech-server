import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  registerDecorator,
  Validate,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { Unique } from 'typeorm';

export function IsValidEmail(
  property?: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsValidEmail',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return value.match(
            /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          );
        },
        defaultMessage(args: ValidationArguments) {
          return 'Please enter a valid email address';
        },
      },
    });
  };
}

export class createNewMember {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly account: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly dob: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly class: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly studentId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly msTeamsEmail: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly facebookAccount: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsValidEmail('email')
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly trelloAccount: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly cityCode: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly departmentCode: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly generation: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly createdAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly createdBy: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly joinedSince: string;
}
