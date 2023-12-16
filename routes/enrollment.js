// Importing modules
const express = require('express')
const path = require('path');

// Importing Models
const Enrollment = require("./../models/Enrollment");

// Router
const router = express.Router();

router.post("/", async (req, res) => {
  const username = req.session.user.username;
  console.log(username);
  const courseId = req.body.courseId;
  const enrolledCourse = Enrollment({
    username: username,
    course: courseId,
  });
  const response = await enrolledCourse.save();


  res.redirect(`/courses/${courseId}`);
});


module.exports = router;