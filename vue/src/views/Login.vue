<template>
  <div class="app flex-row align-items-center page-third">
    <div class="container">
      <div class="row justify-content-center">
          <div class="card text-center">
              <img class="card-img-top mb-2 mt-2" src="/static/img/logo.png" alt="Card image cap">
            <div class="card-block">
              <button type="button" @click="requestLogin('github')" class="btn block">
                <i class="fa fa-github-alt"></i> Authorize <strong>Github</strong><i class="fa fa-caret-right"></i>
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// var Sphinx = require('sphinx-js')
let auth = require('../util/auth')

export default {
  name: 'Login',
  beforeCreate: function () {
    console.log('beforeCreate')

    if (auth.isAuthenticated()) {
      this.$store.dispatch('FETCH_USER_PROFILE', {
        token: auth.getToken()
      }).then(() => {
        this.$router.replace('/dashboard')
      })
    }
  },

  created: function () {
    console.log('created')
  },

  methods: {
    requestLogin: function (provider) {
      // To do : get access-token from the Sphinx.js
      // let aToken = 'aab3bee7fff8939caa1d0abd73257e6bfa33ea1f'
      let aToken = '319f4402220ab5a87755d12252c3f0c6113f374b'

      // init the accessToken
      auth.setToken(aToken)
      this.$store.dispatch('FETCH_USER_PROFILE', {
        token: aToken
      }).then(() => {
        this.$router.replace('/dashboard')
      })
    },

    // To do : remove this method
    auth: function (provider) {
      this.response = null

      var this_ = this
      this.$auth.authenticate(provider).then(function (authResponse) {
        console.log(authResponse)
        console.log(this_.$auth.isAuthenticated())
        // init the accessToken
        this.accessToken = this_.token

        this.requestLogin(provider)
      }).catch(function (err) {
        this_.response = err
      })
    }

    /*
    authLogin: function () {
      let user = {
        email: 'john.doe@domain.com',
        password: 'pass123456'
      }

      if (this.$auth.isAuthenticated()) {
        this.$auth.logout()
      }

      this.$auth.login(user).then(function (response) {
        this.response = response

        console.log(this.$auth.isAuthenticated())
      })
    },

    authRegister: function () {
      let user = {
        name: 'John Doe',
        email: 'john.doe@domain.com',
        password: 'pass123456'
      }

      if (this.$auth.isAuthenticated()) {
        this.$auth.logout()
      }

      this.$auth.register(user).then(function (response) {
        this.response = response

        console.log(this.$auth.isAuthenticated())
      })
    },

    authLogout: function () {
      this.$auth.logout().then(() => {
        if (!this.$auth.isAuthenticated()) {
          this.response = null
        }
      })
    },

    getUser: function (provider) {
      var this_ = this
      if (provider === 'github') {
        this_.$http.get('https://api.github.com/user', {
          params: { access_token: this_.$auth.getToken() }
        }).then(function (response) {
          this_.response = response
          console.log('USER : ' + response)
        })
      } else if (provider === 'facebook') {
        this_.$http.get('https://graph.facebook.com/v2.5/me', {
          params: { access_token: this_.$auth.getToken() }
        }).then(function (response) {
          this_.response = response
        })
      } else if (provider === 'google') {
        this_.$http.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect').then(function (response) {
          this_.response = response
        })
//      } else if (provider === 'twitter') {
//        this_.response = authResponse.body.profile
//      } else if (provider === 'instagram') {
//        this_.response = authResponse
      } else if (provider === 'bitbucket') {
        this_.$http.get('https://api.bitbucket.org/2.0/user').then(function (response) {
          this_.response = response
        })
      }
    },

    auth: function (provider) {
//      this.$auth.logout()
      this.response = null

      var this_ = this
      this.$auth.authenticate(provider).then(function (authResponse) {
        console.log(authResponse)
        console.log(this_.$auth.isAuthenticated())
//        this_.$router.push({ path: 'dashboard' })

        this_.$store.dispatch('FETCH_USER_PROFILE', {
          token: this_.token
        }).then(() => {
          this_.$router.replace('/dashboard')
        })
      }).catch(function (err) {
        this_.response = err
      })
    }
    */
  }
}
</script>

<style scoped>

  @import "/static/css/apiway.css";

  .app {
    background: #3B4051;
  }
  img {
    max-width: 120px;
    margin: 0 auto;
  }
  .card {
    width: 380px;
    border-radius: 9px;
    box-shadow: 0 4px 18px #353a49; }

</style>
