// Importing modules
const express = require("express");
const path = require("path");
// const cors = require("cors");
const bodyParser = require("body-parser");
const session = require('express-session');

// Importing routers
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const dashboardRouter = require("./routes/dashboard");
const coursesRouter = require("./routes/courses");
const addCourseRouter = require("./routes/addCourse");
const editCourseRouter = require("./routes/editCourse");
const enrollRouter = require("./routes/enrollment");
const homeRouter = require("./routes/home");
const authenticationMiddleware = require("./middlewares/authenticationMiddleware");

// Initializing app
const app = express();

// Middleware for session
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Set EJS as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/public/assets', express.static(path.join(__dirname, 'public', 'assets')));
app.use('/public/css', express.static(path.join(__dirname, 'public', 'css')));

// Middlewares for routing
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use(authenticationMiddleware);
app.use("/home", homeRouter)
app.use("/dashboard", dashboardRouter);
app.use("/courses", coursesRouter);
app.use("/add-course", addCourseRouter);
app.use("/edit-course", editCourseRouter);
app.use("/enroll", enrollRouter);

// Routes
app.get("/", (req, res) => {
  res.render("index");
})

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, 'views','contact.html'));
})

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, 'views','about.html'));
})

// Server Listening
const port = 5000;
app.listen(port, () => {
  console.log("Server running on port 5000.");
});
