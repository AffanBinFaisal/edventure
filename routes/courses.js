// Importing Modules
const express = require('express')
const path = require('path');

// Importing Models
const Course = require("./../models/Course");
const Enrollment = require("./../models/Enrollment");

// Router
const router = express.Router()

// Routes
router.get("/", async (req, res) => {
  const user = req.session.user;
  const query = req.query;
  const search = query.search;
  const courses = await Course.find({ title: { $regex: search, $options: 'i' } });
  console.log(courses);
  res.render("courses", { courses });
})

router.get("/:id", async (req, res) => {
  const user = req.session.user;
  const username = user.username;
  const id = req.params.id;
  const course = await Course.findById(id);
  const enrollment = await Enrollment.find({ username: username, course: id });
  console.log(enrollment.length);
  console.log(course);
  res.render("course", { course, enrollment });
})

module.exports = router;