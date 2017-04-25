<template>
  <!--<div class="animated fadeIn">-->
  <!--This is ApiWay-->
  <!--</div>-->
  <div class="index-component">
    <!--<button @click="authLogin()">Login</button>-->
    <!--<button @click="authRegister()">Register</button>-->
    <!--<button @click="authLogout()">Logout</button>-->

    <!--<hr />-->

    <button @click="auth('github')" class="button--github">Auth github</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  created: function () {
    console.log(this.$route.query)
    console.log()
    if (this.$auth.isAuthenticated()) {
      this.getUser('github')
    } else {
      this.auth('github')
    }
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
      } else if (provider === 'twitter') {
        this_.response = authResponse.body.profile
      } else if (provider === 'instagram') {
        this_.response = authResponse
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
        this.getUser(provider)

      }).catch(function (err) {
        this_.response = err
      })
    }
  }
}
</script>
