const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CardSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: { type: String },
	columnId: { type: String },
	members: [{ type: String }],
	labels: [{ type: String }],
	background: { type: String },
	deadline: {
		type: Date,
		default: Date.now(),
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
})

module.exports = mongoose.model('cards', CardSchema)
