const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema ({
    _id: Number,
    name: String
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;