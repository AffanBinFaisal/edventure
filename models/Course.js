const mongoose = require("./../db/db");

const videoSchema = new mongoose.Schema({
  title: String,
  content: String,
  url: String,
});

const chapterSchema = new mongoose.Schema({
  title: String,
  content: String,
  videos: [videoSchema],
});

const courseSchema = new mongoose.Schema({
  author: String,
  title: String,
  price: Number,
  description: String,
  thumbnail: String,
  chapters: [chapterSchema]
});

// Create a model
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;