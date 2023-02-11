const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  password: String,
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  carts: Array,
});

// password hashing
userSchema.pre("save", async function(next){
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});
const User = new mongoose.model("User", userSchema);
console.log("User", User);
module.exports = User;
