// Importing modules
const express = require('express')
const path = require('path');
const multer = require("multer");

// Importing Models
const Course = require("./../models/Course");

// Router
const router = express.Router();

// Routes
router.get("/", (req, res) => {
  const user = req.session.user;
  res.render("addCourse");
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const upload = multer({ storage: storage });

router.post("/", upload.single('file'), async (req, res) => {
  const {title, price} = req.body;
  const course = Course({title: title, price: price});
  const response = await course.save();
  const file = req.file;
  const body = req.body;
  console.log(file);
  console.log(body);
  res.status(200).end();
})

module.exports = router;