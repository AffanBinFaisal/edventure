const express = require('express')
const path = require('path');

const User = require("./../models/User");

const router = express.Router()

router.get("/", (req, res) => {
  res.render("register");
});

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username: username, password: password });
  const response = await user.save();
  //console.log(response);
  //res.status(200).end();
  req.session.user = { username, password };
  res.redirect("/home");
});
module.exports = router;