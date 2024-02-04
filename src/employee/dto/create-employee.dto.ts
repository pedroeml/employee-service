import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  hireDate: Date;
  @IsUUID()
  @IsNotEmpty()
  departmentId: string;
  @IsNotEmpty()
  phone: number;
  @IsNotEmpty()
  address: string;
}
