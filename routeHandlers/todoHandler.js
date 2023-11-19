const express = require('express');

const router = express.Router();

// get all the todos
router.get('/', async (req, res) => {});

// get single todo
router.get('/:todo', async (req, res) => {});

// add multiple todos
router.post('/all', async (req, res) => {});

// add single todo
router.post('/', async (req, res) => {});

// update single todo
router.put('/:id', async (req, res) => {});

module.exports = router;
