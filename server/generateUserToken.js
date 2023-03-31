const client = require('./models/database.js');
const jwt = require('jsonwebtoken');

const generateUserToken = async (userId) => {
    console.log(userId);
    try {
      const timestamp = new Date();
      const token = jwt.sign({ id: userId }, process.env.TOKEN_SECRET);
      let tokenRecord = "insert into user_token(token, is_valid, created_at, updated_at, fk_user) VALUES ($1, $2, $3, $4, $5)";
      let tokenValues = [token, true, timestamp, timestamp, userId];
      await client.query(tokenRecord, tokenValues);
      return token;
    } catch (err) {
      throw new Error(err);
    }
};
  
module.exports = generateUserToken;