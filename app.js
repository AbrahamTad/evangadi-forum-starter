const express = require("express");
const app = express();
const port = 5500;

//db connection
const dbConnection = require("./db/dbConfig");

// Import routes
const userRoutes = require("./routes/userRoute");
// const questionRoutes = require("./routes/questionRoute");
// const answerRoutes = require("./routes/answerRoute");

//json middleware to extract Json data
app.use(express.json());

// User routes middleware
app.use("/api/user", userRoutes);

// Question routes middleware
// app.use("/api/question", questionRoutes);

// Answer routes middleware
// app.use("/api/answer", answerRoutes);

async function Start() {
  try {
    const result = await dbConnection.execute("select 'test' ")
    await app.listen(port)
    console.log("database connection established successfully!  ")
    console.log(`Server running on port ${port}`)
  } catch (error) {
    console.log(error.message);
  }
}
Start();


