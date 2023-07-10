const client = require("../models/database.js");
const bcrypt = require("bcryptjs");
const generateAdminToken = require("../generateAdminToken.js");
const jwt = require("jsonwebtoken");


exports.getLoggedInAdmin = async (req, res) => {
    res.send({ admin: req.admin });
};

exports.signAdminUp = async (req, res) => {
  
  text =
    "insert INTO admin(email,password) VALUES ($1, $2) RETURNING *";
  const encryptedPassword = await bcrypt.hash(req.body.password, 10);
  values = [
    req.body.email.toLowerCase(),
    encryptedPassword,
  ];
  try {
    const data = await client.query(text, values);
    const token = await generateAdminToken(data.rows[0].id);
    res.json({ token: token, admin: { ...data.rows[0] } });
  } catch (err) {
    console.log(err)
    const duplicateError = err.message.split(" ").pop().replaceAll('"', '');
    if (duplicateError === "admin_email_key") {
      res.status(409).json({error: "Admin with this email already exists"});
    }
    else{
      res.status(500).json({ error: "Internal Server Error" })
    }
  }
};

exports.signAdminIn = async (req, res) => {
    text = "select * from admin where email = $1";
    values = [req.body?.email?.toLowerCase()];
    try {
      const data = await client.query(text, values);
      if (data.rowCount === 1) {
        const auth = await bcrypt.compare(
          req.body.password,
          data.rows[0].password
        );
        if (auth) {
          const token = await generateAdminToken(data.rows[0].id);
          const admin = data.rows[0];
          delete admin.password;
          return res.status(200).json({
            token,
            admin
          });
        } else {
          return res
            .status(403)
            .json({ error: "email and password does not match" });
        }
      } else {
        return res.status(404).json({ error: "No admin Found" });
      }
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: "Internal Server Error." });
    }
};

exports.logAdminOut = async (req, res) => {
    try {
      const query = "delete from admin_token where token = $1";
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

exports.getAllUsers = async (req,res) => {
      try {
         const query = "select id,username,email,status from users";
         const data = await client.query(query);
         const users = data.rows;
         if (data.rowCount >= 1) {
          return res.status(200).json(users);
        } else {
          return res.status(500).json("not enough rows in the table");
        }
      } catch(err) {
            res.status(500).json({ error: "Internal Server Error" });
      }
}