import {
  fetchUser,
  fetchItems,
  fetchIdsByType,
  fetchOrgs,
  fetchProfile,
  fetchRepos,
  fetchOrgRepos
} from '../api'

export default {
  // ensure data for rendering given list type
  FETCH_LIST_DATA: ({ commit, dispatch, state }, { type }) => {
    commit('SET_ACTIVE_TYPE', { type })
    return fetchIdsByType(type)
      .then(ids => commit('SET_LIST', { type, ids }))
      .then(() => dispatch('ENSURE_ACTIVE_ITEMS'))
  },

  // ensure all active items are fetched
  ENSURE_ACTIVE_ITEMS: ({ dispatch, getters }) => {
    return dispatch('FETCH_ITEMS', {
      ids: getters.activeIds
    })
  },

  FETCH_ITEMS: ({ commit, state }, { ids }) => {
    // on the client, the store itself serves as a cache.
    // only fetch items that we do not already have, or has expired (3 minutes)
    const now = Date.now()
    ids = ids.filter(id => {
      const item = state.items[id]
      if (!item) {
        return true
      }
      if (now - item.__lastUpdated > 1000 * 60 * 3) {
        return true
      }
      return false
    })
    if (ids.length) {
      return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
    } else {
      return Promise.resolve()
    }
  },

  FETCH_ORGS: ({ commit, dispatch, state }, { token }) => {
    return fetchOrgs(token)
        .then(orgs => {
          console.log('FETCH_ORGS then in actions.js : orgs = ' + orgs)
          commit('SET_ORGS', { orgs })
        })
  },

  FETCH_USER_PROFILE: ({ commit, dispatch, state }, { token }) => {
    return fetchProfile(token)
      .then(profile => {
        console.log('FETCH_USER_PROFILE then in actions.js : profile = ' + profile)
        commit('SET_PROFILE', { profile })
      })
  },

  FETCH_REPOS: ({ commit, dispatch, state }, { token }) => {
    return fetchRepos(token)
      .then(repos => {
        console.log('FETCH_REPOS then in actions.js : repos = ' + repos)
        commit('SET_REPOS', { repos })
      })
  },

  FETCH_ORG_REPOS: ({ commit, dispatch, state }, { org, token }) => {
    return fetchOrgRepos(org, token)
      .then(repos => {
        console.log('FETCH_ORG_REPOS then in actions.js : repos = ' + repos)
        commit('SET_REPOS', { repos })
      })
  },

  FETCH_USER: ({ commit, state }, { id }) => {
    return state.users[id]
      ? Promise.resolve(state.users[id])
      : fetchUser(id).then(user => commit('SET_USER', { id, user }))
  }
}
