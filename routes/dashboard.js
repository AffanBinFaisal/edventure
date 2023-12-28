// Importing modules
const express = require('express')
const path = require('path');

// Importing Models
const Course = require("./../models/Course");
const Enrollment = require("./../models/Enrollment");

// Router
const router = express.Router();

router.get("/learning", async (req, res) => {
  const username = req.session.user.username;
  const enrolledCourses = await Enrollment.find({ username: username }).populate('course');
  console.log(enrolledCourses);
  res.render("studentDashboard", { enrolledCourses });
})

router.get("/teaching", async (req, res) => {
  const username = req.session.user.username;
  const courses = await Course.find({ author: username });
  console.log(courses);
  res.render("teacherDashboard", { courses });
})

module.exports = router;