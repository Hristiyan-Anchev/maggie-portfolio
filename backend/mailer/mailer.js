const nodemailer = require("nodemailer");
const mailUser = process.env.MAIL_USER;
const mailPasswd = process.env.MAIL_PASSWD;


// server email
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: mailUser,
        pass: "hloifeemcddzaeuf"
    }
});




module.exports = {
    sendMessage:(name,email,subject,message)=>{
        const mailOptions = {
            from: `"${name}" <${email}>`,
            // your daily driver email goes here
            to: 'ogi.61@abv.bg',
            subject: subject,
            text: message,
            html: `You have a new message from <strong>${name}</strong> <br/> ----- <br/> <pre>${message}</pre> <br/> ----- <br/> reply to :::  <strong style="font-size: 2rem">${email}</strong>`
        };

        transporter.sendMail(mailOptions, (err,info)=>{
            if(err){
                return console.log(err);
            }
            console.log("message sent", info.messageId);
        });
    }
}




