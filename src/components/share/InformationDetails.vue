<style>
.InformationDetails-wrap {
  background: #f4f4f4;
}
.InformationDetails-head {
  padding: 0.3rem;
}
.InformationDetails-head h1 {
  font-size: 0.32rem;
  color: #333;
  line-height: 0.44rem;
}
.InformationDetails-head strong {
  display: block;
  padding: 0.2rem 0;
  font-size: 0.24rem;
  color: #bbb;
}
.InformationDetails-wrap img {
  display: block;
  max-width: 100% !important;
  height: auto !important;
}
.InformationDetails-con {
  padding: 0.3rem;
  font-size: 0.3rem;
  line-height: 1.8;
  background: none !important;
}
.InformationDetails-con img {
  max-width: 100%;
}
</style>

<template>
  <div class="InformationDetails-wrap">
    <div class="InformationDetails-head">
      <h1>{{title}}</h1>
      <strong>{{data}}</strong>
    </div>
    <div class="InformationDetails-con">
      <div v-html="html"></div>
    </div>
  </div>
</template>

<script>
import { get, post } from "../../api/http";
import Utils from "../common/Utils";
export default {
  data() {
    return {
      title: "",
      data: "",
      html: ""
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
      post("/API/PoorHelpAPI/NewsInfo?Id=" + that.$route.params.id)
        .then(resp => {
          Utils.hideLoading(that);
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            // console.log("resp", resp);
            that.title = resp.data.Title;
            that.data = Utils.dateFormatter(
              Utils.dateTransformerFromDateStr(resp.data.CreatedOn),
              "yyyy-MM-dd"
            );
            that.html = resp.data.HTML;
            // that.List[i].Avatar = resp.data.avatar;
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "获取新闻详情错误");
        });
    }
  }
};
document.title = "新闻详情";
</script>
