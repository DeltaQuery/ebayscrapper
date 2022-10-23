const nodemailer = require("nodemailer")
require('dotenv').config()

async function sendMail() {
    //let testAccount = await nodemailer.createTestAccount()

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    })

    let info = await transporter.sendMail({
        from: `"Carlos" ${process.env.USER}`,
        to: process.env.RECEIVER,
        subject: "Spikes 1001 disponible en Ebay",
        text: "Posiblemente acaban de listar un Spikes 1001 en Ebay. Anda a revisar.",
        html: "<b>Spikes 1001 disponible!!!</b>"
    })

    console.log("Message sent: %s", info.messageId)
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
}

module.exports = { sendMail }