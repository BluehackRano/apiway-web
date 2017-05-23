 <template>
  <div class="cvss">
    <h1>cvs Infos 들어갈 자리</h1>

    <div v-for="cvs in cvss"class="cvs">
            <div v-for="project in cvs.data.projects">
                <div v-if="project.provider === 'github' " class="github">
                    <h2>{{project.provider}}</h2>
                    <h2>{{project.name}}</h2>
                </div>
                <div v-else-if="project.provider === 'bitbucket' " class="bitbucket">
                    <h2>{{project.provider}}</h2>
                    <h2>{{project.name}}</h2>
                 </div>
            </div>
    </div>
  </div>
 </template>
<!-- <a @click="fetchOrgRepos(organization.login)"> -->
<script>
export default {
  name: 'cvs',
  data () {
    return {
      cvss: [
        {
          'responseStatus': {},
          'responseMessage': 'SUCCESS',
          'data': {
            'projects': [
              {
                '_id': '5910938c3f4e5bc0b7c3edc9',
                'fullName': 'ApiWay/kiosk-API-test',
                'provider': 'github',
                '__v': 0,
                'projectId': 'ApiWay/kiosk-API-test@github',
                'url': 'https://github.com/ApiWay/Kiosk-API-test',
                'owner': '591075a71af9c1a44fa2616f',
                'name': 'Kiosk-API-test1'
              }
            ]
          }
        },
        {
          'responseStatus': {},
          'responseMessage': 'SUCCESS',
          'data': {
            'projects': [
              {
                '_id': '5910938c3f4e5bc0b7c3edc9',
                'fullName': 'ApiWay/kiosk-API-test',
                'provider': 'bitbucket',
                '__v': 0,
                'projectId': 'ApiWay/kiosk-API-test@github',
                'url': 'https://github.com/ApiWay/Kiosk-API-test',
                'owner': '591075a71af9c1a44fa2616f',
                'name': 'Kiosk-API-test2'
              }
            ]
          }
        },
        {
          'responseStatus': {},
          'responseMessage': 'SUCCESS',
          'data': {
            'projects': [
              {
                '_id': '5910938c3f4e5bc0b7c3edc9',
                'fullName': 'ApiWay/kiosk-API-test',
                'provider': 'svn',
                '__v': 0,
                'projectId': 'ApiWay/kiosk-API-test@github',
                'url': 'https://github.com/ApiWay/Kiosk-API-test',
                'owner': '591075a71af9c1a44fa2616f',
                'name': 'Kiosk-API-test3'
              }
            ]
          }
        },
        {
          'responseStatus': {},
          'responseMessage': 'SUCCESS',
          'data': {
            'projects': [
              {
                '_id': '5910938c3f4e5bc0b7c3edc9',
                'fullName': 'ApiWay/kiosk-API-test',
                'provider': 'github',
                '__v': 0,
                'projectId': 'ApiWay/kiosk-API-test@github',
                'url': 'https://github.com/ApiWay/Kiosk-API-test',
                'owner': '591075a71af9c1a44fa2616f',
                'name': 'Kiosk-API-test3'
              }
            ]
          }
        }
      ]
    }
  }
}
</script>

<style  scoped>
  .github{
    background: #aaee33;
  }
  .bitbucket{
    background: #ffee33;
  }

</style>

