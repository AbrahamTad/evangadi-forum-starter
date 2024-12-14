const express = require("express");
const router = express.Router();

// Register a new answer
router.post("/register", (req, res) => {
  res.send("Answer registered successfully!");
});

// Check if an answer exists
router.get("/check", (req, res) => {
  res.send("Checking answer...");
});

// Update an answer
router.put("/update", (req, res) => {
  res.send("Answer updated successfully!");
});

module.exports = router;
