<template>
    <div class="row">
      <div class="col-md-4" style="min-width: 20rem;">
        <div class="card">
          <div class="card-block">
            <img>
            <h4 class="card-title">Github</h4>
            <p class="card-text"></p>
          </div>
          <ul class="list-group list-group-flush" >
            <li class="list-group-item" v-for="record in organizations">
              <div class="media">
                <img class="d-flex align-self-center mr-3 avatar" :src="record.avatar_url">
                  <h6 class="mt-0">{{record.login}}</h6>
              </div>
            </li>
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

import GitHub from 'github-api'

export default {
  name: 'Projects',
  data () {
    return {
      organizations: ['xx']
    }
  },

  beforeCreate: function () {
    console.log('beforeCreate')
    if (!this.$auth.isAuthenticated()) {
      console.log('go home')
      this.$router.push({ path: '/login' })
    }
  },
  created: function () {
    console.log(this.$route.query)
    var github = new GitHub({token: this.$auth.getToken()})
//    var github = new GitHub({token: '65f395e6cde5a647d92aba9db59ca152c499605b'})
    this.getOrgs(github)
  },
  ready () {
    console.log('bok: ready')
  },

  mounted: function () {
    console.log('mounted')
  },

  methods: {
    getOrgs: function (github) {
      var this_ = this
      github.getUser().listOrgs().then(function (orgs) {
        console.log(orgs)
        if (orgs != null && orgs.data.length > 0) {
          console.log(orgs.data)
          this_.organizations = orgs.data
        }
      }).catch(function (err) {
        console.error(err)
      })
    }
  }
}
</script>

<style scoped>
  .avatar {
    border-radius: 50px;
  }
  .card {
    border-radius: 3px;
    box-shadow: 0 0 10px 0 rgba(53, 58, 73, 0.20); }


</style>
