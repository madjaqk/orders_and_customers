var customers = require("./../controllers/customers.js")
var products = require("./../controllers/products.js")
var orders = require("./../controllers/orders.js")

module.exports = function(app){
	app.get("/customers/index", function(req, res){
		customers.index(req, res)
	})

	app.post("/customers/create", function(req, res){
		customers.create(req, res)
	})

	app.delete("/customers/:id", function(req, res){
		customers.destroy(req, res)
	})

	app.get("/products/index", function(req, res){
		products.index(req, res)
	})

	app.get("/orders/index", function(req, res){
		orders.index(req, res)
	})

	app.post("/orders/create", function(req, res){
		orders.create(req, res)
	})
}
