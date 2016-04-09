'use strict'
const contactHandler = require('./handlers/contact')
const signupHandler  = require('./handlers/signup')
const postNotice     = require('./handlers/post_notice')

const ROUTES = [
//  PAGES
  { method:'GET', path:'/',                handler:defaultViewHandler('index')      },
  { method:'GET', path:'/candidates.html', handler:defaultViewHandler('candidates') },
  { method:'GET', path:'/contact.html',    handler:contactHandler                   },
  { method:'GET', path:'/employers.html',  handler:defaultViewHandler('employers')  },
  { method:'GET', path:'/pricing.html',    handler:defaultViewHandler('pricing')    },
  { method:'GET', path:'/signup.html',     handler:signupHandler                    },
  { method:'GET', path:'/thankyou.html',   handler:defaultViewHandler('thankyou')   },
//  ACTIONS
  { method:'POST',path:'/post-notice',     handler:postNotice                       },
//  STATIC CONTENT
  { method:'GET', path:'/js/{param*}',     handler: { directory: { path:'js'      }}},
  { method:'GET', path:'/css/{param*}',    handler: { directory: { path:'css'     }}},
  { method:'GET', path:'/images/{param*}', handler: { directory: { path:'images'  }}},
  { method:'GET', path:'/fonts/{param*}',  handler: { directory: { path:'fonts'   }}}
]

function defaultViewHandler(name) {
  return function(request, reply) {
    return reply.view(name)
  }
}

module.exports = ROUTES