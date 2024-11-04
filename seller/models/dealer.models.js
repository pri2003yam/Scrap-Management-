const mongoose = require('mongoose');

const dealerSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true 
    },
    name: {
      type: String,
      requird: true,
    },
    email: {
      type: String,
      requird: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      requird: true,
    },
    number: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Dealer = mongoose.model('Dealer', dealerSchema);

module.exports = Dealer;