const express = require('express');

const app = express();

// app.use(express.json());
app.use(express.raw());

app.post('/', (req, res) => {
	// console.log(req.body);
	console.log(req.body.toString());
	res.send('Hello World!');
});

app.listen(3000);
