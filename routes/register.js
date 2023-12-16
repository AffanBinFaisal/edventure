const express = require('express')
const path = require('path');

const User = require("./../models/User");

const router = express.Router()

router.get("/", (req, res) => {
  res.render("register");
});

router.post("/", async (req, res) => {
  const user = new User({ username: req.body.username, password: req.body.password });
  const response = await user.save();
  //console.log(response);
  //res.status(200).end();
  res.redirect("/dashboard");
});
module.exports = router;