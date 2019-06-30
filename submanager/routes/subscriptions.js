const express = require("express");
const router = express.Router();

const subscriptions = [
  {
    id: 1,
    name: "Sub1",
    duration: 30
  }
];

router.get("/", (req, res, next) => {
  res.json(subscriptions);
});

router.get("/:sid", (req, res, next) => {
  let { sid } = req.params;
  let sub = subscriptions.find(s => s.id === parseInt(sid));
  if (!sub) {
    res.sendStatus(404);
  }
  res.json(sub);
});

router.post("/", (req, res, next) => {
  const sub = req.body;
  subscriptions.push(sub);
  res.sendStatus(201);
});
module.exports = router;
