<style>
.NoticeList-wrap {
  padding: 0.3rem;
  background: #f4f4f4;
}
.NoticeListBox {
  display: block;
  padding: 0.3rem;
  margin-bottom: 0.2rem;
  background: #fff;
  border-left: 0.04rem solid #4b89f7;
}
.NoticeListBox-Title {
  position: relative;
  padding-right: 0.3rem;
  margin-bottom: 0.25rem;
  font-size: 0.32rem;
  text-align: justify;
  line-height: 0.44rem;
  color: #333;
}
.NoticeListBox-Title::after {
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
.NoticeListBox p {
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
.NoticeListBox strong {
  display: block;
  margin-top: 0.25rem;
  text-align: right;
  font-size: 0.24rem;
  color: #4b89f7;
}
</style>
<template>
  <div class="NoticeList-wrap">
    <div
      class="NoticeListBox"
      v-for="item in List"
      :key="item.id"
      @click="gotoUrl('/MissiveDetails/' + item.Id)"
    >
      <div class="NoticeListBox-Title">{{ item.Title }}</div>
      <p>{{ item.Summary }}</p>
      <strong>{{ item.date }}</strong>
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
      let params = JSON.stringify({
        EndOn: "",
        Keyword: "",
        AreaCode: "",
        State: "",
        UserId: that.$store.state.user.UserId
      });
      console.log("par", params);
      post("/API/PoorHelpAPI/GetMissiveList", params)
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
            console.log("resp.data", resp.data);
            that.List = resp.data;
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
document.title = "公函列表";
</script>