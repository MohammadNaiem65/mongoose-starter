const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require('./routeHandlers/todoHandler');
const PORT = 3000;

const app = express();
app.use(express.json());

mongoose
	.connect(
		'mongodb+srv://mohammadnaiem:wANWCZjjCJ2bQDmR@cluster0.mubo8fr.mongodb.net/?retryWrites=true&w=majority'
	)
	.then(() => {
		console.log('Connection established');
	})
	.catch((err) => console.log(err));

// application routes
app.use('/todo', todoHandler);

// handle error
function errorHandler(err, req, res, next) {
	if (res.headersSent) {
		return next(err);
	}

	res.status(500).json({ error: err });
}

app.listen(PORT);
