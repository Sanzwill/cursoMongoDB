const { Schema, model } = require('mongoose');

const CustomerSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		company: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = model('Customer', CustomerSchema, 'Customers');
