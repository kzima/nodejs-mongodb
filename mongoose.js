var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  	console.log('connected to mongoDB');

	var productsSchema = mongoose.Schema({
		name: String,
		description: String
	});

	var productModel = mongoose.model('products', productsSchema);

	productModel.find(function(err, products){
		if (err) console.log('error' + err);
		console.log(products);
	});

});