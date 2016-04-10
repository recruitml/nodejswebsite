'use strict'

const CONFIG = {
  ENV                : 'PROD',
//EMAIL ----------------------------------------------------------------------------------------------------
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
CONFIG.MDP_EMAIL_FROM = 'Maria.Shlemkih@yahoo.com'
CONFIG.MDP_EMAIL_TO   = 'syncat@gmail.com'
CONFIG.email          =
{
  host : 'smtp.mail.yahoo.com',
  port   :  465,
  secure :  true,
  auth: {
    user: 'Maria.Shlemkih@yahoo.com',
    pass: 'Hjd29.La$29'
  }
}

module.exports = CONFIG
