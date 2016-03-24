var mongoose = require("mongoose")
var strftime = require("strftime")

var CustomerSchema = new mongoose.Schema(
	{
		name: { type: String, unique: true }, 
		createdAt: { type: Date, default: Date.now },
		createdAtPretty: { type: String, default: strftime("%B %o, %Y")}
	}
)

mongoose.model("Customer", CustomerSchema)