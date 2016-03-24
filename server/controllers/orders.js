// Orders controller

var mongoose = require("mongoose")
var Order = mongoose.model("Order")

module.exports = (function(){
	return {
		index: function(req,res){
			Order.find({}).populate("_product").populate("_customer").exec(function(err, results){
				if(err) {
					console.log(err)
				} else {
					res.json(results)
				}
			})
		},

		create: function(req, res){
			var order = new Order(req.body)
			order.save(function(err){
				if(err){
					console.log("Error", err)
					output = [{name: err.errmsg, error: true}]
					res.json(output)
				} else {
					res.json({})
				}
			})
		},
	}
})()