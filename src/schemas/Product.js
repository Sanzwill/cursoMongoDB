const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoosePaginate');

const ProductSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			uppercase: true,
			trim: true
		},
		stock: {
			type: Number,
			default: 0,
		},
		price: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

ProductSchema.plugin(mongoosePaginate);

module.exports = model('Product', ProductSchema, 'Products');
