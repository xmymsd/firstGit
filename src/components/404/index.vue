<template>
  <div class="error-page-wrap">
    <h1>找不到该页面...</h1>
  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>
<style>
  .error-page-wrap h1 {
    margin-top: 2rem;
    text-align: center;
    line-height: 2rem;
    font-size: 0.4rem;
  }
  .error-page-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../../assets/img/404.png") center no-repeat;
    background-size: 100%;
  }
</style>
