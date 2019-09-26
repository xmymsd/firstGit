<template>
  <div class="error-page">
    <img class="error-image" src="../../assets/img/icon-not-found.png">
    <div class="error-desc">{{desc}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: "找不到该页面"
    };
  },
  mounted() {
    window.app = this;
    if (this.$route.params && this.$route.params.text) {
      this.desc = this.$route.params.text;
    }
  }
};
</script>
<style>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.error-image {
  width: 60%;
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
}
.error-desc {
  color: #666;
  font-size: 0.35rem;
  width: 70%;
  text-align: center;
}
</style>
