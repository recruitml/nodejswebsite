'use strict'

const CONFIG = {
//EMAIL ----------------------------------------------------------------------------------------------------
  MDP_MAIL_SMTP      : '10.0.0.15',
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
  CAPTCHA_SECRET_KEY : '6LeU_g4TAAAAAAufHVwV0DZno4aaVjVhf4_q_nV_'
}

// TODO: REMOVE!!!
CONFIG.MDP_EMAIL_TO = 'syncat@gmail.com'
CONFIG.email.auth   = { user:'MariahVux@gmail.com', pass:'z_83@6GHj(@*#' } 

module.exports = CONFIG
