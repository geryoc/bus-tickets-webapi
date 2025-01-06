const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const errorHandler = require('./shared/middleware/errorHandler.js');
const appRouter = require('./shared/router/app.router.js');

// Config dotenv
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', appRouter);

// Error handling middleware
app.use(errorHandler);

module.exports = app;