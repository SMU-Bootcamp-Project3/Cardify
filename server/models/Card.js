const { Schema } = require('mongoose');
// const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema ({
    cardName: {
        type: String,
        required: true,
        // unique: true,
        trim: true,
    },
    cardTitle: {
        type: String,
        // required: true,
        // unique: true,
        trim: true,
    },
    cardBody: {
        type: String,
        // required: true,
        // unique: true,
        trim: true,
    },
    cardImage: {
      type: String,
      // required: true,
      // unique: true,
      trim: true,
  },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;