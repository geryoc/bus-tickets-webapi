# Sequelize CLI Cheatsheet

## Setup

### Install Sequelize and CLI

To get started with Sequelize, install the library and CLI:

```bash
npm install sequelize sequelize-cli --save
npm install mysql2 # or pg/pg-hstore for PostgreSQL, sqlite3, tedious for MSSQL
```

### Initialize Sequelize Project

Run the following command to initialize a new Sequelize project:

```bash
npx sequelize-cli init
```

This will create the following directories:

- `config/` - Contains database configuration.
- `models/` - Define your models here.
- `migrations/` - Define your migrations here.
- `seeders/` - Define your seed files here.

---

## Configuration

### Create `config/config.json`

Sequelize uses a configuration file to manage database connections for different environments. Here's an example `config/config.json`:

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

---

## Model Management

### Generate a New Model

To create a new model, use the `model:generate` command:

```bash
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

This generates a model file in the `models/` directory and an initial migration file in the `migrations/` directory.

### Sync Model with the Database (Unsafe)

To apply all model definitions directly to the database (not recommended for production):

```bash
npx sequelize-cli db:migrate
```

---

## Migration Management

### Generate a Migration

To create a new migration file:

```bash
npx sequelize-cli migration:generate --name migration_name
```

### Run All Pending Migrations

To execute all pending migrations:

```bash
npx sequelize-cli db:migrate
```

### Undo Last Migration

To revert the last executed migration:

```bash
npx sequelize-cli db:migrate:undo
```

### Undo All Migrations

To revert all executed migrations:

```bash
npx sequelize-cli db:migrate:undo:all
```

---

## Seeder Management

### Generate a Seeder

To create a new seeder file:

```bash
npx sequelize-cli seed:generate --name seed_name
```

### Run All Seeders

To execute all seeders:

```bash
npx sequelize-cli db:seed:all
```

### Run a Specific Seeder

To execute a specific seeder:

```bash
npx sequelize-cli db:seed --seed seed_name.js
```

### Undo All Seeders

To revert all executed seeders:

```bash
npx sequelize-cli db:seed:undo:all
```

### Undo a Specific Seeder

To revert a specific seeder:

```bash
npx sequelize-cli db:seed:undo --seed seed_name.js
```

---

## Database Operations

### Check Database Connection

To test the database connection:

```bash
npx sequelize-cli db:connection:test
```

### Create the Database

To create the database defined in the configuration:

```bash
npx sequelize-cli db:create
```

### Drop the Database

To drop the database defined in the configuration:

```bash
npx sequelize-cli db:drop
```

---

## Help and Version

### View CLI Help

To display help information for Sequelize CLI:

```bash
npx sequelize-cli --help
```

### Check CLI Version

To check the version of Sequelize CLI:

```bash
npx sequelize-cli --version
```

---

## Notes

- Replace `npx` with `yarn` or `pnpm` if you're using a different package manager.
- Always test migrations and seeders in a staging environment before applying to production.
- Keep your `config/config.json` secure or use environment variables for sensitive data.

Happy coding! 🚀
