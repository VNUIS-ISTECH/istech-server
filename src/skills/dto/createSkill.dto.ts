import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class createNewSkill {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly skillName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly skillType: string;
}
