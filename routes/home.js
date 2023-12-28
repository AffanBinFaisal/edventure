// Importing modules
const express = require('express')
const path = require('path');

// Importing Models
const Course = require("./../models/Course");
const Enrollment = require("./../models/Enrollment");

// Router
const router = express.Router();

router.get("/", async (req, res) => {
  const username = req.session.user.username;
  const enrolledCourses = await Enrollment.find({ username: username }).populate('course');
  console.log(enrolledCourses);
  res.render("home", { enrolledCourses });
})

module.exports = router;