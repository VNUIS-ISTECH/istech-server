import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classes } from './classes.entity';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Classes) private classesRepository: Repository<Classes>,
  ) {}

  async getAllClasses(): Promise<Classes[]> {
    return await this.classesRepository.find();
  }

  async getClassByMajor(classMajor: string): Promise<Classes[]> {
    return await this.classesRepository.find({
      where: { classMajor: classMajor },
    });
  }

  async getClassesByName(classCode: string): Promise<Classes> {
    return await this.classesRepository.findOne({
      where: { classCode: classCode },
    });
  }

  async deleteClassesByName(className: string): Promise<void> {
    this.classesRepository.delete(className);
  }
}
