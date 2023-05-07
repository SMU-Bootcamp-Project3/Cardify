const { Schema } = require('mongoose');
// const mongoose = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `saveCards` array in User.js
const cardSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  cardId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = cardSchema;
