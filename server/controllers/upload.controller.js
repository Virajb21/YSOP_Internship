const client = require('../models/database.js');

const uploadData = async(req,res) => {
    try {
        const result = await client.query(
          "INSERT INTO weather (city_name, weather_main, weather_description, temp_min, temp_max, feels_like, humidity, pressure, icon) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *",
          [
            req.body.name,
            req.body.weather[0].main,
            req.body.weather[0].description,
            req.body.main.temp_min,
            req.body.main.temp_max,
            req.body.main.feels_like,
            req.body.main.humidity,
            req.body.main.pressure,
            req.body.weather[0].icon,
          ]
        );
        res.send({
          msg: `weather data successfully inserted`,
          weather_data: result.rows[0],
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({ msg: error.detail });
      }
}
module.exports = uploadData;