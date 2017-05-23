 <template>
  <div class="repos">
    <h1>#Project</h1>

    <div v-for="repo in repos"class="repo">
       <!-- <div v-if ="cvs ==='github'" class="content">

       </div> -->
       <a>{{repo.repoid}}</a>
       <a>{{repo.reponame}}</a>
    </div>
  </div>
 </template>

<script>
export default {
  name: 'repo',
  data () {
    return {
      repos: [
        {
          'repoid': 1,
          'reponame': 'apiway-api'
        },
        {
          'repoid': 2,
          'reponame': 'apiway-design'
        },
        {
          'repoid': 3,
          'reponame': 'swallaby-api'
        }
      ]
    }
  }
}
</script>

<style  scoped>


</style>

