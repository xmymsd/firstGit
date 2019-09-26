<style>
.JournalDetails-wrap {
  padding: 0.3rem;
}
.JournalDetails-head {
  font-size: 0.32rem;
  color: #000;
  line-height: 0.7rem;
}
.JournalDetails-message {
  height: 0.4rem;
  margin-bottom: 0.2rem;
  font-size: 0.24rem;
  color: #888;
  line-height: 0.4rem;
}
.JournalDetails-wrap > p {
  font-size: 0.28rem;
  line-height: 0.58rem;
  text-align: justify;
  color: #333;
  text-indent: 2em;
}
.enclosure-con {
  padding-top: 0.4rem;
}
.enclosure-title {
  display: block;
  font-size: 0.32rem;
  color: #000;
  line-height: 0.6rem;
}
.enclosure-img-box {
  padding-top: 0.2rem;
  font-size: 0;
}
.enclosure-img-box img {
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  margin-bottom: 0.2rem;
  border-radius: 0.06rem;
  object-fit: cover;
  cursor: pointer;
}
.enclosure-img-box img:not(:nth-child(4n + 0)) {
  margin-right: 0.16rem;
}
.enclosure-other-box li {
  position: relative;
  display: block;
  padding: 0.3rem 0.8rem 0.3rem 0;
  border-bottom: 0.01rem solid #e0e0e0;
}
.enclosure-other-box li::after {
  content: "·";
  position: absolute;
  left: 0;
  top: 0.3rem;
  font-size: 0.28rem;
  color: #345289;
  line-height: 0.4rem;
}
.enclosure-other-box li a {
  display: block;
  padding-left: 0.17rem;
  font-size: 0.28rem;
  line-height: 0.4rem;
  color: #345289;
  text-align: justify;
  word-wrap: break-word;
}
.enclosure-other-box li .deleteEnclosure {
  position: absolute;
  right: 0.2rem;
  top: 0.3rem;
  width: 0.4rem;
  height: 0.4rem;
  z-index: 1;
}
.question-container {
  padding: 0.32rem;
  border-bottom: 0.2rem solid #f1f1f1;
}
.OnlineDeclaration-wrap .consult-label {
  font-size: 0.32rem;
  color: #000;
  margin-bottom: 0.32rem;
}
.OnlineDeclaration-wrap .picture-album {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.OnlineDeclaration-wrap .picture-album-item {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.08rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  position: relative;
}
.OnlineDeclaration-wrap .picture-album-item .image {
  width: 100%;
  height: 100%;
  border-radius: 0.08rem;
  object-fit: cover;
}
.OnlineDeclaration-wrap .picture-album-item .delete {
  position: absolute;
  top: -0.1rem;
  right: -0.1rem;
  width: 0.4rem;
  height: 0.4rem;
}
</style>

<template>
  <div class="JournalDetails-wrap">
    <h1 class="JournalDetails-head">日志内容</h1>
    <div class="JournalDetails-message">
      上报人：{{company}}
      <span class="float-r">日期：{{date}}</span>
    </div>
    <p>{{message}}</p>
    <!-- 图片 -->
    <div class="enclosure-con" v-if="pictureList.length != '0'">
      <strong class="enclosure-title">日志图片</strong>
      <div class="enclosure-img-box">
        <img
          :src="item.src"
          alt
          v-for="(item,index) in pictureList"
          :key="item.id"
          class="previewer-demo-img"
          @click="show(index)"
        >
      </div>
    </div>
    <!-- 附件 -->
    <div class="enclosure-con" v-if="enclosureList.length != '0'">
      <strong class="enclosure-title">附件信息</strong>
      <ul class="enclosure-other-box">
        <li v-for="item in enclosureList" :key="item.id">
          <a :href="item.url">{{item.Name}}</a>
        </li>
      </ul>
    </div>
    <!-- 大图轮播 -->
    <div v-transfer-dom>
      <previewer :list="pictureList" ref="previewer" :options="options"></previewer>
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
import { Previewer, Loading, TransferDom } from "vux";
export default {
  directives: {
    TransferDom
  },
  components: {
    Loading,
    Previewer
  },
  data() {
    return {
      company: "", //上报人
      date: "", //日期
      message: "", //日志内容
      pictureList: [], //图片列表
      enclosureList: [], //附件列表
      showLoading: false, //加载动画
      options: {
        getThumbBoundsFn(index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll(".previewer-demo-img")[
            index
          ];
          // get window scroll Y
          let pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop;
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect();
          // w = width
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
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
      Utils.showLoading(that);
      let params = JSON.stringify({
        Id: that.$route.params.id
      });
      post("/API/PoorHelpAPI/GetWorkLogDetail", params)
        .then(resp => {
          if (resp.ret == "0") {
            // that.type = resp.data[0].Info.CreatedBy;
            that.company = resp.data[0].Info.CreatedBy;
            that.date = Utils.dateFormatter(
              Utils.dateTransformerFromDateStr(resp.data[0].Info.Time),
              "yyyy-MM-dd"
            );
            that.message = resp.data[0].Info.Content;
            (that.pictureList = []), (that.enclosureList = []);
            let imgStr = /\.(jpg|jpeg|png|bmp|gif|JPG|JPEG|PNG|BMP|GIF)$/;
            for (let i = 0; i < resp.data[0].File.length; i++) {
              let imgSrc =
                Utils.filePathPrefix()+"/System/File/Download?Id=" +
                JSON.stringify(resp.data[0].File[i].AttachmentId).replace(
                  /"/g,
                  ""
                );
              //如果是img附件则传给pictureList
              if (imgStr.test(resp.data[0].File[i].AttachmentType)) {
                that.pictureList.push({
                  src: imgSrc
                });
              } else {
                //如果是其他附件则传给enclosureList
                that.enclosureList.push({
                  url: imgSrc,
                  Name: resp.data[0].File[i].AttachmentName
                });
              }
            }
            Utils.hideLoading(that);
            // Utils.toast(that, "数据加载完成！");
          } else {
            Utils.toast(that, resp.umsg);
          }
        })
        .catch(err => {
          Utils.toast(that, "提交数据错误!");
          Utils.hideLoading(that);
        });
    },
    // 大图轮播
    show(index) {
      this.$refs.previewer.show(index);
    }
  }
};
document.title = "日志详情";
</script>