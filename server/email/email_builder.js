'use strict'
const _          = require('lodash')
const fs         = require('fs')
const path       = require('path')
const handlebars = require('handlebars')
const Promise    = require('bluebird')
const config     = require('../config/config')
const sendEmail  = require('./email_sender')
const TEMPLATE   = path.resolve('server/email/template.html')

function buildMessageBody(form) {
  return new Promise(function(resolve, reject) {

    form.message = form.message || ''
    form.message = form.message.replace('\n', '<br/>')

    fs.readFile(TEMPLATE, 'utf-8', function(err, source) {
      if (err) return reject(err)
      const template = handlebars.compile(source)
      const data     = _.assign(form, { MDP_SITE_PATH:config.MDP_SITE_PATH })
      const result   = { form:form, body:template(data) }
      resolve(result)
    })

  })
}

function buildMessage(data) {
  return new Promise(function(resolve) {

    const result = {
      subject : 'RecruitML - Form Submission ' + (data.form.type || ''),
      html    :  data.body
    }

    resolve(result)
  })
}

function processAndSendEmail(data) {
  return buildMessageBody(data)
  .then (buildMessage)
  .then (sendEmail)
}

module.exports = processAndSendEmail
