import { IsUnique } from '@youba/nestjs-dbvalidator';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersController } from './members.controller';
import { Members } from './members.entity';
import { MembersService } from './members.service';

@Module({
  imports: [TypeOrmModule.forFeature([Members])],
  providers: [MembersService],
  controllers: [MembersController],
})
export class MembersModule {}
