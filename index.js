const express = require('express');
const adminRouter = require('./adminRouter');
const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
	res.render('pages/about', { name: 'Naiem' });
});

app.use('/admin', adminRouter);

app.listen(PORT);
