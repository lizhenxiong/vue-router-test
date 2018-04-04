import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const User = { template: '<div>User {{ $route.params.id }} <router-view></router-view></div>' }

const UserProfile = { template: '<div>User Profile</div>' }
const UserPost = { template: '<div>User Post</div>' }
const UserHome = { template: '<div>User Home</div>' }

const routes = [
  { path: '/user/:id',
    name: 'user',
    component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'post',
        component: UserPost
      },
      {
        path: '',
        component: UserHome
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
