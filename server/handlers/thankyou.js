'use strict'
const config = require('../config/config')
const email  = require('../email/email_builder')

function signupHandler(req, res) {

  const data = {
    type   : 'type  ',
    name         : 'name        ',
    company_name : 'company_name',
    phone        : 'phone       ',
    email        : 'email       ',
    describes    : 'describes   ',
    message      : '1\n2\n3\nabc\r\nyo'
  }

  return res.view('thankyou', data)
}

module.exports = signupHandler