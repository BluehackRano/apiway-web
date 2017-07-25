<template>
  <div class="row">
    <Projects/>
  </div>
</template>

<script>

  import Projects from './Projects'
  import {Dashboard} from './mixins/Dashboard'

  export default {
    name: 'dashboard',
    mixins: [Dashboard],
    components: {
      Projects
    }
  }

</script>


<style>


</style>
