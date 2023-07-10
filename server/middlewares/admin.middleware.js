const client = require("../models/database.js");

exports.validateAdminData = (req, res, next) => {
  if (Object.values(req.body).length < 2){
    return res.status(400).json({ error: "One or more field missing" });
  }
  for (let value of Object.values(req.body)) {
    if (!value) {
      return res.status(400).json({ error: "Field Empty" });
    }
  }
  const { email, password } = req.body;
  if (validateEmail(email) && validatePassword(password)) next();
  else res.status(400).json({ error: "Invalid Details" });
};

exports.isAuthenticated = async (req, res, next) => {
  try {
    let query = "select * from admin_token where token = $1";
    const token = req.header("Authorization").replace("Bearer ", "");
    let params = [token];
    console.log(params);
    const data = await client.query(query, params);
    console.log(data);
    if (data.rowCount < 1) {
      return res.status(401).json({ error: "Unauthorized admin!" });
    }
    const adminId = data.rows[0].fk_admin;
    query =
      "SELECT id, email from admin where id = $1";
    params = [adminId];
    const result = await client.query(query, params);
    if (result.rowCount < 1) {
      return res.status(401).json({ error: "Unauthorized admin!" });
    }
    req.admin = result.rows[0];
    req.token = token;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized admin!" });
  }
};

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true;
  return false;
}

function validatePassword(password) {
  if (password.length >= 8) return true;
  return false;
}
