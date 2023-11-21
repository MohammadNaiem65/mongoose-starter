const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: String,
	status: {
		type: String,
		enum: ['active', 'inactive'],
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	related: {
		type: [mongoose.SchemaTypes.ObjectId],
		ref: 'Todo',
	},
});

module.exports = todoSchema;
