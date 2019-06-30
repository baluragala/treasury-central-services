var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/stats", function(req, res, next) {
  res.json({ users: 0 });
});

module.exports = router;
