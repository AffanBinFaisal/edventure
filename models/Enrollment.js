const mongoose = require("./../db/db");

const enrollmentSchema = new mongoose.Schema({
  username: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
});

// Create a model
const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;