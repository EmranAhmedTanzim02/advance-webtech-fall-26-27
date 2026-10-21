# Product & Employee Management API (Lab Task 1)

| Field   | Value                  |
|---------|------------------------|
| SL      | _write your SL here_   |
| Name    | Emran Ahmed Tanzim     |
| ID      | 23-52867-2             |
| Section | E                      |

A NestJS REST API (TypeORM + PostgreSQL) that manages **products** and **employees** with full CRUD.
Data is stored in a real PostgreSQL database (no in-memory arrays).

## Tech stack
NestJS 10, TypeORM, PostgreSQL, class-validator

## Project structure
```
src/
  products/    controller, service, module, entity, dto
  employees/   controller, service, module, entity, dto
  database/migrations/   create products + employees tables
  data-source.ts         TypeORM / database settings
  app.module.ts, main.ts
screenshots/   Postman screenshots
```

## Setup

### 1. Requirements
Node.js 18+ and PostgreSQL installed.

### 2. Install
```bash
npm install
```

### 3. Create the database
In pgAdmin (or psql) create an empty database:
```sql
CREATE DATABASE product_management;
```

### 4. Configure environment
```bash
cp .env.example .env      # on Windows: copy .env.example .env
```
Open `.env` and put your own PostgreSQL password in `DB_PASSWORD`.

### 5. Create the tables (migrations)
```bash
npm run migration:run
```

### 6. Run the app
```bash
npm run start:dev
```
The API runs on `http://localhost:3000`.

## Endpoints

### Products
| Method | Endpoint        | Description                    |
|--------|-----------------|--------------------------------|
| POST   | /products       | Create and save a product      |
| GET    | /products       | Return all products            |
| GET    | /products/:id   | Return one product by ID       |
| PATCH  | /products/:id   | Update a product               |
| DELETE | /products/:id   | Delete a product               |

Product body: `{ "name": "Rice 5kg", "category": "Grocery", "price": 520.5, "quantity": 40 }`

### Employees
| Method | Endpoint          | Description                    |
|--------|-------------------|--------------------------------|
| POST   | /employees        | Create and save an employee    |
| GET    | /employees        | Return all employees           |
| GET    | /employees/:id    | Return one employee by ID      |
| PATCH  | /employees/:id    | Update an employee             |
| DELETE | /employees/:id    | Delete an employee             |

Employee body: `{ "name": "Karim Hasan", "email": "karim@shop.com", "phone": "01711111111", "password": "dummy123", "age": 29, "yearsOfWorking": 4 }`

## Screenshots
Postman screenshots are in the `screenshots/` folder (01-create.png ... 07-confirm-delete.png).
