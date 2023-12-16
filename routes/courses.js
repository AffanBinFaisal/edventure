// Importing Modules
const express = require('express')
const path = require('path');

// Importing Models
const Course = require("./../models/Course");

// Router
const router = express.Router()

// Routes
router.get("/", async (req, res) => {
  const user = req.session.user;
  const query = req.query;
  console.log(query);
  const courses = await Course.find();
  console.log(courses);
  res.render("courses", { courses });
})

router.get("/:id", async (req, res) => {
  const user = req.session.user;
  const id = req.params.id;
  const course = await Course.findById(id);
  console.log(course);
  res.render("course", { course });
})

module.exports = router;