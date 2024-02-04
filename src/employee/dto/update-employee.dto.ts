import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './../../../.history/src/employee/dto/create-employee.dto_20240202122458';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
