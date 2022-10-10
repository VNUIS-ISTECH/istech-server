import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Classes } from './classes.entity';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Classes])],
  providers: [ClassesService],
  controllers: [ClassesController],
})
export class ClassesModule {}
