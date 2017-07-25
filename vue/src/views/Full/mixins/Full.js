let auth = require('../../../util/auth')

export const Full = {
  beforeCreate: function () {
    console.log('Full: beforeCreate')
    var aToken = this.$route.query.accessToken
    if (aToken !== undefined && aToken !== null) {
      auth.setToken(aToken)
    }

    if (!auth.isAuthenticated()) {
      console.log('No access-token !!')
      auth.clear()
      window.location.href = 'http://login.apiway.io'
    } else {
      console.log('Login Success !!')
      // drawComponents()
      restoreFromLocalStorage(this.$store)
      var hash = this.$route.hash
      hash = hash.replace('#', '')
      this.$router.push(hash)
    }
  }
}

// function drawComponents () {
//   console.log('hihihi')
//   window.Vue.component('app-header', AppHeader)
//   console.log('222222')
//   window.Vue.component('left-menu', LeftMenu)
//   window.Vue.component('app-footer', AppFooter)
// }

function restoreFromLocalStorage (store) {
  restoreAccessToken(store)
}

function restoreAccessToken (store) {
  return store.dispatch('UPDATE_ACCESS_TOKEN', {
    token: auth.getToken()
  }).then(() => {
    console.log('done UPDATE_ACCESS_TOKEN in Full.vue')
  }).catch(() => {
    console.log('Dashboard: UPDATE_ACCESS_TOKEN error')
    auth.clear()
    window.location.href = 'http://login.apiway.io'
  })
}

