<style>
.NoticeDetails-wrap {
  background: #f4f4f4;
}
.NoticeDetails-head {
  padding: 0 0.3rem;
}
.NoticeDetails-head h1 {
  padding: 0.25rem 0;
  font-size: 0.4rem;
  line-height: 0.6rem;
  color: #d50017;
  text-align: center;
  border-bottom: 0.02rem solid #b60014;
}
.NoticeDetails-head strong {
  display: block;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.28rem;
  color: #888;
}
.Publisher-box {
  display: flex;
  padding-bottom: 0.2rem;
  margin-bottom: 0.3rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.01rem solid #e0e0e0;
}
.Publisher-box em,
.Publisher-box span {
  display: block;
  font-size: 0.28rem;
  color: #888;
  line-height: 0.4rem;
}
.NoticeDetails-wrap img {
  display: block;
  max-width: 100% !important;
  height: auto !important;
}
.NoticeDetails-con {
  padding: 0.3rem;
}
.NoticeDetails-con div,
.NoticeDetails-con p {
  font-size: 0.3rem;
  line-height: 1.8;
  background: none !important;
}
</style>

<template>
  <div class="NoticeDetails-wrap">
    <div class="NoticeDetails-head">
      <h1>{{title}}</h1>
      <strong>{{date}}</strong>
      <div class="Publisher-box">
        <em>发文单位：{{publisher}}</em>
        <span>{{number}}</span>
      </div>
    </div>
    <!-- <img src="../../assets/img/web/NoticeDetails.png" alt> -->
    <div class="NoticeDetails-con">
      <div v-html="conHtml"></div>
    </div>
    <div class="Details-enclosure" v-if="enclosureList.length != '0'">
      <strong>公函附件</strong>
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
      title: "",
      date: "",
      publisher: "",
      number: "",
      conHtml: "",
      enclosureList: [] //附件列表
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
      post("/API/PoorHelpAPI/GetMissiveDetail?Id=" + that.$route.params.id)
        .then(resp => {
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            that.title = resp.data.BaseInfo.Title;
            that.date = Utils.dateFormatter(
              Utils.dateTransformerFromDateStr(resp.data.BaseInfo.PublicOn),
              "yyyy-MM-dd hh:mm"
            );
            that.publisher = resp.data.BaseInfo.PublicOffice;
            that.number = resp.data.BaseInfo.Code;
            that.conHtml = resp.data.BaseInfo.HTML;
            for (let i = 0; i < resp.data.AttachmentList.length; i++) {
              resp.data.AttachmentList[i].url =
                Utils.filePathPrefix() +
                "/System/File/Download?Id=" +
                JSON.stringify(
                  resp.data.AttachmentList[i].AttachmentId
                ).replace(/"/g, "");
            }
            that.enclosureList = resp.data.AttachmentList;
            // that.List = resp.data;
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
document.title = "公函详情";
</script>
