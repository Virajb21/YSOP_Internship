const {Client} = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    port: process.env.POSTGRES_PORT,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
})
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = client;