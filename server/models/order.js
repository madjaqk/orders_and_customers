// Order model

var mongoose = require("mongoose")

var OrderSchema = new mongoose.Schema(
	{
		quantity: {type: Number, required: true},
		_customer: {type: String, ref: "Customer", required: true},
		_product: {type: String, ref: "Product", required: true}
	}
)

mongoose.model("Order", OrderSchema)