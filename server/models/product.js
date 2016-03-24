var mongoose = require("mongoose")

var ProductSchema = new mongoose.Schema(
	{
		product: { type: String, unique: true }, 
	}
)

mongoose.model("Product", ProductSchema)