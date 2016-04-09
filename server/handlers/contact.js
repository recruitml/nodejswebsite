'use strict'
const CONFIG = require('../config/config')

function contactsHandler(req, res) {
  const data = { CAPTCHA_SITE_KEY   : CONFIG.CAPTCHA_SITE_KEY,
                 CAPTCHA_SECRET_KEY : CONFIG.CAPTCHA_SECRET_KEY }

  return res.view('contact', data)
}

module.exports = contactsHandler