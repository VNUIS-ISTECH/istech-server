import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Audiences } from './audiences.entity';
import { AudiencesService } from './audiences.service';
import { AudiencesController } from './audiences.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Audiences])],
  providers: [AudiencesService],
  controllers: [AudiencesController],
})
export class AudiencesModule {}
