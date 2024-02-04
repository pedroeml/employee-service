import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { Employee } from '../entities/employee.entity';

export abstract class EmployeeRepository {
  abstract create(dto: CreateEmployeeDto): Promise<Employee>;
  abstract findAll(): Promise<Employee[]>;
  abstract findOne(id: string): Promise<Employee>;
  abstract update(id: string, dto: UpdateEmployeeDto): Promise<Employee>;
  abstract remove(id: string): Promise<Employee>;
}
