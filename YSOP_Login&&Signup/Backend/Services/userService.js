const dbCon=require('../config/dbConfig')
const bcrypt=require('bcryptjs')
const randomstring = require('randomstring');
const sendMail = require('../helpers/sendMail');

const checkPassword=async(data,req,res)=>{
if(data.length>0){
// if(data[0].password==req.password){
    //if(await bcrypt.compare(req.password,data[0].password))
     if (await data[0].password === req.password){
       res.json({
         status: 200,
         message: "Login success",
       });
     } else {
       res.json({
         status: 400,
         message: "password not matched",
       });
     }
}
}
const checkToken = async (data, req, res) => {
  if (data.length > 0) {
    // if(data[0].password==req.password){
    //if(await bcrypt.compare(req.password,data[0].password))
    if ((await data[0].token) === req.token) {
      res.json({
        status: 200,
        message: "Login success",
      });
    } else {
      res.json({
        status: 400,
        message: "token not matched",
      });
    }
  }
};

const userLogin=async(req,res)=>{
    const {email,password}=req.body;
    const sqlQuery=`select * from users where email='${email}'`;
    const sqlQuery1=`select * from users where username='${email}'`;
    await dbCon.query(sqlQuery,async(error,data)=>{
        try{
            if(data.length===0){
                await dbCon.query(sqlQuery1,async(error,data1)=>{
                    if(data1.length===0){
                        res.json({
                            status:400,
                            message:'User not exist'
                        })
                    }else{
                        checkPassword(data1,req.body,res) 
                    }
                })
                
            }
            if(data.length>0){
                console.log('second',req.body)
checkPassword(data,req.body,res)
            }
        }catch(error){
            console.log(error)
res.json({
    message:error
})
        }
    })
}

const userSignup=async(req,res)=>{
const {username,email,password}=req.body;
//const salt=await bcrypt.genSalt(10);
//const hashpwd=await bcrypt.hash(password,salt)
const values=[username,email,password]
console.log(req.body.email);

const sqlQuery=`select * from users where email='${email}'`;
const sqlQuery1=`insert into users(username,email,password) values(?)`

await dbCon.query(sqlQuery,async(error,data)=>{
    try {
        
        if(data.length>0){
            res.json({
                status:400,
                message:'User already exist'
            })
        }
        if(data.length===0){
            await dbCon.query(sqlQuery1,[values],(error,data1)=>{
                if(data1){
                    res.json({
                        status:200,
                        data:data1,
                        message:`Sucessfully ${username} Registred`
                    })
                  let mailsub = 'Mail Verification';
                    const randomToken = randomstring.generate();
                    let content =
                      '<p> Hello! '+req.body.username+' hope you are doing well this is a sample verification email ,  please <a href = "http://localhost:4000/mail-verification?token='+randomToken+'"> Verify</a> your Mail';
                      sendMail(req.body.email,mailsub,content)
                      dbCon.query(
                        `UPDATE users set token =? where email=?`,
                        [randomToken,req.body.email],
                        function (err, res) {
                          if (err) {
                            return res.status(400).send({
                              msg: error,
                            });
                          }
                        }
                      );
                }else{
                    res.json({
                        status:400,
                        message:error
                    })
                }
            })
            
        }
    } catch (error) {
        res.json({
            status:400,
            message:error
        })
    }
})

}
const userToken = async (req, res) => {
  const { email, token } = req.body;
  const sqlQuery = `select * from users where email='${email}'`;
  const sqlQuery1 = `select * from users where username='${email}'`;
  await dbCon.query(sqlQuery, async (error, data) => {
    try {
      if (data.length === 0) {
        await dbCon.query(sqlQuery1, async (error, data1) => {
          if (data1.length === 0) {
            res.json({
              status: 400,
              message: "User not exist",
            });
          } else {
            checkToken(data1, req.body, res);
          }
        });
      }
      if (data.length > 0) {
        console.log("second", req.body);
        checkToken(data, req.body, res);
      }
    } catch (error) {
      console.log(error);
      res.json({
        message: error,
      });
    }
  });
};






module.exports={userLogin,userSignup,userToken}