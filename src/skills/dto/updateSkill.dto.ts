import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateSkillData {
 @ApiProperty()
  @IsOptional()
  @IsString()
  readonly id: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly skillName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly skillType: string;
}
