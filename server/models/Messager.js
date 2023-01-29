const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessagerSchema = mongoose.Schema({
	content: {
		type: String,
		required: true,
	},
	author: { type: String },
	like: {
		type: Number,
		default: 0,
	},
	tableId: { type: String },
	createdAt: {
		type: Date,
		default: Date.now(),
	},
})

module.exports = mongoose.model('messagers', MessagerSchema)
