const nodemailer = require('nodemailer');
const {SMTP_MAIL , SMTP_PASSWORD} = process.env;
const sendMail = async(email , mailsub , content)=>{
    try{
          const transport =  nodemailer.createTransport({
                 host:'smtp.gmail.com',
                 port:587,
                 secure:false,
                 requireTLS:true,
                 auth:{
                    user:SMTP_MAIL,
                    pass:SMTP_PASSWORD,
                    
                 }
           });
    const mailOptions = {
        from:SMTP_MAIL,
        to:email,
        subject:mailsub,
        html:content
    }
  
transport.sendMail(mailOptions,function(err,info){
 if(err){
    console.log(err);

 }
 else{
    console.log('Mail sent Successfully:-',info.response);
 }
});
    }
    catch(err){
        console.log(err.message)
    }
}
module.exports =  sendMail;