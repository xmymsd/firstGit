<style>
.Notice-list-wrap {
  padding: 0.3rem;
  background: #f4f4f4;
}
.Notice-list-wrap .Notice-list-box {
  margin-bottom: 0.1rem;
}
.Notice-list-wrap .Notice-list-date {
  display: block;
  height: 1.15rem;
  line-height: 1.15rem;
  color: #888;
  font-size: 0.2rem;
  text-align: center;
}
.Notice-list-con {
  display: block;
  width: 97%;
  padding: 0.3rem;
  margin: 0 auto;
  background: #fff;
  border-top: 0.02rem solid #4b89f7;
}
.Notice-list-con .Notice-list-box-Title {
  margin-bottom: 0.3rem;
  font-size: 0.32rem;
  color: #333;
  text-align: justify;
  line-height: 0.44rem;
}
.Notice-list-con p {
  display: -webkit-box;
  max-height: 1.08rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-size: 0.24rem;
  color: #888;
  text-align: justify;
  line-height: 0.36rem;
}
</style>

<template>
  <div class="Notice-list-wrap">
    <div class="Notice-list-box" v-for="item in List" :key="item.id">
      <strong class="Notice-list-date">{{item.date}}</strong>
      <div class="Notice-list-con" @click="gotoUrl('/NoticeDetails/'+ item.Id)">
        <div class="Notice-list-box-Title">{{ item.Title }}</div>
        <p>{{ item.Summary }}</p>
      </div>
    </div>
    <img src="../../assets/img/noMessage.png" alt class="ListNoMessage" v-if="showNoThing">
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
      TypeId: "", //文章栏目对应ID
      showNoThing: false, //无数据
      List: []
    };
  },
  mounted() {
    Utils.checkLoginStatus(this, () => {
      this.init();
    });
  },
  methods: {
    // 下拉参数请求
    init() {
      let that = this;
      //   先请求文章栏目的ID
      post("/API/PoorHelpAPI/GetArticleItem")
        .then(resp => {
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            for (let i = 0; i < resp.data.length; i++) {
              if (resp.data[i].Name == "通知公告") {
                that.TypeId = resp.data[i].Id;
                that.getList();
              }
            }
            Utils.hideLoading(that);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "数据获取失败!");
        });
    },
    getList() {
      let that = this;
      let params = JSON.stringify({
        IsPublish: "1",
        ItemId: that.TypeId
      });
      post("/API/PoorHelpAPI/GetArticleListById", params)
        .then(resp => {
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            if (JSON.stringify(resp.data) == "{}") {
              Utils.toast(that, "暂无数据！");
            } else {
              for (let i = 0; i < resp.data.length; i++) {
                resp.data[i].date = Utils.dateFormatter(
                  Utils.dateTransformerFromDateStr(resp.data[i].PublicOn),
                  "yyyy-MM-dd hh:mm"
                );
              }
              // console.log(resp.data)
              that.List = resp.data;
              if (that.List.length == "0") {
                that.showNoThing = true;
              } else {
                that.showNoThing = false;
              }
            }
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
document.title = "通知公告";
</script>