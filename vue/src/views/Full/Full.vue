<template>
  <div class="app">
    <!--<div v-component="app-header"></div>-->
    <AppHeader/>
    <div class="app-body">
      <!--<div v-component="left-menu"></div>-->
      <LeftMenu/>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <AppFooter/>
    <!--<div v-component="app-footer"></div>-->
  </div>
</template>

<script>
import AppHeader from '../../components/Header.vue'
import LeftMenu from '../../components/LeftMenu'
import AppFooter from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'
import {Full} from './mixins/Full'

export default {
  name: 'Full',
  mixins: [Full],
  components: {
    AppHeader,
    LeftMenu,
    AppFooter,
    Breadcrumb
  },
  computed: {
    name () {
      return this.$route.name
    },

    list () {
      return this.$route.matched
    }
  }
}
</script>
