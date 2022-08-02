const database = require("./database");
const joi = require("joi");
const fileMgmt = require("../shared/fileMgmt");

module.exports = {
  coursesList: async function (req, res, next) {
    const param = req.query;

    const schema = joi.object({
      column: joi.string().valid("name", "price").default("name"),
      sort: joi.string().valid("ASC", "DESC").default("ASC"),
    });

    const { error, value } = schema.validate(param);

    if (error) {
      console.log(error);
      res.status(400).send("add failed");
      return;
    }

    const fieldsMap = new Map([
      ["name", "course_name"],
      ["price", "course_price"],
    ]);
    const sql = `SELECT * FROM courses ORDER BY ${fieldsMap.get(
      value.column
    )} ${value.sort}`;
    try {
      const result = await database.getConnection(sql);
      res.set("Access-Control-Allow-Origin", "*");
      res.json(result[0]);
    } catch (err) {
      console.log(err);
    }
  },
  exportCourses: async function (req, res, next) {
    const sql = "SELECT * FROM courses ORDER BY courses.course_name ASC ";

    fileMgmt.exportToFile(res, sql, "courses");
  },
};
