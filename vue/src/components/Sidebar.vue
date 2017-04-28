<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item mt-1 mb-1">
          <router-link :to="'/dashboard'" class="nav-link"><i class="fa fa-tachometer"></i><span>Monitoring</span></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>

export default {
  name: 'sidebar',
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css" scoped>
  .nav-link {
    cursor:pointer;
  }

  .sidebar-nav .nav .nav-item i {
    width: 100%;
  }

  .sidebar-nav .nav .nav-item span {
    width: 100%;
  }

  nav ul .fa:before {
    font-size: 24px !important;
  }
</style>
