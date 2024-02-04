import { Module } from '@nestjs/common';
import { DepartmentHistoryService } from './department-history.service';
import { PrismaService } from '../database/prisma.service';
import { DepartmentHistoryRepository } from './repositories/department-history.repository';
import { PrismaDepartmentHistoryRepository } from './repositories/prisma/prisma-department-history.repository';
import { DepartmentHistoryController } from './department-history.controller';

@Module({
  controllers: [DepartmentHistoryController],
  providers: [
    DepartmentHistoryService,
    PrismaService,
    {
      provide: DepartmentHistoryRepository,
      useClass: PrismaDepartmentHistoryRepository,
    },
  ],
})
export class DepartmentHistoryModule {}
