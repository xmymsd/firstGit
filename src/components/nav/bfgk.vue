<style>
.moduleEntry-wrap {
  padding: 0.2rem;
  background: #f3f3f3;
}
.moduleEntry-con {
  border-radius: 0.09rem;
  background: #fff;
}
.moduleEntry-wrap .moduleEntry-con:not(:last-child) {
  margin-bottom: 0.2rem;
}
.moduleEntry-title {
  padding-left: 0.3rem;
  font-size: 0.28rem;
  line-height: 0.8rem;
  color: #777;
}
.moduleEntry-list {
  position: relative;
  display: block;
  font-size: 0;
  line-height: 0;
}
.moduleEntry-list::before {
  content: "";
  position: absolute;
  left: 33.4%;
  top: 0;
  width: 0.02rem;
  height: 100%;
  background: #f5f5f5;
  z-index: 2;
}
.moduleEntry-list::after {
  content: "";
  position: absolute;
  left: 66.7%;
  top: 0;
  width: 0.02rem;
  height: 100%;
  background: #f5f5f5;
  z-index: 2;
}
.moduleEntry-list li {
  position: relative;
  display: inline-block;
  width: 33.3%;
  height: 2.2rem;
  vertical-align: top;
}
.moduleEntry-list li:nth-child(3n + 1)::after {
  content: "";
  position: absolute;
  left: 0%;
  top: 0;
  width: 300%;
  height: 0.02rem;
  background: #f5f5f5;
  z-index: 2;
}
.moduleEntry-list li a {
  display: block;
  width: 100%;
  height: 100%;
  padding-top: 0.4rem;
}
.moduleEntry-list li img {
  display: block;
  width: 0.71rem;
  height: 0.71rem;
  margin: 0 auto 0.25rem;
}
.moduleEntry-list li strong {
  display: block;
  padding: 0 0.2rem;
  font-size: 0.3rem;
  color: #333;
  line-height: 0.4rem;
  text-align: center;
}
</style>

<template>
  <div class="moduleEntry-wrap">
    <!-- 帮扶概况 -->
    <div class="moduleEntry-con">
      <h2 class="moduleEntry-title">帮扶概况</h2>
      <ul class="moduleEntry-list">
        <li>
          <a href="#/GansuNingxiazhou">
            <img src="../../assets/img/moduleEntry/帮扶概览-甘肃临夏州@2x.png" alt>
            <strong>甘肃临夏州</strong>
          </a>
        </li>
        <li>
          <a href="#/NXGY">
            <img src="../../assets/img/moduleEntry/帮扶概览-宁夏固原市@2x.png" alt>
            <strong>宁夏固原市</strong>
          </a>
        </li>
        <li>
          <a href="#/XJJM">
            <img src="../../assets/img/moduleEntry/帮扶概览-新疆吉木萨尔@2x.png" alt>
            <strong>新疆吉木萨尔</strong>
          </a>
        </li>
        <li>
          <a href="#/XZZG">
            <img src="../../assets/img/moduleEntry/帮扶概览-西藏左贡@2x.png" alt>
            <strong>西藏左贡</strong>
          </a>
        </li>
        <li>
          <a href="#/CQWZ">
            <img src="../../assets/img/moduleEntry/帮扶概览-重庆万州@2x.png" alt>
            <strong>重庆万州</strong>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Utils from "../common/Utils";
export default {
  mounted() {
    Utils.checkLoginStatus(this, () => {
      this.init();
    });
  },
  methods: {
    init() {
      // console.log("进入init");
    }
  }
};
document.title = "帮扶概括";
</script>