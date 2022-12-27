const eventEmitter = require("./eventEmitter");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
module.exports = () => {
  eventEmitter.on("send_email", async (emailData) => {
    let transporter = nodemailer.createTransport(
      smtpTransport({
        service: process.env.EMAIL_SERVICE,
        host: process.env.EMAIL_HOST,
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER, // generated ethereal user
          pass: process.env.EMAIL_PASSWORD, // generated ethereal password
        },
        requireTLS: true,
      })
    );
    let info = await transporter.sendMail({
      from: process.env.EMAIL_FROM, // sender address
      ...emailData,
    });

    process.stdin.resume();
  });
};
