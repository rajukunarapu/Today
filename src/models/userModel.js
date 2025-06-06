const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
  emailId: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (value) => {
        validator.isEmail(value);
      },
      message: `{VALUE} is not a valid email`,
    },
  },

  password: {
    type: String,
    required: true,
    select: false,  // Document doesn't return the password field
    validate: {
      validator: (value) => {
        validator.isStrongPassword(value)
      },
      message: `{VALUE} is not a strong password`
    }

  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other"],
      message: "{VALUE} is not a valid gender"
    }
  },
  age: {
    type: String
  }
},
  {
    timestamps: true
  });

userSchema.methods.generateToken = async function () {
  const token = await jwt.sign({ _id: this._id }, `${process.env.JWT_SECRET_KEY}`, { expiresIn: '1d' })
  return token
}

const User = mongoose.model('user', userSchema)
module.exports = { User }
