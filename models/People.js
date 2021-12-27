const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
	name: { type: String, required: true },
	age: Number,
	email: { type: String, unique: true, required: true },
	favouriteFood: [String],
});
module.exports = mongoose.model('People', PersonSchema);
