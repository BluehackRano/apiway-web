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

// import { setTitle } from '../util/title'
// import GitHub from 'github-api'

export default {
  name: 'Projects',
  data: () => ({
    loading: true
  }),

  computed: {
    organizations () {
      return this.$store.state.orgs
    },
    token () {
      return this.$auth.getToken()
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
    this.fetchOrgs()
  },

  mounted: function () {
    console.log('mounted')
  },

  watch: {
    organizations: 'fetchOrgs'
  },

  methods: {
    fetchOrgs () {
      this.loading = true
      fetchOrgs(this.$store, this.token).then(() => {
        this.loading = false
      })
    }
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
</script>

<style scoped>
  .avatar {
    border-radius: 50px;
  }
  .card {
    border-radius: 3px;
    box-shadow: 0 0 10px 0 rgba(53, 58, 73, 0.20); }


</style>
