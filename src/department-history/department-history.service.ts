import { Injectable } from '@nestjs/common';
import { DepartmentHistoryRepository } from './repositories/department-history.repository';
import { CreateDepartmentHistoryDto } from './dto/create-department-history.dto';

@Injectable()
export class DepartmentHistoryService {
  constructor(private readonly repository: DepartmentHistoryRepository) {}

  create(data: CreateDepartmentHistoryDto) {
    return this.repository.create(data);
  }

  findAll(employeeId: string) {
    return this.repository.findAll(employeeId);
  }
}
