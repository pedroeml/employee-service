import { Injectable } from '@nestjs/common';
import { DepartmentRepository } from './repositories/department.repository';

@Injectable()
export class DepartmentService {
  constructor(private readonly repository: DepartmentRepository) {}

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }
}
