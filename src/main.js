// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import store from "@/src/store/index.js";

import routes from "@/src/router/index";
import utils from "@/utils/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import http from "./config/http.js";
import api from "./config/api.js";
import CST from "./config/constant.js";
import hComponents from "@/src/components/index.js";
import "@/src/filters/index.js";
import "@/src/assets/style/common.css";
import "@/src/assets/style/text.css";

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(utils);
Vue.use(hComponents);

let router = new VueRouter({
	routes,
	mode: "history"
})

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
