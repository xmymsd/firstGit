<style>
.Notice-Details-wrap {
  background: #f4f4f4;
}
.Notice-Details-head {
  padding: 0 0.3rem;
}
.Notice-Details-head h1 {
  padding: 0.25rem 0;
  font-size: 0.4rem;
  line-height: 0.6rem;
  color: #333;
  text-align: justify;
}
.Notice-Details-head strong {
  display: block;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: left;
  font-size: 0.28rem;
  color: #333;
}
.Notice-Details-con {
  padding: 0.3rem;
}
.Notice-Details-con div,
.Notice-Details-con p {
  font-size: 0.3rem;
  line-height: 1.8;
  background: none !important;
}
</style>

<template>
  <div class="Notice-Details-wrap">
    <div class="Notice-Details-head">
      <h1>{{title}}</h1>
      <strong>{{date}}</strong>
    </div>
    <div class="Notice-Details-con">
      <div v-html="conHTML"></div>
    </div>
    <div class="Details-enclosure" v-if="enclosureList.length != '0'">
      <strong>通知公告附件</strong>
      <ul>
        <li v-for="item in enclosureList" :key="item.id">
          <a :href="item.url">{{item.AttachmentName}}</a>
        </li>
      </ul>
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
      enclosureList: [], //附件列表
      title: "",
      date: "",
      conHTML: ""
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
      post("/API/PoorHelpAPI/GetArticleDetialById?Id=" + that.$route.params.id)
        .then(resp => {
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            // console.log(resp);
            that.title = resp.data.BaseInfo.Title;
            that.date = Utils.dateFormatter(
              Utils.dateTransformerFromDateStr(resp.data.BaseInfo.CreatedOn),
              "yyyy-MM-dd hh:mm"
            );
            that.conHTML = resp.data.BaseInfo.HTML;
            for (let i = 0; i < resp.data.AttachmentList.length; i++) {
              resp.data.AttachmentList[i].url =
                Utils.filePathPrefix()+"/System/File/Download?Id=" +
                JSON.stringify(
                  resp.data.AttachmentList[i].AttachmentId
                ).replace(/"/g, "");
            }
            that.enclosureList = resp.data.AttachmentList;
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
document.title = "通知公告详情";
</script>
