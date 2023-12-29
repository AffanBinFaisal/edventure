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

    course.title = title;
    course.price = price;

    course.chapters = chapters.map((chapter, chapterIndex) => {
      const updatedVideos = files
        .filter((file) => file.fieldname.startsWith(`chapters[${chapterIndex}][videos]`))
        .map((file, videoIndex) => ({
          title: Array.isArray(chapter.videos) && chapter.videos[videoIndex] ? chapter.videos[videoIndex].title : "", // Check if chapter.videos is defined and is an array before accessing its elements
          url: file.path || (Array.isArray(course.chapters[chapterIndex].videos) && course.chapters[chapterIndex].videos[videoIndex] ? course.chapters[chapterIndex].videos[videoIndex].url : ""),
        }));


      const oldVideos = (course.chapters && Array.isArray(course.chapters) && course.chapters[chapterIndex] && course.chapters[chapterIndex].videos) ? course.chapters[chapterIndex].videos : null;

      return {
        title: chapter.title,
        videos: (updatedVideos && updatedVideos.length > 0) ? updatedVideos : oldVideos,
      };
    });

    console.log('Updated chapters:', course.chapters);

    const response = await course.save();
    res.redirect("/dashboard/teaching");
  } catch (error) {
    console.error('Error during course update:', error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;