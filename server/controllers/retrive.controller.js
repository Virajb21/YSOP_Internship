const client = require('../models/database.js');

const retrive = async(req,res) => {
    try {
        let city = Object.keys(req.body);
        // city = "'" + city[0] + "'"
        // console.log(city);
		const getSpecific = await client.query("SELECT * FROM weather where city_name=$1",[city[0]]);
        console.log(getSpecific);
        res.send(getSpecific.rows);
    } catch (err) {
        return res.status(400).json(error.message);
    }
}
module.exports = retrive;