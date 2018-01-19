// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from "@/store/index.js"
import "@/style/index.less"
import axios from "axios"


import { MessageBox, Message } from "element-ui"
Vue.prototype.$msg = MessageBox

Vue.config.productionTip = false

Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
