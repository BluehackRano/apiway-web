<template>
  <!--<div class="animated fadeIn">-->
  <!--This is ApiWay-->
  <!--</div>-->
  <div class="index-component">
    <!--<button @click="authLogin()">Login</button>-->
    <!--<button @click="authRegister()">Register</button>-->
    <!--<button @click="authLogout()">Logout</button>-->

    <!--<hr />-->

    <!--<button v-if="!this.$auth.isAuthenticated()" @click="auth('github')" class="button&#45;&#45;github">Auth github</button>-->
    <!--<button @click="auth('github')" class="button&#45;&#45;github">Auth github</button>-->
    <hr />
  </div>
</template>

<script>

var oauth = require('../util/oauth')

export default {
  name: 'dashboard',

  computed: {
    token () {
      return oauth.getToken(this.$auth)
    }
  },

  beforeCreate: function () {
    console.log('beforeCreate')
    if (!oauth.isAuthenticated(this.$auth)) {
      console.log('go home...')
      this.$router.replace('/login')
    }
  },
  created: function () {
    console.log('created in Dashboard : ' + this.$route.params.repo)
    console.log(this.$store.getters.activeRepo)
  },
  ready () {
    console.log('bok: ready')
  },
  methods: {
  }
}
</script>
