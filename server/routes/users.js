var express = require("express");
var router = express.Router();
const connection = require("../config/db.js");

/* GET users listing. */
// /api/users

router.get("/", function (req, res, next) {
  connection.query("SELECT * from user", (error, rows) => {
    if (error) throw error;
    console.log("User info is: ", rows);
    res.send(rows);
  });
});

module.exports = router;
