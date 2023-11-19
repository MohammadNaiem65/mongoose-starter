const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// app.use(express.json());
app.use(express.raw());
app.use(cookieParser());

app.post('/', (req, res) => {
	// console.log(req.body);
	// console.log(req.body.toString());
	// console.log(app.mountpath);
	console.log(req.cookies);
	res.send('Hello World!');
});

// application methods
const admin = express();
app.use('/admin', admin);

admin.post('/', (req, res) => {
	console.log(req.baseUrl);
	res.send('Success');
});

app.listen(3000);
