<template>
  <navbar>
    <p>
    </p>
    <button class="navbar-toggler mobile-leftmenu-toggler hidden-lg-up" type="button" @click="mobileLeftMenuToggle">&#9776;</button>
    <a class="navbar-brand" href="#"></a>
    <ul class="nav navbar-nav hidden-md-down">
      <li class="nav-item">
        <a class="nav-link navbar-toggler leftmenu-toggler" href="#" @click="leftmenuToggle">&#9776;</a>
      </li>
    </ul>
  </navbar>
</template>
<script>

import navbar from './Navbar'
import { dropdown } from 'vue-strap'
import { Header } from './mixins/Header'

export default {
  name: 'header',
  mixins: [Header],
  components: {
    navbar,
    dropdown
  },
  methods: {
    click () {
      // do nothing
    },
    leftmenuToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('leftmenu-hidden')
    },
    mobileLeftMenuToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('leftmenu-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    }
  }
}
</script>

<style lang="css">

.dropdown-toggle::after {
  /*display: none !important;*/
}
</style>
