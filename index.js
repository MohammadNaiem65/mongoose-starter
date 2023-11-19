const express = require('express');
const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
	res.render('pages/about', { name: 'Naiem' });
});

app.listen(PORT);
