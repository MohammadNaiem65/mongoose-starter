const express = require('express');
const mongoose = require('mongoose');
const todoSchema = require('../schemas/todoSchema');
const router = express.Router();
const Todo = new mongoose.model('Todo', todoSchema);

// get all the todos
router.get('/', async (req, res, next) => {});

// get single todo
router.get('/:id', async (req, res) => {});

// add multiple todos
router.post('/all', async (req, res) => {
	try {
		const result = await Todo.insertMany(req.body);
		console.log(result);
		res.send(result);
	} catch (err) {
		res.send(err.message);
	}
});

// add single todo
router.post('/', async (req, res) => {
	const newTodo = new Todo(req.body);
	try {
		const result = await newTodo.save();
		res.send(result);
	} catch (error) {
		res.status(500).send(error.message);
	}
});

// update single todo
router.put('/:id', async (req, res) => {});

module.exports = router;
