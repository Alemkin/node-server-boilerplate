const { version } = require('../../package.json')
const config = require('../config/config')

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'node-express-mongoose-boilerplate API documentation',
    version,
    license: {
      name: 'MIT'
    }
  },
  servers: [
    {
      url: envVars.NODE_ENV === 'production' ? `${config.domain}/v1` : `${config.domain}:${config.port}/v1`
    }
  ]
}

module.exports = swaggerDef
