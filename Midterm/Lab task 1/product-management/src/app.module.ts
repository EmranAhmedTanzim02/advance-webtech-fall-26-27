import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './data-source';
import { ProductsModule } from './products/products.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), ProductsModule, EmployeesModule],
})
export class AppModule {}
