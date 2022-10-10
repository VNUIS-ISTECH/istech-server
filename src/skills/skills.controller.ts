import { SkillService } from './skills.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Skills } from './skills.entity';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { createNewSkill } from './dto/createSkill.dto';
import { response } from 'express';
import { UpdateSkillData } from './dto/updateSkill.dto';

@Controller('skills')
export class SkillsController {
  constructor(private SkillsService: SkillService) {}
  @Get()
  @ApiTags('Get all skill')
  findAll() {
    return this.SkillsService.getSkills();
  }

  @Get(':id')
  @ApiTags('Get skill by id')
  @ApiParam({ name: 'id' })
  async findSkillById(@Param('id', ParseIntPipe) id) {
    const skill = await this.SkillsService.findSkillById(id);
    if (!skill) {
      throw new NotFoundException("Skill with this id doesn't exits");
    }
    return skill;
  }

  @Post()
  @ApiTags('Create skill')
  async createNewSkill(@Body() skill: createNewSkill) {
    return await this.SkillsService.createNewSkill(skill);
  }

  @Delete(':id')
  @ApiTags('Delete skill by id')
  @ApiParam({ name: 'id' })
  async removeSkillById(@Param('id', ParseIntPipe) id) {
    const skill = await this.SkillsService.findSkillById(id);
    if (!skill) {
      throw new NotFoundException("Skill with this id doesn't exits");
    }
    this.SkillsService.removeSkill(id);
  }

  @Patch(':id')
  @ApiTags('Update skill by id')
  async editSkillById(
    @Body() skill: UpdateSkillData,
    @Param('id') id: number,
  ): Promise<UpdateSkillData> {
    const skillEdited = await this.SkillsService.updateSkillData(id, skill);
    if (!skillEdited) {
      throw new NotFoundException("Skill with this id doesn't exist");
    }
    return skillEdited;
  }
}
