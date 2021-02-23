const express = require('express');
require('dotenv').config(`${__dirname}\\.env`);
const morgan = require('morgan');
const { connectDB } = require('./src/database/database');

// Server
const app = express();

// Content-type
app.use(express.json());

// Middleware
app.use(morgan('dev'));

// Routes
app.use('/api/posts', require('./src/routes/posts'));

// Port listening
app.listen(process.env.PORT, () => {
	console.log(`Listening http://localhost:${process.env.PORT}`);
	connectDB();
});
