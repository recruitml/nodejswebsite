'use strict'

const CONFIG = {
//EMAIL ----------------------------------------------------------------------------------------------------
  MDP_MAIL_SMTP      : '10.0.0.15',
  MDP_EMAIL_TO       : 'patrick@recruitml.com',
  MDP_EMAIL_FROM     : 'noreply@recruitml.com',
  email              : { host   : 'smtp.gmail.com',
                         port   :  465,
                         secure :  true,
                         auth   :  { user:'patrick.t.reilly@gmail.com', pass:'gloqgbvgkwjkcgyn' }},
//SITE -----------------------------------------------------------------------------------------------------
  MDP_SITE_PATH      : 'http://recruitml.com',
//CAPTCHA --------------------------------------------------------------------------------------------------
  CAPTCHA_SITE_KEY   : '6LeWKxwTAAAAAMS_tGAgNJDeM1U-K_tzrqFXM1FP',
  CAPTCHA_SECRET_KEY : '6LeWKxwTAAAAAMQvTVGLunneksKQty4QOq1o22O9'
}

module.exports = CONFIG
