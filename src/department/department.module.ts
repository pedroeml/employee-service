import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { PrismaService } from '../database/prisma.service';
import { DepartmentRepository } from './repositories/department.repository';
import { PrismaDepartmentRepository } from './repositories/prisma/prisma-department.repository';
import { DepartmentController } from './department.controller';

@Module({
  controllers: [DepartmentController],
  providers: [
    DepartmentService,
    PrismaService,
    {
      provide: DepartmentRepository,
      useClass: PrismaDepartmentRepository,
    },
  ],
})
export class DepartmentModule {}
