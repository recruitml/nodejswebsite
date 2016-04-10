'use strict'
const Hapi    = require('hapi')
const Hoek    = require('hoek')
const ROUTES  = require('./server/routes')
const PLUGINS =[require('vision'), require('inert')]
const CONFIG  = require('./server/config/config')

const server = new Hapi.Server()
server.connection({ host:CONFIG.HAPI.host, port:CONFIG.HAPI.port })

server.register(PLUGINS, (err) => {

  Hoek.assert(!err, err)

  server.views({
    engines      : { html:require('handlebars') },
    relativeTo   : __dirname,
    partialsPath : 'views/includes',
    path         : 'views'
  })
})

server.route(ROUTES)

server.start(function() {
  console.log('Server started at: ' + server.info.uri)
})
