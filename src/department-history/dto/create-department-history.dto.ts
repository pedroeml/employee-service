import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateDepartmentHistoryDto {
  @IsUUID()
  @IsNotEmpty()
  departmentId: string;
  @IsUUID()
  @IsNotEmpty()
  employeeId: string;
  startDate: Date;
}
