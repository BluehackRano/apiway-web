import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      accessToken: 'kkk',
      activeType: null,
      activeProjectId: null,
      activeInstanceId: null,
      itemsPerPage: 20,
      userId: '596882f09815455b4ba447a5',
      displayName: null,
      items: {/* [id: number]: Item */},
      orgs: {},
      profile: {},
      projects: {},
      repos: {/* [id: string]: Repo */},
      instances: {/* [id: string]: Repo */},
      users: {/* [id: string]: User */},
      lists: {
        top: [/* number */],
        new: [],
        show: [],
        ask: [],
        job: []
      }
    },
    actions,
    mutations,
    getters
  })
}
