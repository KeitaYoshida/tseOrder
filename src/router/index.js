import Vue from 'vue'
import firebase from "firebase/app"
import "firebase/auth"

Vue.use(Router)

import Router from 'vue-router'
import Main from '../components/Main/index.vue'
import Admin from '../components/Admin/index.vue'
import Signin from '../components/signin.vue'
import OrderList from '../components/OrderList/OrderList.vue'

let router = new Router({
  mode: 'history',
  routes: [{
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/orderlist/:comid/:keys',
    name: 'OrderList',
    component: OrderList
  }, {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }, {
    path: '*',
    name: 'Main',
    component: Main
  }, ]
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signin',
          query: {
            redirect: to.fullPath
          }
        })
      }
    })
  } else {
    next()
  }
})

export default router
