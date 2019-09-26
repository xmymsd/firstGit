<style>
.revoke-wrap h1 {
  font-size: 0.36rem;
  color: #000;
  line-height: 0.8rem;
  text-align: center;
}
</style>

<template>
  <div class="revoke-wrap">
    <h1>取消授权</h1>
  </div>
</template>

<script>
import { get, post } from "../../api/http";
import Utils from "../common/Utils";
import { Loading } from "vux";
export default {
  components: {
    Loading
  },
  data() {
    return {
      showLoading: false //加载动画
    };
  },
  mounted() {
    let that = this;
    Utils.showLoading(that, "取消用户授权");
    setTimeout(function() {
      Utils.hideLoading(that);
      Utils.deleteCookie(that, "userId");
      Utils.deleteCookie(that, "wechatId");
    }, 1000);
  },
  methods: {
    init() {}
  }
};
</script>