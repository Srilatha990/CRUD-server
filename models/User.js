const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    description: { type: String },
});

module.exports = mongoose.model('User', userSchema);
