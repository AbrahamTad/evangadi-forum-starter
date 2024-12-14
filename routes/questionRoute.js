const express = require("express");
const router = express.Router();

// Register a new question
router.post("/register", (req, res) => {
  res.send("Question registered successfully!");
});

// Check if a question exists
router.get("/check", (req, res) => {
  res.send("Checking question...");
});

// Update a question
router.put("/update", (req, res) => {
  res.send("Question updated successfully!");
});

module.exports = router;
