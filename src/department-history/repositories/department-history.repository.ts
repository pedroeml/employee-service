import { CreateDepartmentHistoryDto } from '../dto/create-department-history.dto';
import { DepartmentHistory } from '../entities/department-history.entity';

export abstract class DepartmentHistoryRepository {
  abstract create(dto: CreateDepartmentHistoryDto): Promise<DepartmentHistory>;
  abstract findAll(employeeId: string): Promise<DepartmentHistory[]>;
}
