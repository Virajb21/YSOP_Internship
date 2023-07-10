const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const geolocationRouter = require('./routes/geolocation.router.js')
const uploadRouter = require('./routes/upload.router.js');
const retriveRouter = require('./routes/retrive.router.js');
const userRouter = require('./routes/user.route.js');
const adminRouter = require('./routes/admin.route.js');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/',(req,res) => {
//     res.send('hellow world');
// })
app.use('/',geolocationRouter);
app.use('/',uploadRouter);
app.use('/',retriveRouter);
app.use('/user',userRouter);
app.use('/admin',adminRouter);

app.listen(PORT,() => {
    console.log('listening on port ' + PORT);
})