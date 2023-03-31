const client = require("../models/database.js");
const bcrypt = require("bcryptjs");
const generateUserToken = require("../generateUserToken.js");
const jwt = require("jsonwebtoken");


exports.getLoggedInUser = async (req, res) => {
    res.send({ user: req.user });
};

exports.signUserUp = async (req, res) => {
  
  text =
    "insert INTO users(username,email,password) VALUES ($1, $2, $3) RETURNING *";
  const encryptedPassword = await bcrypt.hash(req.body.password, 10);
  values = [
    req.body.username,
    req.body.email.toLowerCase(),
    encryptedPassword,
  ];
  try {
    const data = await client.query(text, values);
    const token = await generateUserToken(data.rows[0].id);
    res.json({ token: token, user: { ...data.rows[0] } });
  } catch (err) {
    console.log(err)
    const duplicateError = err.message.split(" ").pop().replaceAll('"', '');
    if (duplicateError === "users_email_key") {
      res.status(409).json({error: "User with this email already exists"});
    }
    else{
      res.status(500).json({ error: "Internal Server Error" })
    }
  }
};

exports.signUserIn = async (req, res) => {
    text = "select * from users where email = $1";
    values = [req.body?.email?.toLowerCase()];
    try {
      const data = await client.query(text, values);
      if (data.rowCount === 1) {
        const auth = await bcrypt.compare(
          req.body.password,
          data.rows[0].password
        );
        if (auth) {
          const token = await generateUserToken(data.rows[0].id);
          const user = data.rows[0];
          delete user.password;
          return res.status(200).json({
            token,
            user
          });
        } else {
          return res
            .status(403)
            .json({ error: "email and password does not match" });
        }
      } else {
        return res.status(404).json({ error: "No user Found" });
      }
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: "Internal Server Error." });
    }
};

exports.logUserOut = async (req, res) => {
    try {
      const query = "delete from user_token where token = $1";
      const params = [req.token];
      const data = await client.query(query, params);
      if (data.rowCount === 1) {
        return res.status(200).json({ success: "successfully logged out" });
      } else {
        return res.status(500).json({ error: "Unable to log out" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
};