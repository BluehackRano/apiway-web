<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link"><i class="fa fa-tachometer"></i><span>Monitoring</span></router-link>
          <router-link :to="'/dashboard'" class="nav-link"><i class="fa fa-briefcase"></i><span>Project</span></router-link>
          <router-link :to="'/dashboard'" class="nav-link"><i class="fa fa-file-text"></i><span>Reports</span></router-link>
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
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .sidebar-nav .nav .nav-item span {
    width: 100%;
  }

  nav ul .fa:before {
    font-size: 24px !important;
  }
</style>
