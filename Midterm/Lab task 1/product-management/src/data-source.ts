import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Product } from './products/entities/product.entity';
import { Employee } from './employees/entities/employee.entity';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Product, Employee],
  migrations: [__dirname + '/database/migrations/*.{ts,js}'],
  synchronize: false, // tables are created by migrations
};

// Used by the TypeORM CLI (migration:run / migration:revert)
export default new DataSource(dataSourceOptions);
