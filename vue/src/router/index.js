import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import VueAuthenticate from 'vue-authenticate'

// Containers
import Full from 'views/Full/Full'

// Views
import Login from 'views/Login'
import Dashboard from 'views/Dashboard/Dashboard'
import Projects from 'views/Projects'
import InstanceDetail from 'views/DashboardVues//InstanceDetail'
import AddProject from 'views/ProjectsVues/AddProject'

Vue.use(Router)
Vue.use(Resource)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://api.apiway.io',
  providers: {
    // Define OAuth providers config
    github: {
      clientId: '40b12bd8b129cc8803e3',
      redirectUri: 'http://apiway.io',
      scope: ['user', 'repo']
    }
  }
})

Vue.http.options.root = 'http://api.apiway.io'
//
// export default new Router({
//   mode: 'hash',
//   linkActiveClass: 'open active',
//   scrollBehavior: () => ({ y: 0 }),
//   routes: [
//     {
//       path: '/',
//       redirect: '/dashboard',
//       name: 'Home',
//       component: Full,
//       children: [
//         {
//           path: 'dashboard',
//           name: 'Dashboard',
//           component: Dashboard
//         },
//         {
//           path: 'projects',
//           name: 'Projects',
//           component: Projects
//         }
//
//       ]
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '*',
//       redirect: '/'
//     }
//   ]
// })

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    // routes: [
    // // { path: '/top/:page(\\d+)?', component: createListView('top') },
    // // { path: '/new/:page(\\d+)?', component: createListView('new') },
    // // { path: '/show/:page(\\d+)?', component: createListView('show') },
    // // { path: '/ask/:page(\\d+)?', component: createListView('ask') },
    // // { path: '/job/:page(\\d+)?', component: createListView('job') },
    // {path: '/dashboard', component: Dashboard},
    // {path: '/projects', component: Projects},
    // {path: '/login', component: Login},
    // {path: '/', redirect: '/dashboard', component: Full}
    // ]
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
          },
          {
            path: 'dashboard/:user/:repo',
            name: 'Instance Detail',
            component: InstanceDetail
          },
          {
            path: 'projects/add',
            name: 'Projects Add',
            component: AddProject
          },
          {
            path: 'projects',
            name: 'Projects',
            component: Projects
          }

        ]
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '*',
        redirect: '/'
      }
    ]
  })
}
