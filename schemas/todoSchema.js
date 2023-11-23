const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
	{
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
	}
	// {
	// 	methods: {
	// 		findActiveTodos: function () {
	// 			return mongoose.model('Todo').find({ status: 'active' });
	// 		},
	// 	},
	// }
);

todoSchema.methods = {
	findActiveTodos: function () {
		return mongoose.model('Todo').find({status: 'active'})
	},
};

todoSchema.statics = {
	findActiveTodos: function (keyword) {
		return this.find({ status: 'active' });
	}
}

module.exports = todoSchema;
