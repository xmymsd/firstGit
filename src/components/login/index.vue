<template>
  <div class="login-wrap">
    <mt-header title="账号绑定" class="login-header">
      <router-link to="/" slot="left">
        <mt-button icon="more del-icon"></mt-button>
      </router-link>
      <router-link to="/" slot="right">
        <mt-button icon="more"></mt-button>
      </router-link>
    </mt-header>
    <div class="login-con">
      <div class="binding-box" @click="binding()">
        <img src="../../assets/img/user-head.png" alt>
        <strong>请绑定系统账号</strong>
      </div>
      <div class="login-input">
        <img src="../../assets/img/user-name.png" alt>
        <input type="text" placeholder="请输入用户名" v-model="username" name="username">
      </div>
      <div class="login-input">
        <img src="../../assets/img/password.png" alt>
        <input type="password" placeholder="请输入登录密码" v-model="password" name="username">
      </div>
      <button type="button" class="login-btn">绑定</button>
    </div>
    <div class="login-footer">
      <strong>温馨提示</strong>
      <p>
        为方便您查询管理精准帮扶相关信息，请及时绑定厦门市东西部
        <br>精准帮扶协同系统账号。
      </p>
    </div>
  </div>
</template>

<script>
import { get, post } from "../../api/http";
import Utils from "../common/Utils";
export default {
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  mounted() {
    Utils.checkLoginStatus(this, () => {
      this.init();
    });
  },
  methods: {
    binding() {
      console.log("绑定账号");
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  background: #fff;
}
.login-wrap {
  background: #fff;
}
.mint-header.login-header {
  color: #000;
  background: #fff;
}
.del-icon {
  display: block;
  width: 0.31rem;
  height: 0.31rem;
  background: url(../../assets/img/del-icon.png);
  background-size: 100%;
}
.del-icon::before {
  content: "";
}
.login-con {
  width: 92%;
  padding: 0.7rem 0 1.4rem;
  margin: 0 auto;
}
.binding-box {
  width: 48%;
  margin: 0 auto 0.5rem;
}
.binding-box img {
  display: block;
  width: 1.76rem;
  height: 1.76rem;
  margin: 0 auto 0.3rem;
}
.binding-box strong {
  display: block;
  font-size: 0.32rem;
  color: #888;
  text-align: center;
}
.login-input {
  height: 1.1rem;
  padding: 0.35rem 0.32rem;
  font-size: 0;
  border-bottom: 0.01rem solid #e0e0e0;
}
.login-input img {
  display: inline-block;
  height: 0.4rem;
  margin-right: 0.5rem;
}
.login-input input {
  display: inline-block;
  width: 80%;
  height: 0.4rem;
  line-height: 0.4rem;
  border: none;
  font-size: 0.32rem;
  vertical-align: top;
}
.login-btn {
  display: block;
  width: 100%;
  height: 0.98rem;
  margin-top: 0.8rem;
  line-height: 0.98rem;
  font-size: 0.36rem;
  color: #fff;
  text-align: center;
  background: #0ebdca;
  border-radius: 0.45rem;
  border: none;
}
.login-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.3rem;
}
.login-footer strong {
  display: block;
  font-size: 0.28rem;
  color: #ffb463;
  text-align: center;
}
.login-footer p {
  margin-top: 0.2rem;
  font-size: 0.24rem;
  line-height: 0.3rem;
  text-align: center;
  color: #888;
}
</style>