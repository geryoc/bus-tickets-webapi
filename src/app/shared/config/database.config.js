require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_LOCAL_USERNAME,
    password: process.env.DB_LOCAL_PASSWORD,
    database: process.env.DB_LOCAL_NAME,
    host: process.env.DB_LOCAL_HOSTNAME,
    port: process.env.DB_LOCAL_PORT,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_TEST_USERNAME,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_NAME,
    host: process.env.DB_TEST_HOSTNAME,
    port: process.env.DB_TEST_PORT,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_PROD_USERNAME,
    password: process.env.DB_PROD_PASSWORD,
    database: process.env.DB_PROD_NAME,
    host: process.env.DB_PROD_HOSTNAME,
    port: process.env.DB_PROD_PORT,
    dialect: 'postgres',
  },
};