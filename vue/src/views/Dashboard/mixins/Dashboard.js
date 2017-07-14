let ApiWay = require('apiway-sdk-js')
let aw = new ApiWay()
let awProject = aw.getProject()

export const Dashboard = {

  beforeCreate: function () {
    console.log('beforeCreate')
    // getProjects(this.$store)
    // console.log(this.$store.getters)
    this.$store.watch(
      function (state) {
        return state.userId
      },
      function () {
        getProjects()
      },
      {
        deep: true // add this if u need to watch object properties change etc.
      }
    )
    /*
    this.$store.watch(this.$store.getters.userId, n => {
      getProjects()
    })
    // */
  },
  method: {
    getProjects: function () {
      getProjects(this.$store)
    }
  }
}

function getProjects (store) {
  console.log(store.state.userId)
  awProject.getProjectsByUser(store.state.userId)
    .then(res => {
      console.log(res.data.data)
    })
}

