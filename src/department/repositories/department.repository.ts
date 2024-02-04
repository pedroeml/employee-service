import { Department } from '../entities/department.entity';

export abstract class DepartmentRepository {
  abstract findAll(): Promise<Department[]>;
  abstract findOne(id: string): Promise<Department>;
}
