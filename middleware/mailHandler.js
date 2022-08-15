const nodemailer = require("nodemailer");
// make the mailing client and send the mail to the user

// credentials
const mail = process.env.EmailAccount
const password = process.env.EmailPassword

// initialize the account SMTP server 
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, //  SSL: 465 Port for TLS/STARTTLS: 587
    secure: false, // true for 465, false for other ports
    auth: {
        user: mail, // generated ethereal user
        pass: password, // generated ethereal password
    }
})

const sendMailTo = (to, subject, text = "", html = '') => {
    return new Promise((resolve, reject) => {
        // send mail with defined transport object
        transporter.sendMail({
            from: `"GU Event 📅" ${mail}`, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: text, // plain text body
            html: html, // html body
        }, (err, info) => {
            if (err) {
                return reject(err)
            } else {
                console.log("Message sent: %s", info.messageId);
                return resolve(info)
            }
        });
    })
}


// example
// sendMailTo("rishabhjainfinal@gmail.com", 'this sub', 'nothing to right about')
//     .then(console.log)
//     .catch(console.error);

module.exports = {
    sendMailTo
}