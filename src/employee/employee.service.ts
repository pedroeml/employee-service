import { Employee } from './entities/employee.entity';
import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './repositories/employee.repository';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private readonly repository: EmployeeRepository) {}

  create(data: CreateEmployeeDto): Promise<Employee> {
    return this.repository.create(data);
  }

  findAll(): Promise<Employee[]> {
    return this.repository.findAll();
  }

  findOne(id: string): Promise<Employee> {
    return this.repository.findOne(id);
  }

  update(id: string, data: UpdateEmployeeDto): Promise<Employee> {
    return this.repository.update(id, data);
  }

  remove(id: string): Promise<Employee> {
    return this.repository.remove(id);
  }
}
