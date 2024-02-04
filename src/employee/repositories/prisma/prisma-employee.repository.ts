import { randomUUID } from 'crypto';
import { PrismaService } from '../../../database/prisma.service';
import { CreateEmployeeDto } from '../../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../../dto/update-employee.dto';
import { Employee } from '../../entities/employee.entity';
import { EmployeeRepository } from '../employee.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaEmployeeRepository implements EmployeeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEmployeeDto): Promise<Employee> {
    return await this.prisma.employee.create({
      data: {
        ...data,
        id: randomUUID(),
      },
    });
  }

  async findAll(): Promise<Employee[]> {
    return await this.prisma.employee.findMany();
  }

  async findOne(id: string): Promise<Employee> {
    return await this.prisma.employee.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateEmployeeDto): Promise<Employee> {
    return await this.prisma.employee.update({ where: { id }, data });
  }

  async remove(id: string): Promise<Employee> {
    return await this.prisma.employee.delete({ where: { id } });
  }
}
