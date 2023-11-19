const express = require('express');
const PORT = 3000;

const app = express();
app.use(express.json());

// handle error
function errorHandler(err, req, res, next) {
	if (res.headersSent) {
		return next(err);
	}

	res.status(500).json({ error: err });
}

app.listen(PORT);
