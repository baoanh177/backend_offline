"use strict"
require("dotenv").config()
const { resetPassword } = require("./templaces")
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PATH,
    },
})

module.exports = async (to, subject, {name, resetUrl}) => {
    const info = await transporter.sendMail({
        from: `"Bao Anh 👻" <${process.env.AUTH_EMAIL}>`, // sender address
        to, // list of receivers
        subject, // Subject line
        html: resetPassword(name, resetUrl), // html body
    })
    return info
}