// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
require('@/assets/scss/common.scss')

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STRAGE_BUCKET,
  messagingSenderId: process.env.MESSAGEING_SENDER_ID,
  appId: process.env.APP_ID
};

firebase.initializeApp(config);

Vue.config.productionTip = false

Number.prototype.numToRev = function () {
  let val = ("0000" + this).slice(-4);
  return val.slice(0, 2) + '-' + val.slice(2, 4);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
