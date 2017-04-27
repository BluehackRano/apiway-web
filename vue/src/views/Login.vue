<template>
  <div class="app flex-row align-items-center page-third">
    <div class="container">
      <div class="row justify-content-center">
          <div class="card text-center">
              <img class="card-img-top mb-2 mt-2" src="/static/img/logo.png" alt="Card image cap">
            <div class="card-block">
              <button type="button" class="btn block"><i class="fa fa-github-alt"></i> Authorize <strong>Github</strong><i class="fa fa-caret-right"></i></button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>
  @import "/static/css/apiway.css";

  .app {
    background: #3B4051;
  }
  img {
    max-width: 120px;
    margin: 0 auto;
  }
  .card {
    width: 380px;
    border-radius: 9px;
    box-shadow: 0 4px 18px #353a49; }

</style>
