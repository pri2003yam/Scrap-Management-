const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema(
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
    },
    address: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const userModel = mongoose.model('User', userSchema);

module.exports = User