import { AudiencesService } from './audiences.service';
import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('audiences')
export class AudiencesController {
  constructor(private AudiencesService: AudiencesService) {}

  @Get()
  @ApiTags('Get all audiences

  ')
  async getAllAudiences() {
    return this.AudiencesService.getAllAudiences();
  }

  @Get(':classMajor')
  @ApiTags('Get classes by major')
  @ApiParam({ name: 'classMajor' })
  async getClassByMajor(@Param('classMajor') classMajor) {
    return this.AudiencesService.getClassByMajor(classMajor);
  }
  @Get(':classCode')
  @ApiTags('Get class by name')
  @ApiParam({ name: 'classCode' })
  async findClassByName(@Param('classCode') classCode) {
    const className = await this.AudiencesService.getClassesByName(classCode);
    if (!className) {
      throw new NotFoundException("This class doesn't exits");
    }
    return className;
  }

  @Delete(':className')
  @ApiTags('Delete class by name')
  @ApiParam({ name: 'className' })
  async deleteClassByName(@Param('className') className) {
    const check = await this.AudiencesService.getClassesByName(className);
    if (!check) {
      throw new NotFoundException("This class doesn't exits");
    } else {
      this.AudiencesService.deleteClassesByName(className);
    }
  }
}
