const eventEmitter = require("./eventEmitter")
const nodemailer = require ("nodemailer")
const smtpTransport = require("nodemailer-smtp-transport");
module.exports = () => {

  
    eventEmitter.on("send_email", async (emailData) => {
      // console.log(emailData)
        let transporter = nodemailer.createTransport(
          smtpTransport({
          service:process.env.EMAIL_SERVICE,
          host:process.env.EMAIL_HOST,
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.EMAIL_USER, // generated ethereal user
            pass:process.env.EMAIL_PASSWORD// generated ethereal password
          },
          requireTLS: true
          })
          );
          // console.log("email DAta bilgiler", emailData)
          let info = await transporter.sendMail({
            from: process.env.EMAIL_FROM, // sender address
            ...emailData
            
          });


          
  // console.log("kod 20. satır",info.messageId);
  // console.log("Message sent: %s",info.messageId);
  process.stdin.resume();
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("kod 25. satır", nodemailer.getTestMessageUrl(info));
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
    
    
} 

