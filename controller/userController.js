const e = require("express");
const dbConnection = require("../db/dbConfig");
const bcrypt = require("bcrypt");
const { statusCodes } = require("http-status-codes");

async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;
  if (!email || !password || !firstname || !lastname || !username) {
    return res.status(400).json({ msg: "please provide all required fields" });
  }
  try {
    const [user] = await dbConnection.query(
      "SELECT username, userid FROM users WHERE username =? or email =?",
      [username, email]
    );
    if (user.length > 0) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ msg: "username already exists" });
    }
    if (password.length <= 8) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ msg: "Password should be at least 8 characters long" });
    }
    //encrypt the password
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    await dbConnection.query(
      "INSERT INTO users (username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)",
      [username, firstname, lastname, email, hashedPassword]
    );

    return res
      .status(statusCodes.CREATED)
      .json({ msg: "User registed successfully!" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "something went wrong, try again later!" });
  }
}

async function login(req, res) {
  res.send("login");
}

async function checkUser(req, res) {
  res.send("check user");
}

module.exports = { register, login, checkUser };
