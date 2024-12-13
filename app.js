const express = require("express");
const app = express();
const port = 5500;


// // This is a GET route for the root URL ("/")
// app.get("/",(req, res) => {
//     res.send("Welcome to my API!");
// })

//register router
app.post("/api/user/register", (req, res) => {
  res.send("resgister user")});

//login user
app.post("/api/user/login", (req, res) => {
  res.send("login user");
});

//check user 
app.get("/api/user/check", (req, res) => {
  res.send("check user");
});


app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`listening on port ${port}`);
  }
});
