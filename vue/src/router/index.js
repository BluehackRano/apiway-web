import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import VueAuthenticate from 'vue-authenticate'

// Containers
import Full from 'containers/Full'

// Views
import Dashboard from 'views/Dashboard'

Vue.use(Router)
Vue.use(Resource)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:4000',
  providers: {
    // Define OAuth providers config
    github: {
      clientId: '40b12bd8b129cc8803e3'
    }
  }
})

Vue.http.options.root = 'http://localhost:3000'

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }

      ]
    },
    {
      path: '/auth/callback',
      component: {
        template: '<div class="auth-component"></div>'
      }
    }
  ]
})
