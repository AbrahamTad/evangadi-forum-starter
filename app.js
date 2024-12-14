const express = require("express");
const app = express();
const port = 5500;

// Import routes
const userRoutes = require("./routes/userRoute");
const questionRoutes = require("./routes/questionRoute");
const answerRoutes = require("./routes/answerRoute");

// User routes middleware
app.use("/api/user", userRoutes);

// Question routes middleware
// app.use("/api/question", questionRoutes);

// Answer routes middleware
// app.use("/api/answer", answerRoutes);

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.log("Error:", err.message);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});
