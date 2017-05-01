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
            <li class="list-group-item" v-for="user in profile">
              <a @click="fetchRepos">
                <div class="media">
                  <img class="d-flex align-self-center mr-3 avatar" :src="user.avatar_url">
                  <h6 class="mt-0">{{user.login}}</h6>
                </div>
              </a>
            </li>
            <li class="list-group-item" v-for="organization in organizations">
              <a @click="fetchOrgRepos(organization.login)">
                <div class="media">
                  <img class="d-flex align-self-center mr-3 avatar" :src="organization.avatar_url">
                    <h6 class="mt-0">{{organization.login}}</h6>
                </div>
              </a>
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
            <li class="list-group-item justify-content-between" v-for="repo in repos">
              {{ repo.full_name }}
              <button type="button" @click="runTest(repo)" class="btn btn-info">Run</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>

// import { setTitle } from '../util/title'
// import GitHub from 'github-api'

export default {
  name: 'Projects',
  data: () => ({
    loading: true
  }),

  computed: {
    profile () {
      return this.$store.state.profile
    },
    organizations () {
      return this.$store.state.orgs
    },
    repos () {
      return this.$store.state.repos
    },
    token () {
      return this.$auth.getToken()
//      return '00c2b08825677b2dd47c35d3eff4027cefacca49'
    }
  },

  beforeCreate: function () {
    console.log('beforeCreate')
    if (!this.$auth.isAuthenticated()) {
      console.log('go to Login')
      this.$router.replace('/login')
    }
  },
  created: function () {
  },

  asyncData ({ store }) {
    return store.dispatch('FETCH_ORGS', { token: this.token })
  },

  title () {
    return 'Projects'
  },

  beforeMount () {
    this.fetchProfile()
    this.fetchOrgs()
  },

  mounted: function () {
    console.log('mounted')
  },

  watch: {
    organizations: 'fetchOrgs',
    profile: 'fetchProfile'
  },

  methods: {
    fetchOrgs () {
      this.loading = true
      fetchOrgs(this.$store, this.token).then(() => {
        this.loading = false
      })
    },
    fetchProfile () {
      this.loading = true
      console.log(this.$store.state.profile)
      fetchProfile(this.$store, this.token).then(() => {
        this.loading = false
      })
    },
    fetchRepos () {
      this.loading = true
      console.log(this.$store.state.repos)
      fetchRepos(this.$store, this.token).then(() => {
        this.loading = false
      })
    },
    fetchOrgRepos (org) {
      this.loading = true
      console.log(this.$store.state.repos)
      fetchOrgRepos(this.$store, org, this.token).then(() => {
        this.loading = false
      })
    },
    runTest (repo) {
      this.$router.replace('/dashboard')
    }
  }
}

function fetchProfile (store, token) {
  if (token) {
    return store.dispatch('FETCH_USER_PROFILE', {
      token: token
    }).then(() => {
      console.log('done FETCH_USER_PROFILE in Projects.vue')
    })
  }
}

function fetchOrgs (store, token) {
  if (token) {
    return store.dispatch('FETCH_ORGS', {
      token: token
    }).then(() => {
      console.log('done FETCH_ORGS in Projects.vue')
    })
  }
}

function fetchRepos (store, token) {
  if (token) {
    return store.dispatch('FETCH_REPOS', {
      token: token
    }).then(() => {
      console.log('done FETCH_REPOSin Projects.vue')
    })
  }
}

function fetchOrgRepos (store, org, token) {
  if (token) {
    return store.dispatch('FETCH_ORG_REPOS', {
      org: org,
      token: token
    }).then(() => {
      console.log('done FETCH_ORG_REPOS in Projects.vue')
    })
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
