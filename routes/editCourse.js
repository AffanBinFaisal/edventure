// Importing modules
const express = require('express')
const path = require('path');
const multer = require("multer");

// Importing Models
const Course = require("./../models/Course");

// Router
const router = express.Router()

// Routes
router.get("/:id", async (req, res) => {
  const user = req.session.user;
  const id = req.params.id;
  const course = await Course.findById(id);
  //console.log(course);
  res.render("editCourse", { course });
})

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory to store uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename files to avoid collisions
  }
});

const upload = multer({ storage: storage });

router.post("/:id", upload.any(), async (req, res) => {
  try {
    const body = req.body;
    const { title, price, chapters } = body;
    const id = req.params.id;
    const files = req.files;
    console.log(files);

    const course = await Course.findById(id);
    console.log(course.chapters[0]);

    course.title = title;
    course.price = price;

    course.chapters = chapters.map((chapter, chapterIndex) => {
      const updatedVideos = files
        .filter((file) => file.fieldname.startsWith(`chapters[${chapterIndex}][videos]`))
        .map((file, videoIndex) => ({
          title: chapter.videos[videoIndex].title,
          url: file.path || course.chapters[chapterIndex].videos[videoIndex].url,
        }));

      return {
        title: chapter.title,
        videos: updatedVideos.length > 0 ? updatedVideos : course.chapters[chapterIndex].videos,
      };
    });

    console.log('Updated chapters:', course.chapters);

    const response = await course.save();
    res.status(200).end();
  } catch (error) {
    console.error('Error during course update:', error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;