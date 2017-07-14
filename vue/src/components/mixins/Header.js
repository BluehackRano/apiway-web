import { mapState } from 'vuex'

export const Header = {
  beforeCreate: function () {
    console.log('Header: beforeCreate')
    if (this.$store.state.accessToken != null) {
      fetchProfile(this.$store)
    }
  },
  computed: mapState({
    token: state => state.accessToken,
    profileName: state => state.displayName
  }),
  watch: {
    token: 'fetchProfile',
    profileName: 'test'
  },
  methods: {
    fetchProfile: function () {
      console.log('fetchProfile()')
      fetchProfile(this.$store)
    },
    test: function () {
      test(this.$store)
    }
  }
}

function fetchProfile (store) {
  return store.dispatch('FETCH_USER_PROFILE', {
    token: store.state.accessToken
  }).then(() => {
    console.log('done FETCH_USER_PROFILE in Header.vue')
  })
}

function test (store) {
  console.log('test......()')
}
