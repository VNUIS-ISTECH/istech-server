import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Audiences } from './audiences.entity';

@Injectable()
export class AudiencesService {
  constructor(
    @InjectRepository(Audiences) private classesRepository: Repository<Audiences>,
  ) {}

  async getAllAudiences(): Promise<Audiences[]> {
    return await this.classesRepository.find();
  }

  async getClassByMajor(classMajor: string): Promise<Audiences[]> {
    return await this.classesRepository.find({
      where: { classMajor: classMajor },
    });
  }

  async getClassesByName(classCode: string): Promise<Audiences> {
    return await this.classesRepository.findOne({
      where: { classCode: classCode },
    });
  }

  async deleteClassesByName(className: string): Promise<void> {
    this.classesRepository.delete(className);
  }
}
