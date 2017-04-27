<template>
  <div class="app flex-row align-items-center page-third">
    <div class="container">
      <div class="row justify-content-center">
          <div class="card text-center">
              <img class="card-img-top mb-2 mt-2" src="/static/img/logo.png" alt="Card image cap">
            <div class="card-block">
              <button type="button" @click="auth('github')" class="btn block">
                <i class="fa fa-github-alt"></i> Authorize <strong>Github</strong><i class="fa fa-caret-right"></i>
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  beforeCreate: function () {
    console.log('beforeCreate')
    if (this.$auth.isAuthenticated()) {
      console.log('go dashboard')
      this.$router.push({ path: 'dashboard' })
    } else {
      console.log('not authorized')
    }
  },
  created: function () {
  },
  methods: {
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
          console.log(response)
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
      this.$auth.logout()
      this.response = null

      var this_ = this
      this.$auth.authenticate(provider).then(function (authResponse) {
        console.log(authResponse)
        console.log(this_.$auth.isAuthenticated())
        this_.$router.push({ path: 'dashboard' })
      }).catch(function (err) {
        this_.response = err
      })
    }
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
