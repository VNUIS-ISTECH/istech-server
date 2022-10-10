import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createNewSkill } from './dto/createSkill.dto';
import { UpdateSkillData } from './dto/updateSkill.dto';
import { Skills } from './skills.entity';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skills) private skillsRepository: Repository<Skills>,
  ) {}

  async getSkills(): Promise<Skills[]> {
    return await this.skillsRepository.find();
  }

  async findSkillById(id: number): Promise<Skills> {
    return await this.skillsRepository.findOne({ where: { id: id } });
  }

  async createNewSkill(skill: createNewSkill) {
    const [validSkillName] = await Promise.all([
      this.skillsRepository.findOne({
        where: {
          skillName: skill.skillName,
        },
      }),
    ]);

    if (validSkillName) {
      throw new BadRequestException(
        'This skill is already exited, please use another skill name',
      );
    }

    this.skillsRepository.save(skill);
  }

  async updateSkillData(id: number, skill: UpdateSkillData): Promise<any> {
    const editedSkill = await this.skillsRepository.findOne({
      where: { id },
    });
    const newData = await this.skillsRepository.update(id, {
      skillName: skill.skillName ? skill.skillName : null,
      skillType: skill.skillType ? skill.skillType : null,
    });

    return {
      statusCode: 200,
      message: 'Update successfully!',
    };
  }

  async removeSkill(id: number): Promise<void> {
    this.skillsRepository.delete(id);
  }
}
