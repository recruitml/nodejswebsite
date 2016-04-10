'use strict'

const CONFIG = {
  ENV                : 'PROD',
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
  CAPTCHA_SECRET_KEY : '6LeWKxwTAAAAAMQvTVGLunneksKQty4QOq1o22O9',
//HAPI -----------------------------------------------------------------------------------------------------
  HAPI: {
    host             : process.env.OPENSHIFT_NODEJS_IP,
    port             : process.env.OPENSHIFT_NODEJS_PORT || 8080
  }
}

// TODO: REMOVE!!!
CONFIG.MDP_EMAIL_TO = 'syncat@gmail.com'
CONFIG.email.auth   = { user:'MariahVux@gmail.com', pass:'z_83@6GHj(@*#' }

module.exports = CONFIG
