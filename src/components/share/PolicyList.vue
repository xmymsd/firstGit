<style>
.PolicyList-wrap {
  padding: 0.3rem;
  background: #f4f4f4;
}
.PolicyListBox {
  display: block;
  padding: 0.3rem;
  margin-bottom: 0.2rem;
  background: #fff;
  border-left: 0.04rem solid #07c6ff;
}
.PolicyListBox-Title {
  position: relative;
  padding-right: 0.3rem;
  margin-bottom: 0.25rem;
  font-size: 0.32rem;
  text-align: justify;
  line-height: 0.44rem;
  color: #333;
}
.PolicyListBox-Title::after {
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
.PolicyListBox p {
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
.PolicyListBox strong {
  display: block;
  margin-top: 0.25rem;
  text-align: right;
  font-size: 0.24rem;
  color: #07c6ff;
}
</style>
<template>
  <div class="PolicyList-wrap">
    <div
      class="PolicyListBox"
      v-for="item in List"
      :key="item.id"
      @click="gotoUrl('/PolicyDetails/'+ item.Id)"
    >
      <div class="PolicyListBox-Title">{{ item.Title }}</div>
      <p>{{ item.Summary }}</p>
      <strong>{{ item.date }}</strong>
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
      showNoThing: false, //无数据提醒
      List: []
    };
  },
  mounted() {
    Utils.checkLoginStatus(this, () => {
      this.init();
    });
  },
  methods: {
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
              if (resp.data[i].Name == "政策法规") {
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
          Utils.hideLoading(that);
          if (resp.ret != "0") {
            Utils.toast(that, resp.umsg);
          } else {
            for (let i = 0; i < resp.data.length; i++) {
              resp.data[i].date = Utils.dateFormatter(
                Utils.dateTransformerFromDateStr(resp.data[i].PubilcOn),
                "yyyy-MM-dd hh:mm"
              );
            }
            that.List = resp.data;
            if (that.List.length == "0") {
              that.showNoThing = true;
            } else {
              that.showNoThing = false;
            }
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
document.title = "政策法规";
</script>