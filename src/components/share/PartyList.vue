<style>
.PartyList-wrap {
  padding: 0.3rem;
  background: #f4f4f4;
}
.PartyListBox {
  display: block;
  padding: 0.3rem;
  margin-bottom: 0.2rem;
  background: #fff;
  border-left: 0.04rem solid #fbb444;
}
.PartyListBox-Title {
  position: relative;
  padding-right: 0.3rem;
  margin-bottom: 0.25rem;
  font-size: 0.32rem;
  text-align: justify;
  line-height: 0.44rem;
  color: #333;
}
.PartyListBox-Title::after {
  position: absolute;
  top: 0.17rem;
  right: 0.05rem;
  content: "";
  width: 0.1rem;
  height: 0.1rem;
  border-left: 0.01rem solid #767676;
  border-top: 0.01rem solid #767676;
  transform: rotate(135deg);
}
.PartyListBox p {
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
.PartyListBox strong {
  display: block;
  margin-top: 0.25rem;
  text-align: right;
  font-size: 0.24rem;
  color: #fbb444;
}
</style>

<template>
  <div class="PartyList-wrap">
    <div
      class="PartyListBox"
      v-for="item in List"
      :key="item.id"
      @click="gotoUrl('/PartyDetails/'+ item.Id)"
    >
      <div class="PartyListBox-Title">{{ item.Title }}</div>
      <p>{{ item.Summary }}</p>
      <strong>{{ item.date }}</strong>
    </div>
    <img src="../../assets/img/noMessage.png" alt class="ListNoMessage" v-if="ListLength0">
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
      List: [],
      ListLength0: false //数据为0
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
            // console.log(resp);
            for (let i = 0; i < resp.data.length; i++) {
              if (resp.data[i].Name == "党建学习") {
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
            for (let i = 0; i < resp.data.length; i++) {
              resp.data[i].date = Utils.dateFormatter(
                Utils.dateTransformerFromDateStr(resp.data[i].PublicOn),
                "yyyy-MM-dd hh:mm"
              );
            }
            that.List = resp.data;
            if (that.List.length == "0") {
              that.ListLength0 = true;
            } else {
              that.ListLength0 = false;
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
document.title = "党建学习";
</script>