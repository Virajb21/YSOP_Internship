const client = require('./models/database.js');
const jwt = require('jsonwebtoken');

const generateAdminToken = async (adminId) => {
    console.log(adminId);
    try {
      const timestamp = new Date();
      const token = jwt.sign({ id: adminId }, process.env.TOKEN_SECRET);
      let tokenRecord = "insert into admin_token(token, created_at, updated_at, fk_admin) VALUES ($1, $2, $3, $4)";
      let tokenValues = [token, timestamp, timestamp, adminId];
      await client.query(tokenRecord, tokenValues);
      return token;
    } catch (err) {
      throw new Error(err);
    }
};
  
module.exports = generateAdminToken;