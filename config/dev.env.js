var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // SERVICE_URL: JSON.stringify("http://api.caixie.la")
})
