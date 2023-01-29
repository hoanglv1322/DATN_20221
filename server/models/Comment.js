const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = mongoose.Schema({
	content: {
		type: String,
		required: true,
	},
	cardId: { type: String },
	author: { type: String },
	like: {
		type: Number,
		default: 0,
	},
	replys: [{ type: String }],
	createdAt: {
		type: Date,
		default: Date.now(),
	},
})

module.exports = mongoose.model('comments', CommentSchema)
