import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentHistoryModule } from './department-history/department-history.module';

@Module({
  imports: [DepartmentModule, DepartmentHistoryModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
