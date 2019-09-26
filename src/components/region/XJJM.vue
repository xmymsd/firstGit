<style>
.border-bottom-20px {
  border-bottom: 0.2rem solid #f4f4f4;
}
.Statistics-con {
  box-sizing: border-box;
  height: 4.4rem;
  padding-top: 0.5rem;
  text-align: center;
  background: #fff url(../../assets/img/mountain-bg.png) bottom no-repeat;
  background-size: 100%;
}
.Statistics-box {
  box-sizing: border-box;
  display: inline-block;
  width: 43.5%;
  height: 1.42rem;
  padding: 0.33rem 0 0 0.23rem;
  margin-bottom: 0.4rem;
  background: #fff;
  border-radius: 0.05rem;
  box-shadow: 0.03rem 0.03rem 0.05rem #f1f1f1, -0.03rem -0.03rem 0.05rem #f1f1f1;
}
.Statistics-box:nth-child(2n + 1) {
  margin-right: 5%;
}
.Statistics-box img {
  display: block;
  float: left;
  width: 0.74rem;
  height: 0.74rem;
  margin-right: 0.19rem;
}
.Statistics-box strong {
  display: block;
  overflow: hidden;
  margin-bottom: 0.1rem;
  font-size: 0.22rem;
  color: #888;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.Statistics-box span {
  display: block;
  overflow: hidden;
  width: 55%;
  font-size: 0.26rem;
  color: #333;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.box-title {
  height: 0.88rem;
  padding: 0 0.3rem;
  font-size: 0.26rem;
  line-height: 0.88rem;
  text-align: left;
  color: #333;
}
.title-icon {
  width: 0.3rem;
  height: 0.3rem;
  margin-right: 0.14rem;
  vertical-align: middle;
}
.box-title span {
  line-height: 0.88rem;
  font-size: 0.2rem;
  color: #888;
}
.bannerBox {
  width: 100%;
  height: 3.08rem;
  padding: 0 0.3rem;
}
.bannerBox .mint-swipe {
  width: 100%;
  height: 100%;
  border-radius: 0.1rem;
  overflow: hidden;
}
.bannerBox .mint-swipe-items-wrap div img {
  display: block;
  width: 100%;
  height: 100%;
}
.bannerBox .mint-swipe-items-wrap div:nth-child(1) {
  background: #c55;
}
.bannerBox .mint-swipe-items-wrap div:nth-child(2) {
  background: #5c5;
}
.bannerBox .mint-swipe-items-wrap div:nth-child(3) {
  background: #55c;
}
.bannerBox .mint-swipe-indicators {
  font-size: 0;
  width: 1.53rem;
  height: 0.4rem;
  padding-top: 0.12rem;
  border-radius: 0.3rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
}
.bannerBox .mint-swipe-indicators .mint-swipe-indicator {
  width: 0.15rem;
  height: 0.15rem;
  opacity: 1;
  background: #dcdee1;
}
.bannerBox .mint-swipe-indicators .mint-swipe-indicator.is-active {
  background: #4b89f7;
}
.bannerMessage {
  padding: 0.2rem 0.3rem 0;
  font-size: 0.28rem;
  color: #888;
  line-height: 0.38rem;
  text-align: justify;
  text-indent: 2em;
}
.GSsupport {
  padding: 0.2rem 0.3rem 0.4rem;
  font-size: 0;
}
.GSsupport-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.17rem;
}
.GSsupport-box strong {
  width: 1.3rem;
  text-align: right;
  font-size: 0.24rem;
  color: #888;
}
.GSsupport-box img {
  width: 3.96rem;
}
.GSsupport-box span {
  width: 1.1rem;
  font-size: 0.24rem;
  color: #333;
}
.GSworkTeam {
  padding: 0.3rem;
}
.GSworkTeam p {
  font-size: 0.28rem;
  text-indent: 2em;
  line-height: 0.38rem;
  text-align: justify;
  color: #888;
}
.GSworkTeam .GStableName {
  display: block;
  font-size: 0.28rem;
  line-height: 0.8rem;
  color: #444;
}
.GSworkTeam .GStable {
  width: 100%;
  font-size: 0.24rem;
  text-align: center;
  border: 0.01rem solid #e0e0e0;
}
.GSworkTeam .GStable th {
  font-weight: 400;
  line-height: 0.58rem;
  background: #e9f1fe;
  color: #333;
}
.GSworkTeam .GStable tbody tr td:first-child {
  padding: 0.15rem 0.04rem;
  line-height: 0.28rem;
  color: #333;
}
.GSworkTeam .GStable tbody tr td:nth-child(2) {
  padding: 0.15rem 0.04rem;
  line-height: 0.28rem;
  color: #888;
}
</style>

<template>
  <div class="GSwrap">
    <!-- 头部 -->
    <mt-header title="新疆吉木萨尔县" style="display: none">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 区域概览 -->
    <div class="bannerCon">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon">
        区域概览
      </div>
      <div class="bannerBox">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in bannerImgs" :key="item.id">
            <img :src="item.src" alt>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <p class="bannerMessage">{{bannerMessage}}</p>
    </div>
    <!-- 统计区 -->
    <div class="Statistics-con border-bottom-20px">
      <div class="Statistics-box" v-for="item in StatisticsList" :key="item.id">
        <img :src="item.src" alt>
        <strong>{{ item.title }}</strong>
        <span>{{ item.value }}</span>
      </div>
    </div>
    <!-- 帮扶成效 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon">
        帮扶成效
      </div>
      <div class="GSsupport">
        <div class="GSsupport-box">
          <strong class="GSsupport-title">扶贫项目</strong>
          <img src="../../assets/img/help-icon2.png" alt>
          <span>{{GSsupport.fpxm}}个</span>
        </div>
        <div class="GSsupport-box">
          <strong class="GSsupport-title">脱贫县(市)</strong>
          <img src="../../assets/img/help-icon2.png" alt>
          <span>{{GSsupport.tpx}}个</span>
        </div>
        <div class="GSsupport-box">
          <strong class="GSsupport-title">脱贫贫困村</strong>
          <img src="../../assets/img/help-icon2.png" alt>
          <span>{{GSsupport.tppkc}}个</span>
        </div>
        <div class="GSsupport-box">
          <strong class="GSsupport-title">脱贫贫困户</strong>
          <img src="../../assets/img/help-icon2.png" alt>
          <span>{{GSsupport.tppkh}}户</span>
        </div>
        <div class="GSsupport-box">
          <strong class="GSsupport-title">脱贫人口</strong>
          <img src="../../assets/img/help-icon2.png" alt>
          <span>{{GSsupport.tprk}}人</span>
        </div>
      </div>
    </div>
    <!-- 帮扶工作队 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon">
        帮扶工作队
      </div>
      <div class="GSworkTeam">
        <p>
          {{MessageBeforNum}}
          <span style="color: #4b89f7">{{MessageNum}}</span>
          {{MessageAfterNum}}
        </p>
        <strong class="GStableName">成员名单</strong>
        <table class="GStable" border="none">
          <thead>
            <tr>
              <th>姓名</th>
              <th>选派期间职位</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in TeamMessage" :key="item.id">
              <td>{{item.MemberName}}</td>
              <td>{{item.DispatchPosition}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 加载动画 -->
    <div class="loading-box">
      <loading v-model="showLoading"></loading>
    </div>
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
      showLoading: false, //加载动画
      // banner图
      bannerImgs: [],
      // 轮播图下信息
      bannerMessage: "",
      // 四个指标
      StatisticsList: [
        {
          src: require("../../assets/img/Statistics-icon-18.png"),
          title: "贫困县(市)",
          value: ""
        },
        {
          src: require("../../assets/img/Statistics-icon-5.png"),
          title: "贫困村",
          value: ""
        },
        {
          src: require("../../assets/img/Statistics-icon-7.png"),
          title: "贫困户",
          value: ""
        },
        {
          src: require("../../assets/img/Statistics-icon-17.png"),
          title: "贫困人口",
          value: ""
        }
      ],
      // 脱贫成效数据
      GSsupport: {},
      // 工作队介绍
      MessageBeforNum: "",
      MessageNum: "",
      MessageAfterNum: "",
      // 工作队成员名单表格
      TeamMessage: []
    };
  },
  mounted() {
    Utils.checkLoginStatus(this, () => {
      this.init();
    });
  },
  methods: {
    // 初始化筛选选项
    init() {
      let that = this;
      Utils.showLoading(that);
      post("/API/PoorHelpAPI/RegionalDetial?code=XJJM")
        .then(resp => {
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            // banner图
            for (let i = 0; i < resp.data.AttachmentList.length; i++) {
              let imgSrc =
                Utils.filePathPrefix()+"/System/File/Download?Id=" +
                JSON.stringify(
                  resp.data.AttachmentList[i].AttachmentId
                ).replace(/"/g, "");
              that.bannerImgs.push({ src: imgSrc });
            }
            // 区域简介
            that.bannerMessage = resp.data.BaseInfo.Introduction;
            // 4个指标
            that.StatisticsList[0].value = resp.data.BaseInfo.PoorCity + "个";
            that.StatisticsList[1].value =
              resp.data.BaseInfo.PoorVillage + "个";
            that.StatisticsList[2].value = resp.data.BaseInfo.PoorFamily + "户";
            that.StatisticsList[3].value =
              resp.data.BaseInfo.PoorPopulation + "人";
            // 帮扶成效
            that.GSsupport = {
              fpxm: resp.data.BaseInfo.PoorProject,
              tpx: resp.data.BaseInfo.OutPoorCity,
              tppkc: resp.data.BaseInfo.OutPoorVillage,
              tppkh: resp.data.BaseInfo.OutPoorFamily,
              tprk: resp.data.BaseInfo.OutPoorPopulation
            };
            that.TeamMessage = resp.data.Members;
            // 工作队介绍信息处理
            let Message = resp.data.BaseInfo.TeamIntroduction;
            let Num = Message.replace(/[^0-9]/gi, "");
            let NumLength = Num.length;
            let NumIndex = Message.indexOf(Num);
            that.MessageBeforNum = Message.substring(0, NumIndex);
            that.MessageNum = Num;
            that.MessageAfterNum = Message.substring(NumIndex + NumLength);
            Utils.hideLoading(that);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "数据获取失败!");
        });
    }
  }
};
document.title = "新疆吉木萨尔县";
</script>