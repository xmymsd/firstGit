<style>
.LogListWrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.LogList-title {
  height: 0.88rem;
  padding-left: 0.3rem;
  line-height: 0.88rem;
  font-size: 0.32rem;
  color: #333;
}
.LogListCon {
  height: calc(100% - 0.88rem);
  padding: 0.3rem;
  background: #f4f4f4;
  overflow-y: scroll;
}
.LogList-box {
  display: block;
  height: 3.28rem;
  padding: 0 0.3rem 0.3rem 0.3rem;
  margin-bottom: 0.2rem;
  background: #fff;
}
.LogTime {
  position: relative;
  height: 0.58rem;
  margin-bottom: 0.3rem;
  font-size: 0.24rem;
  color: #333;
  line-height: 0.57rem;
  border-bottom: 0.01rem solid #e0e0e0;
}
.LogTime:after {
  position: absolute;
  top: 0.25rem;
  right: 0.05rem;
  content: "";
  width: 0.1rem;
  height: 0.1rem;
  border-left: 0.01rem solid #767676;
  border-top: 0.01rem solid #767676;
  transform: rotate(135deg);
}
.LogCon img.newsImg {
  display: block;
  float: left;
  width: 2.7rem;
  height: 2.1em;
}
.LogCon .LogCon-r {
  float: right;
  width: 3.3rem;
}
.LogCon .LogCon-r strong {
  display: block;
  margin-bottom: 0.1rem;
  font-size: 0.32rem;
  color: #333;
}
.LogCon .LogCon-r p {
  display: -webkit-box;
  max-height: 1.52rem;
  font-size: 0.24rem;
  color: #888;
  line-height: 0.38rem;
  text-align: justify;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
</style>
<template>
  <div class="LogListWrap">
    <h1 class="LogList-title">柯伟阳-援临工作队</h1>
    <div class="LogListCon">
      <router-link :to="item.url" class="LogList-box" v-for="item in LogList" :key="item.id">
        <div class="LogTime">{{item.Date}}</div>
        <div class="LogCon">
          <img :src="item.Imgsrc" :alt="item.logContent" class="newsImg">
          <div class="LogCon-r">
            <strong>日志内容</strong>
            <p>{{item.logContent}}</p>
          </div>
        </div>
      </router-link>
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
      LogList: [
        {
          Date: "2019-03-18",
          logContent:
            "走访了临夏县5个贫困村，深入了解贫困户实际生活和医疗情况，对接村委沟通如何实现精准帮扶工作。",
          Imgsrc: require("../../assets/img/news/news1.png"),
          url: "#"
        },
        {
          Date: "2019-03-17",
          logContent:
            "组织召开临夏州扶贫协作工作汇报及讨论会议，积极听取各工作队成员的帮扶建议，拟定帮扶计划。",
          Imgsrc: require("../../assets/img/news/news2.png"),
          url: "#"
        },
        {
          Date: "2019-03-17",
          logContent:
            "走访了临夏县小学综合楼建设现场，现场了解校舍扶贫项目的实际进展和存在问题，并讨论解决方案。",
          Imgsrc: require("../../assets/img/news/news3.png"),
          url: "#"
        }
      ]
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
      let params = JSON.stringify({
        UserId: that.$route.params.id
      });
      post("/API/PoorHelpAPI/GetWorkLogList", params)
        .then(resp => {
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
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
document.title = "日志列表";
</script>