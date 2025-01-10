const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const extendResponseMethods = require('./shared/middleware/extend-response.middleware.js');
const errorHandler = require('./shared/middleware/error-handler.middleware.js');
const appRouter = require('./shared/router/app.router.js');

// Config dotenv
dotenv.config();

const app = express();

// Middleware
app.use(extendResponseMethods)
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => { res.send("Welcome to the Bus Ticket Booking API") });

app.use('/api', appRouter);

// Error handling middleware
app.use(errorHandler);

module.exports = app;