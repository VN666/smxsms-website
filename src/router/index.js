import Vue from 'vue'
import Router from 'vue-router'
import index from "@/src/views/index/index"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    }
  ]
})
