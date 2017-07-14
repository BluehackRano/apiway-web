let auth = require('../../../util/auth')

export const Full = {
  beforeCreate: function () {
    // if (!auth.isAuthenticated()) {
    //   console.log('go to Login')
    //   this.$router.replace('/login')
    // }

    restoreFromLocalStorage(this.$store)
  }
}

function restoreFromLocalStorage (store) {
  restoreAccessToken(store)
}

function restoreAccessToken (store) {
  return store.dispatch('UPDATE_ACCESS_TOKEN', {
    token: auth.getToken()
  }).then(() => {
    console.log('done UPDATE_ACCESS_TOKEN in Full.vue')
  })
}

