'use strict'

const CONFIG = {
  ENV                : 'DEV',
//EMAIL ----------------------------------------------------------------------------------------------------
  MDP_EMAIL_TO       : 'matt@mediadog.ca',
  MDP_EMAIL_FROM     : 'noreply@recruitml.com',
  email              : { host   : 'smtp.gmail.com',
                         port   :  465,
                         secure :  true,
                         auth   :  { user:'patrick.t.reilly@gmail.com', pass:'gloqgbvgkwjkcgyn' }},
//SITE -----------------------------------------------------------------------------------------------------
  MDP_SITE_PATH      : 'http://recruitml.mdpdev.ca',
//CAPTCHA --------------------------------------------------------------------------------------------------
  CAPTCHA_SITE_KEY   : '6LeU_g4TAAAAAFtncCUAwfcxlCDdWwuRya57pFQs',
  CAPTCHA_SECRET_KEY : '6LeU_g4TAAAAAAufHVwV0DZno4aaVjVhf4_q_nV_',
//HAPI -----------------------------------------------------------------------------------------------------
  HAPI: {
    host             : 'localhost',
    port             :  8080
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
