import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { EmployeeRepository } from './repositories/employee.repository';
import { PrismaEmployeeRepository } from './repositories/prisma/prisma-employee.repository';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

@Module({
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    PrismaService,
    {
      provide: EmployeeRepository,
      useClass: PrismaEmployeeRepository,
    },
  ],
})
export class EmployeeModule {}
