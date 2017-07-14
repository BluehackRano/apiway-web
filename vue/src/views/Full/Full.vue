<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <LeftMenu/>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '../../components/Header'
import LeftMenu from '../../components/LeftMenu'
import AppFooter from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'
import {Full} from './mixins/Full'

export default {
  name: 'full',
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
