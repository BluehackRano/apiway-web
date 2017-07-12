<template>
    <div class="row">
<!--         <div class="col-md-4" style="min-width: 20rem;">
            <myProject/>
        </div> -->
        <div class="col-md-8">
            <Instance/>
        </div>
    </div>
</template>

<script>
import myProject from '../views/DashboardVues/MyProject'
import Instance from '../views/DashboardVues/Instance'

export default {
  name: 'dashboard',
  beforeCreate: function () {
    if (!localStorage.getItem('access-token')) {
      this.$router.push({ path: 'login' })
    }
  },
  components: {
    myProject,
    Instance
  }
}
</script>


<style scoped>
/*  .avatar {
    border-radius: 50px;
  }
  .card {
    border-radius: 3px;
    box-shadow: 0 0 10px 0 rgba(53, 58, 73, 0.20); }*/


</style>
