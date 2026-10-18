import { DataSource } from 'typeorm';
import dataSourceOptions from './config/database.config'; 
import { User } from './modules/user/entities/user.entity'; 


const AppDataSource = new DataSource(dataSourceOptions);

async function runSeeder() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected successfully!");

    const userRepository = AppDataSource.getRepository(User);

    
    const newUsers = [
      { name: 'Alice', email: 'alice@example.com', password: 'password123' },
      { name: 'Bob', email: 'bob@example.com', password: 'password456' },
      { name: 'Charlie', email: 'charlie@example.com', password: 'password789' },
    ];

    await userRepository.save(newUsers);
    

  } catch (error) {
    
  } finally {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
  }
}

runSeeder();