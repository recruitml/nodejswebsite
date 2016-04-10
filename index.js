'use strict'
const Hapi    = require('hapi')
const Hoek    = require('hoek')
const ROUTES  = require('./server/routes')
const PLUGINS =[require('vision'), require('inert')]

const server = new Hapi.Server()
server.connection({ host:'localhost', port:8080 })

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

//server.views({
//  engines: {
//    html: require('handlebars')
//  },
//  path: 'views',
//  layoutPath: 'views/layout',
//  layout: 'default',
//  partialsPath: 'views/partials'
//  //helpersPath: 'views/helpers',
//})