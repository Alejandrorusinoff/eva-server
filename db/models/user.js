const mongoose = require('mongoose')
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: /.+@.+..+/,
    },
    password: {
        type: String,
        required: true,
    },
    date: { 
        type: String, 
        default: new Date().toLocaleDateString(), 
    },
    hour: {
        type: String,
        default: new Date().toLocaleTimeString()
    },
    isAdmin: {
        type: Boolean,
        default: true
    }
});


UserSchema.pre("save", function (next) {
  const user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) return next(saltError);
      else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) return next(hashError);
          user.password = hash;
          next();
        });
      }
    });
  } else return next();
});


const User = mongoose.model('User', UserSchema);

module.exports = User