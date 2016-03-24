var mongoose = require("mongoose")
var Product = mongoose.model("Product")

module.exports = (function(){
	return {
		index: function(req,res){
			Product.find({}, function(err, results){
				if(err) {
					console.log(err)
				} else {
					res.json(results)
				}
			})
		},
	}
})()