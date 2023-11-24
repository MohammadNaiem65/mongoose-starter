const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userHandler = require('./routeHandlers/userHandler');
const todoHandler = require('./routeHandlers/todoHandler');
const PORT = 3000;

const app = express();
app.use(express.json());

mongoose
	.connect(
		`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.mubo8fr.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => console.log('Connected'))
	.catch((err) => console.log(err));

// application routes
app.use('/todo', todoHandler);
app.use('/user', userHandler);

// handle error
function errorHandler(err, req, res, next) {
	if (res.headersSent) {
		return next(err);
	}

	res.status(500).json({ error: err });
}

app.listen(PORT);
