import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

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

export class UpdateMemberData {
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly id: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly account: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly firstName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly lastName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly dob: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly class: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly studentId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly msTeamsEmail: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly facebookAccount: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsValidEmail('email')
  readonly email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly trelloAccount: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly cityCode: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly departmentCode: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly generation: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly createdAt: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly createdBy: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly joinedSince: string;
}
