const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const userSchema = require('../schemas/userSchema');

const router = express.Router();
const User = mongoose.model('User', userSchema);

// Signup route
router.post('/signup', async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		const newUser = new User({
			name: req.body.name,
			username: req.body.username,
			password: hashedPassword,
			status: req.body?.status,
		});

		const result = await newUser.save();
		res.send(result);
	} catch (error) {
		res.status(500).send(
			error.message || 'Something went wrong. Please try again'
		);
	}
});

module.exports = router;
