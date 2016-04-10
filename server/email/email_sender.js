'use strict'
const util        = require('util')
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
  const opts = {
    from    : config.MDP_EMAIL_FROM,
    to      : config.MDP_EMAIL_TO,
    subject : email.subject,
    html    : email.html
  }

  console.log()
  console.log('Using opts for email:')
  console.log(util.inspect(config.email, false, null))
  console.log(util.inspect(opts,         false, null))
  console.log()
  
  return opts
}

module.exports = sendEmail