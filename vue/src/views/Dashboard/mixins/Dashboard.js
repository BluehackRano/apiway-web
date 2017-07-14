let ApiWay = require('apiway-sdk-js')
let aw = new ApiWay()
let awProject = aw.getProject()

export const Dashboard = {

  beforeCreate: function () {
    console.log('beforeCreate')
    let store = this.$store
    this.$store.watch(this.$store.getters.userId,
      () => {
        getProjects(store)
      },
      {
        deep: true // add this if u need to watch object properties change etc.
      }
    )
  }
}

function getProjects (store) {
  console.log('userId : ' + store.state.userId)
  awProject.getProjectsByUser(store.state.userId)
    .then(res => {
      console.log(res.data.data)
    })
}
