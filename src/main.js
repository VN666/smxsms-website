// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';

import admin_router from "./admin/route.js";
import fe_router from "./router/index";
import utils from "@/utils/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import http from "./config/http.js";
import api from "./config/api.js";
import hComponents from "@/src/components/index.js";
import "@/src/filters/index.js";
import "@/src/assets/style/common.css";

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(utils);
Vue.use(hComponents);

let routes = new Set([...fe_router, ...admin_router]);
let router = new VueRouter({
	routes,
	mode: "hash"
})

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
