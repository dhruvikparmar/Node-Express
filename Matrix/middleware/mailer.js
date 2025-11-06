const nodeMailer = require('nodemailer');

const transport = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dhruvikparmar1008@gmail.com',
        pass: 'zheslhdvcolcgcee'
    }
})
module.exports.sendOTP = (to, otp) => {
    let mailoptions = {
        from: "dhruvikparmar1008@gmail.com",
        to: to,
        subject: "forgot pasword otp",
        text: `your otp is ${otp}`
    }
    transport.sendMail(mailoptions)
}