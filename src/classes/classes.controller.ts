import { ClassesService } from './classes.service';
import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('classes')
export class ClassesController {
  constructor(private ClassesService: ClassesService) {}

  @Get()
  @ApiTags('Get all classes')
  async getAllClasses() {
    return this.ClassesService.getAllClasses();
  }

  @Get(':classMajor')
  @ApiTags('Get classes by major')
  @ApiParam({ name: 'classMajor' })
  async getClassByMajor(@Param('classMajor') classMajor) {
    return this.ClassesService.getClassByMajor(classMajor);
  }
  @Get(':classCode')
  @ApiTags('Get class by name')
  @ApiParam({ name: 'classCode' })
  async findClassByName(@Param('classCode') classCode) {
    const className = await this.ClassesService.getClassesByName(classCode);
    if (!className) {
      throw new NotFoundException("This class doesn't exits");
    }
    return className;
  }

  @Delete(':className')
  @ApiTags('Delete class by name')
  @ApiParam({ name: 'className' })
  async deleteClassByName(@Param('className') className) {
    const check = await this.ClassesService.getClassesByName(className);
    if (!check) {
      throw new NotFoundException("This class doesn't exits");
    } else {
      this.ClassesService.deleteClassesByName(className);
    }
  }
}
