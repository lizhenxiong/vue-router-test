import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Bar = { template: '<div>Bar</div>' }
const Foo = { template: '<div>Foo</div>' }
const Tar = { template: '<div>Tar</div>' }

const routes = [
  { path: '/',
    components: {
      default: Bar,
      a: Foo,
      b: Tar
    }
  },
  {
    path: '/two',
    components: {
      default: Tar,
      a: Bar,
      b: Foo
    }
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
