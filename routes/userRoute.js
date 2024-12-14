const express = require("express");
const router = express.Router();

//register router
router.post("/register", (req, res) => {
  res.send("resgister user");
});

//login user
router.post("/login", (req, res) => {
  res.send("login user");
});

//check user
router.get("/check", (req, res) => {
  res.send("check user");
});

module.exports = router;
