<style>
.InformationList-wrap {
  padding: 0.3rem;
  background: #f4f4f4;
}
.InformationListBox {
  display: block;
  height: 2.84rem;
  padding: 0 0.3rem;
  margin-bottom: 0.2rem;
  font-size: 0;
  background: #fff;
}
.InformationListBox-Title {
  position: relative;
  height: 0.58rem;
  margin-bottom: 0.3rem;
  line-height: 0.57rem;
  border-bottom: 0.01rem solid #e0e0e0;
  font-size: 0.24rem;
  color: #333;
}
.InformationListBox-Title::after {
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
.InformationListBox-Title span {
  color: #888;
  margin-left: 0.1rem;
}
.InformationListBox-img {
  display: inline-block;
  width: 2.1rem;
  height: 1.66rem;
  vertical-align: top;
}
.InformationListBox-con {
  float: right;
  width: 4rem;
}
.InformationListBox-con h2 {
  display: -webkit-box;
  height: 0.74rem;
  margin-bottom: 0.25rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 0.32rem;
  text-align: justify;
  color: #333;
  line-height: 0.37rem;
}
.InformationListBox-con p {
  display: -webkit-box;
  height: 0.72rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 0.24rem;
  text-align: justify;
  color: #888;
  line-height: 0.36rem;
}
</style>

<template>
  <div class="InformationList-wrap" v-if="List.length != '0'">
    <div
      class="InformationListBox"
      v-for="item in List"
      :key="item.id"
      @click="gotoDetails(item.Id)"
    >
      <div class="InformationListBox-Title">{{ item.date }}</div>
      <img
        v-if="item.ImgUrl == null"
        src="../../assets/img/no-pic.png"
        alt
        class="InformationListBox-img"
      >
      <img v-else :src="item.ImgUrl" alt class="InformationListBox-img">
      <div class="InformationListBox-con">
        <h2>{{ item.Title }}</h2>
        <p>{{item.Summary}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { get, post } from "../../api/http";
import Utils from "../common/Utils";
export default {
  data() {
    return {
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
      post("/API/PoorHelpAPI/NewsList")
        .then(resp => {
          Utils.hideLoading(that);
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            console.log("respData: ", resp);
            for (let i = 0; i < resp.data.length; i++) {
              resp.data[i].date = Utils.dateFormatter(
                Utils.dateTransformerFromDateStr(resp.data[i].CreatedOn),
                "yyyy-MM-dd hh:mm"
              );
              let StarNum =
                resp.data[i].HTML.indexOf('<img alt="" src="') - 0 + 17;
              let otherHtml = resp.data[i].HTML.substring(StarNum);
              let EndNum = otherHtml.indexOf('"');
              let imgSrc = otherHtml.substring(0, EndNum);
              resp.data[i].ImgUrl = imgSrc;
            }
            that.List = resp.data;
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "获取新闻列表错误");
        });
    },
    // 跳转到详情
    gotoDetails(id) {
      Utils.route(this, "./InformationDetails/" + id);
    }
  }
};
document.title = "新闻列表";
</script>
