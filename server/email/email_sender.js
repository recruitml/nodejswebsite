'use strict'
const nodemailer  = require('nodemailer')
const config      = require('../config/config')
const transporter = nodemailer.createTransport(config.email)
const Promise     = require('bluebird')

function sendEmail(email) {
  return new Promise(function(resolve, reject) {

    transporter.sendMail(buildEmailOptions(email), function(err, info) {
      if(err) return reject(err)
      resolve(info)
    })

  })
}

function buildEmailOptions(email) {
  return {
    from    : config.MDP_EMAIL_FROM,
    to      : config.MDP_EMAIL_TO,
    subject : email.subject,
    html    : email.html
  }
}

module.exports = sendEmail