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
  apiKey: "AIzaSyDcXOtKot3ZmuHpdglcjw-UbkawbiwWDZQ",
  authDomain: "tse-order.firebaseapp.com",
  databaseURL: "https://tse-order.firebaseio.com",
  projectId: "tse-order",
  storageBucket: "",
  messagingSenderId: "248212162338",
  appId: "1:248212162338:web:6e81757345908584"
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
