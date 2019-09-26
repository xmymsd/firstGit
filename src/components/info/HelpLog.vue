<style>
.LogWrap {
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0.3rem;
  font-size: 0;
  background: #f4f4f4;
}
.LogWrap .LogCon {
  position: relative;
  width: 100%;
}
.LogWrap .HelpPeoBox {
  overflow: hidden;
  display: inline-block;
  width: 47.8%;
  padding: 0.3rem 0.3rem 0 0.3rem;
  background: #fff;
  margin-bottom: 0.2rem;
}
.LogWrap .HelpPeoBox:nth-child(2n + 1) {
  margin-right: 4.4%;
}
.HelpPeoBox-top {
  height: 1.03rem;
  margin-bottom: 0.2rem;
  border-bottom: 0.01rem solid #e0e0e0;
}
.HelpPeoBox-top img {
  display: block;
  float: left;
  width: 0.74rem;
  height: 0.74rem;
  border-radius: 50%;
}
.HelpPeoBox-top strong {
  display: block;
  float: right;
  white-space: nowrap;
  width: 1.85rem;
  line-height: 0.36rem;
  margin-bottom: 0.1rem;
  font-size: 0.32rem;
  color: #333;
}
.HelpPeoBox-top span {
  overflow: hidden;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  float: right;
  width: 1.85rem;
  font-size: 0.24rem;
  color: #888;
}
.HelpPeoBox-bottom strong {
  display: inline-block;
  width: 1.2rem;
  margin-bottom: 0.05rem;
  font-size: 0.24rem;
  color: #888;
}
.HelpPeoBox-bottom span {
  display: inline-block;
  width: 1.44rem;
  margin-bottom: 0.05rem;
  font-size: 0.24rem;
  color: #333;
}
.HelpPeoBox-bottom em {
  display: inline-block;
  width: 1.44rem;
  font-size: 0.24rem;
  color: #fbb444;
}
</style>
<template>
  <div class="LogWrap">
    <div class="LogCon" v-if="LogPeoList.length != '0'">
      <div
        class="HelpPeoBox"
        v-for="item in LogPeoList"
        :key="item.id"
        @click="gotoUrl('/JournalList/'+ item.UserId)"
      >
        <div class="HelpPeoBox-top">
          <img src="../../assets/img/user-head.png" :alt="item.Name">
          <strong>{{item.Name}}</strong>
          <span>{{item.OfficeName}}</span>
        </div>
        <div class="HelpPeoBox-bottom">
          <strong>日志数量</strong>
          <span>{{item.Counts}}</span>
          <strong>最近更新</strong>
          <em>{{item.LastTimeDate}}</em>
        </div>
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
      LogPeoList: []
    };
  },
  mounted() {
    Utils.checkLoginStatus(this, () => {
      this.init();
    });
  },
  methods: {
    // 初始化
    init() {
      let that = this;
      Utils.showLoading(that);
      post("/API/PoorHelpAPI/GetWorkLogGroup")
        .then(resp => {
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            for (let i = 0; i < resp.data.length; i++) {
              resp.data[i].LastTimeDate = resp.data[i].LastTime.substring(
                0,
                10
              );
            }
            that.LogPeoList = resp.data;
            Utils.hideLoading(that);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "数据获取失败!");
        });
    },
    gotoUrl(url) {
      Utils.route(this, url);
    }
  }
};
document.title = "帮扶日志";
</script>