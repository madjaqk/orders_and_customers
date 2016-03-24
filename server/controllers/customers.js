var mongoose = require("mongoose")
var Customer = mongoose.model("Customer")

module.exports = (function(){
	return {
		index: function(req,res){
			Customer.find({}, function(err, results){
				if(err) {
					console.log(err)
				} else {
					res.json(results)
				}
			})
		},

		create: function(req, res){
			var customer = new Customer(req.body)
			customer.save(function(err){
				if(err){
					console.log(err.errmsg)
					output = [{name: err.errmsg, error: true}]
					res.json(output)
				} else {
					res.redirect("/customers/index")
				}
			})
		},

		destroy: function(req, res){
			Customer.find({_id: req.params.id}).remove(function(err){ res.json({}) })
		},
	}
})()