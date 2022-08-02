const database = require("./database");

module.exports = {
  lecturersList: async function (req, res, next) {
    const sql = "SELECT * FROM lecturers";

    try {
      const result = await database.getConnection(sql);
      res.set("Access-Control-Allow-Origin", "*");
      res.json(result[0]);
    } catch (err) {
      console.log(err);
    }
  },
};
