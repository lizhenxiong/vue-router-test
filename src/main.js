import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Foo = { template: '<div>Foo</div>' }
const Bar = { template: '<div>Bar</div>' }
const User = { template: '<div>User {{ $route.params.id }} </div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/user/:id', component: User }
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
