'use strict'
const _         = require('lodash')
const config    = require('../config/config')
const sendEmail = require('../email/email_builder')

function postNoticeHandler(req, res) {
  var   data = { error:null }
  const form = _.cloneDeep(req.payload)
  const type = req.query.type

  _.assign(form, { type:type })

  sendEmail(form)
       .catch(err => {
         data.error  = err
         console.error(err)
       })
       .finally(() => res.view('thankyou', data))
}

module.exports = postNoticeHandler