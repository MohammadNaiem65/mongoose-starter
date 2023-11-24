const express = require('express');
const mongoose = require('mongoose');
const todoSchema = require('../schemas/todoSchema');
const checkLogin = require('../middlewares/checkLogin');

const router = express.Router();
const Todo = new mongoose.model('Todo', todoSchema);

// get all the todos
router.get('/', checkLogin, async (req, res, next) => {
	console.log(req.username, req.userId);
	res.send('hello');
});

// get active todos
router.get('/active', checkLogin, async (req, res) => {
	const todo = new Todo();
	console.log('object');

	const result = await todo.findActiveTodos();
	res.send(result);

	todo.findActiveTodos((err, todos) => {
		if (err) {
			res.status(500).send(err.message);
		} else {
			res.send(todos);
		}
	});
});

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

router.get('/search', async (req, res) => {
	const result = await Todo.where;
});

// get single todo
router.get('/:id', async (req, res) => {});

// update single todo
router.put('/:id', async (req, res) => {});

module.exports = router;
