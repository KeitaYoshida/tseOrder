'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '"AIzaSyDcXOtKot3ZmuHpdglcjw-UbkawbiwWDZQ"',
  AUTH_DOMAIN: '"tse-order.firebaseapp.com"',
  DATABASE_URL: '"https://tse-order.firebaseio.com"',
  PROJECT_ID: '"tse-order"',
  STORAGE_BUCKET: '""',
  MESSAGING_SENDER_ID: '"248212162338"',
  APP_ID: '"1:248212162338:web:6e81757345908584"',
})
