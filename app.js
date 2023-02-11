require("dotenv").config();
const express = require("express");
const app = express();
require("./db/config");
const post = 8080;
const defaultData = require("./defaultData");
const router = require("./router");
let cors = require("cors");
const User = require("./models/userSchema");
app.use(cors());
app.use(router);
app.use(express.json());
// app.use(express.json());
app.listen(post, () => {
  console.log(`Server running on Post number ==> ${post}`);
});

defaultData();

app.post("/register", async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    const preuser = await User.findOne({ email: email });
    if (preuser) {
      res.status(422).json({ error: "This email is already exist" });
    } else {
      const dataInsert = new User(req.body);
      const show = await dataInsert.save();
      console.log(show, "===>");
      res.status(200).json(show);
    }
  } catch (error) {}
});
