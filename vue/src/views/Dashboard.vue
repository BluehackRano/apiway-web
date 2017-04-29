<template>
  <!--<div class="animated fadeIn">-->
  <!--This is ApiWay-->
  <!--</div>-->
  <div class="index-component">
    <!--<button @click="authLogin()">Login</button>-->
    <!--<button @click="authRegister()">Register</button>-->
    <!--<button @click="authLogout()">Logout</button>-->

    <!--<hr />-->

    <button v-if="!this.$auth.isAuthenticated()" @click="auth('github')" class="button--github">Auth github</button>
    <!--<button @click="auth('github')" class="button&#45;&#45;github">Auth github</button>-->
    <hr />
  </div>
</template>

<script>

export default {
  name: 'dashboard',
  beforeCreate: function () {
    console.log('beforeCreate')
    if (!this.$auth.isAuthenticated()) {
      console.log('go home')
      this.$router.push({ path: '/login' })
    }
  },
  created: function () {
  },
  ready () {
    console.log('bok: ready')
  },
  methods: {
  }
}
</script>
