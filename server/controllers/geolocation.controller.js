const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const CircularJSON = require('circular-json');
dotenv.config();
const KEY = process.env.API_KEY


const geolocation = async(req,res) => {
     let cityName = Object.keys(req.body);
     console.log(cityName);
     try {
        const data = await axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}&units=metric`);
        const obj=CircularJSON.stringify(data);
        res.send(obj);
     }
     catch (err){
        console.log(`this is the city name ${cityName} and err is ${err}`);
     }
}

module.exports = geolocation;