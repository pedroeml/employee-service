import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DepartmentHistoryService } from './department-history.service';
import { CreateDepartmentHistoryDto } from './dto/create-department-history.dto';

@Controller('department/history')
export class DepartmentHistoryController {
  constructor(private readonly service: DepartmentHistoryService) {}

  @Post()
  create(@Body() data: CreateDepartmentHistoryDto) {
    return this.service.create(data);
  }

  @Get(':employeeId')
  findAll(@Param('employeeId') employeeId: string) {
    return this.service.findAll(employeeId);
  }
}
