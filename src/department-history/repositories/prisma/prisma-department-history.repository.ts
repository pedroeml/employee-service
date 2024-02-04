import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { DepartmentHistory } from '../../entities/department-history.entity';
import { randomUUID } from 'crypto';
import { CreateDepartmentHistoryDto } from '../../dto/create-department-history.dto';
import { DepartmentHistoryRepository } from '../department-history.repository';

@Injectable()
export class PrismaDepartmentHistoryRepository
  implements DepartmentHistoryRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateDepartmentHistoryDto): Promise<DepartmentHistory> {
    return await this.prisma.departmentHistory.create({
      data: {
        ...data,
        id: randomUUID(),
      },
    });
  }

  async findAll(employeeId: string): Promise<DepartmentHistory[]> {
    return await this.prisma.departmentHistory.findMany({
      where: {
        employeeId: {
          equals: employeeId,
        },
      },
    });
  }
}
