<template>
    <div class="row">
      <div class="col-md-4" style="min-width: 20rem;">
        <div class="card">
          <div class="card-block">
            <img>
            <h4 class="card-title">Github</h4>
            <p class="card-text">...</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="media">
                <img class="d-flex align-self-center mr-3" src="/static/img/avatars/2.jpg" alt="Generic placeholder image">
                <div class="media-body">
                  <h5 class="mt-0">bluehackmaster</h5>
                </div>
              </div>
            </li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card">
          <div class="card-block">
            <img>
            <!--<h4 class="card-title">Github</h4>-->
            <!--<p class="card-text">...</p>-->
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>

import Octokat from 'octokat'

export default {
  name: 'Projects',
  beforeCreate: function () {
    console.log('beforeCreate')
    if (!this.$auth.isAuthenticated()) {
      console.log('go home')
//      this.$router.push({ path: '/login' })
    }
  },
  created: function () {
    console.log(this.$route.query)
    console.log('dashboard')
//    if (this.$auth.isAuthenticated()) {
//      this.getUser('github')
//    } else {
//      this.auth('github')
//    }
//    if (this.$auth.isAuthenticated()) {
    var octo = new Octokat({token: this.$auth.getToken()})
    var cb = function (err, val) {
      if (err) {
        console.log(err)
      }
      console.log(val)
    }
    octo.repos('ApiWay', 'tower-web-console').fetch(cb)
//    }
  },
  ready () {
    console.log('bok: ready')
  },
  methods: {
  }
}
</script>

<style scoped>
  .media-body {
    margin-top: auto;
    margin-bottom: auto;
  }
  .card {
    border-radius: 3px;
    box-shadow: 0 0 10px 0 rgba(53, 58, 73, 0.20); }


</style>
