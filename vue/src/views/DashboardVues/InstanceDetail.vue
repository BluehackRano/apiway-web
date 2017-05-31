<template>
    <div class="row">
        <h1>Instance Detail Page</h1>
        <div>
            <p>{{this.$route.params.repo}}</p>
        </div>
        <div>
            <button type="button" @click="addInstance(this.$route.params.repo)" class="btn btn-info" >RUN</button>
        </div>
    </div>
</template>

<script>
import vueModule from '../../views/FunctionModule/vueModule'

export default {
  extends: vueModule
}
</script>


<style scoped>

</style>
