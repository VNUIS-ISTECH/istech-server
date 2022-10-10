import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createNewMember } from './dto/createMember.dto';
import { UpdateMemberData } from './dto/updateMember.dto';
import { Members } from './members.entity';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Members) private membersRepository: Repository<Members>,
  ) {}

  async getMembers(): Promise<Members[]> {
    return await this.membersRepository.find();
  }

  async findMemberById(id: number): Promise<Members> {
    return await this.membersRepository.findOne({ where: { id: id } });
  }

  async createNewMember(member: createNewMember) {
    const [validEmail, validAccount, validStudentId] = await Promise.all([
      this.membersRepository.findOne({
        where: {
          account: member.account,
        },
      }),
      this.membersRepository.findOne({
        where: {
          email: member.email,
        },
      }),
      this.membersRepository.findOne({
        where: {
          studentId: member.studentId,
        },
      }),
    ]);

    if (validAccount) {
      throw new BadRequestException(
        'This account is already exited, please use another email',
      );
    }

    if (validEmail) {
      throw new BadRequestException(
        'This email is already exited, please use another email',
      );
    }

    if (validStudentId) {
      throw new BadRequestException(
        'This id is already exited, please use another email',
      );
    }

    this.membersRepository.save(member);
  }

  async updateMemberData(id: number, member: UpdateMemberData): Promise<any> {
    const editedMember = await this.membersRepository.findOne({
      where: { id },
    });
    const newData = await this.membersRepository.update(id, {
      account: member.account ? member.account : null,
      firstName: member.firstName ? member.firstName : null,
      lastName: member.lastName ? member.lastName : null,
      dob: member.dob ? member.dob : null,
      class: member.class ? member.class : null,
      studentId: member.studentId ? member.studentId : null,
      msTeamsEmail: member.msTeamsEmail ? member.msTeamsEmail : null,
      email: member.email ? member.email : null,
      trelloAccount: member.trelloAccount ? member.trelloAccount : null,
      cityCode: member.cityCode ? member.cityCode : null,
      departmentCode: member.departmentCode ? member.departmentCode : null,
      generation: member.generation ? member.generation : null,
      createdAt: member.createdAt ? member.createdAt : null,
      createdBy: member.createdBy ? member.createdBy : null,
      joinedSince: member.joinedSince ? member.joinedSince : null,
    });

    return {
      statusCode: 200,
      message: 'Update successfully!',
    };
  }

  async removeMember(id: number): Promise<void> {
    this.membersRepository.delete(id);
  }
}
