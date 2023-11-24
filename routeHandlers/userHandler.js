const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

// login route
router.post('/login', async (req, res) => {
	try {
		const userList = await User.find({ username: 'চুলতানা' });

		if (userList[0]) {
			const isValidUser = await bcrypt.compare(
				req.body.password,
				userList[0].password
			);

			if (isValidUser) {
				// generate access token
				const token = jwt.sign(
					{
						username: userList[0].username,
						userId: userList[0]._id,
					},
					process.env.JWT_SIGN,
					{ expiresIn: '1h' }
				);
				res.send({ access_token: token, message: 'Login successful.' });
			} else {
				res.status(401).json({ error: 'Authentication failed.' });
			}
		} else {
			res.status(401).json({ error: 'Authentication failed.' });
		}
	} catch {
		res.status(401).json({ error: 'Authentication failed.' });
	}
});

module.exports = router;
