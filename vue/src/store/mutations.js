import Vue from 'vue'

export default {
  SET_ACTIVE_TYPE: (state, { type }) => {
    state.activeType = type
  },

  SET_LIST: (state, { type, ids }) => {
    state.lists[type] = ids
  },

  SET_ITEMS: (state, { items }) => {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items, item.id, item)
      }
    })
  },

  SET_ORGS: (state, { orgs }) => {
    orgs.forEach(org => {
      if (org) {
        console.log('SET_ORGS:' + org.id)
        Vue.set(state.orgs, org.id, org)
      }
    })
  },

  SET_USER: (state, { id, user }) => {
    Vue.set(state.users, id, user || false) /* false means user not found */
  },

  SET_PROFILE: (state, { profile }) => {
    Vue.set(state.profile, profile.id, profile)
  }
}
