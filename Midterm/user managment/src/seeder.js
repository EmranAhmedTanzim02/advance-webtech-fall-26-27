"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const database_config_1 = __importDefault(require("./config/database.config"));
const user_entity_1 = require("./modules/user/entities/user.entity");
const AppDataSource = new typeorm_1.DataSource(database_config_1.default);
async function runSeeder() {
    try {
        await AppDataSource.initialize();
        console.log("Database connected successfully!");
        const userRepository = AppDataSource.getRepository(user_entity_1.User);
        const newUsers = [
            { name: 'Alice', email: 'alice@example.com', password: 'password123' },
            { name: 'Bob', email: 'bob@example.com', password: 'password456' },
            { name: 'Charlie', email: 'charlie@example.com', password: 'password789' },
        ];
        await userRepository.save(newUsers);
    }
    catch (error) {
    }
    finally {
        if (AppDataSource.isInitialized) {
            await AppDataSource.destroy();
        }
    }
}
runSeeder();
//# sourceMappingURL=seeder.js.map