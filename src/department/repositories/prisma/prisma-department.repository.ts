import { Injectable } from '@nestjs/common';
import { DepartmentRepository } from '../department.repository';
import { Department } from '../../entities/department.entity';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class PrismaDepartmentRepository implements DepartmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Department[]> {
    return await this.prisma.department.findMany();
  }

  async findOne(id: string): Promise<Department> {
    return await this.prisma.department.findFirst({
      where: {
        id,
      },
    });
  }
}
