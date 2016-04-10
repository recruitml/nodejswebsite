'use strict'
const CONFIG_DEV  = require('./dev')
const CONFIG_PROD = require('./prod')
const CONFIG      = process.env.OPENSHIFT_NAMESPACE ? CONFIG_PROD : CONFIG_DEV

console.log('CONFIG:', CONFIG.ENV)

module.exports = CONFIG