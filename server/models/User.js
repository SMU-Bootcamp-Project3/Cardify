const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
// const cardSchema = require('./Card');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
  },
  savedCards: [
    // cardSchema,
    {
      type: Schema.Types.ObjectId,
      ref: 'Card',
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Added cardCount by checking how long savedCards is
userSchema.virtual('cardCount').get(function(){
  return this.savedCards.length
});
const User = model('User', userSchema);

module.exports = User;
