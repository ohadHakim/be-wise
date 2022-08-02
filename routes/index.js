var express = require("express");
var router = express.Router();
const le = require("../controllers/lecturers");
const co = require("../controllers/courses");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/lecturers", le.lecturersList);
router.get("/courses", co.coursesList);
router.get("/courses-export", co.exportCourses);

module.exports = router;
