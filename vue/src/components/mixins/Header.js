export const Header = {
  beforeCreate: function () {
    console.log('Header: beforeCreate')
    let store = this.$store
    this.$store.watch(this.$store.getters.accessToken,
      () => {
        fetchProfile(store)
      },
      {
        deep: true // add this if u need to watch object properties change etc.
      }
    )
    if (this.$store.state.accessToken != null) {
      fetchProfile(this.$store)
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
