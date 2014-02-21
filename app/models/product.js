var mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
	item : String,
	description : String
});