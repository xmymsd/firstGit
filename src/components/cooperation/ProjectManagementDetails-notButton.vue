<style>
.ProjectManagementDetails-lis {
  font-size: 0;
  text-align: center;
  border-bottom: 0.01rem solid #e0e0e0;
}
.ProjectManagementDetails-lis strong {
  display: inline-block;
  width: 1.2rem;
  line-height: 1.18rem;
  font-size: 0.28rem;
  text-align: center;
  color: #888;
  cursor: pointer;
}
.ProjectManagementDetails-lis strong:not(:last-child) {
  margin-right: 1.08rem;
}
.ProjectManagementDetails-lis strong.active {
  color: #4b89f7;
}
.ProjectManagementDetails-lis strong.active::after {
  position: relative;
  top: 0;
  left: 0.29rem;
  content: "";
  display: block;
  width: 0.62rem;
  height: 0.03rem;
  background: #4b89f7;
}
.ProjectManagementDetails-cons .ProjectManagementDetails-con {
  display: none;
}
.ProjectManagementDetails-cons .ProjectManagementDetails-con.active {
  display: block;
}
.PMD-message li {
  display: flex;
  padding: 0.1rem 0;
  align-items: flex-start;
  justify-content: space-between;
}
.PMD-message li strong {
  display: block;
  width: 2.56rem;
  padding-right: 0.58rem;
  text-align: right;
  font-size: 0.24rem;
  color: #888;
}
.PMD-message li span,
.PMD-message li p {
  display: block;
  width: 4.94rem;
  padding-right: 0.3rem;
  font-size: 0.24rem;
  color: #333;
}
.PMD-PMD-progress-con {
  padding-top: 0.4rem;
  padding-left: 0.51rem;
}
.PMD-progress {
  position: relative;
  padding: 0 0.3rem 0.73rem 0.5rem;
  margin-top: -0.15rem;
  border-left: 0.01rem solid #fff;
}
.PMD-progress:not(:last-child) {
  border-left: 0.01rem solid #e0e0e0;
}
.PMD-progress-index {
  position: absolute;
  top: -0.11rem;
  left: -0.21rem;
  display: block;
  width: 0.42rem;
  height: 0.42rem;
  background: #4b89f7;
  font-size: 0.24rem;
  color: #fff;
  line-height: 0.42rem;
  text-align: center;
  border-radius: 50%;
}
.PMD-progress-date {
  display: block;
  font-size: 0.24rem;
  color: #888;
  line-height: 0.24rem;
  margin-bottom: 0.19rem;
}
.PMD-progress div .float-r {
  font-size: 0.24rem;
  color: #0ebdca;
  line-height: 0.24rem;
}
.PMD-progress div strong {
  display: block;
  color: #333;
  font-size: 0.24rem;
  line-height: 0.24rem;
}
.PMD-progress p {
  padding: 0.2rem 0 0.3rem;
  color: #333;
  font-size: 0.24rem;
  line-height: 0.4rem;
  text-align: justify;
}
.PMD-Files-box {
  white-space: nowrap;
  overflow-x: auto;
  font-size: 0;
}
.PMD-Files-box img {
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.08rem;
  margin-right: 0.2rem;
  object-fit: cover;
}
.PMD-Files-title {
  padding: 0.3rem;
  font-size: 0.32rem;
  color: #000;
  padding-left: 0.3rem;
}
.PMDF-con {
  padding: 0.2rem 0.3rem;
  white-space: nowrap;
  overflow-x: auto;
  font-size: 0;
}
.PMDF-box {
  display: inline-block;
  width: 1.6rem;
  margin-right: 0.17rem;
  margin-bottom: 0.3rem;
  vertical-align: top;
}
.PMDF-box img {
  display: block;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.08rem;
  object-fit: cover;
}
.PMDF-box strong {
  overflow: hidden;
  display: block;
  width: 100%;
  padding-top: 0.1rem;
  font-size: 0.24rem;
  color: #000;
  line-height: 0.4rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
.PMDF-box span {
  overflow: hidden;
  display: block;
  width: 100%;
  font-size: 0.24rem;
  color: #888;
  line-height: 0.4rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
.PMDF-nothing {
  display: block;
  margin: 0.5rem auto;
}
</style>

<template>
  <div class="ProjectManagementDetails-wrap">
    <div class="ProjectManagementDetails-lis">
      <strong :class="{active: tabIndex == '0'}" @click="tabIndex = '0'">基本信息</strong>
      <strong :class="{active: tabIndex == '1'}" @click="tabIndex = '1'">进度情况</strong>
      <strong :class="{active: tabIndex == '2'}" @click="tabIndex = '2'">附件信息</strong>
    </div>
    <div class="ProjectManagementDetails-cons">
      <!-- 基本信息 -->
      <div class="ProjectManagementDetails-con" :class="{active: tabIndex == '0'}">
        <ul class="PMD-message" v-show="AllLoading">
          <li>
            <strong>项目编号</strong>
            <span>{{PMDmessage.ItemNumber}}</span>
          </li>
          <li>
            <strong>项目名称</strong>
            <span>{{PMDmessage.ItemName}}</span>
          </li>
          <li>
            <strong>所属区</strong>
            <span>{{PMDmessage.BelongToAreaName}}</span>
          </li>
          <li>
            <strong>对口县(市)</strong>
            <span>{{PMDmessage.CounterpartName}}</span>
          </li>
          <li>
            <strong>项目地址</strong>
            <span>{{PMDmessage.ItamAddress}}</span>
          </li>
          <li>
            <strong>项目类型</strong>
            <span>{{PMDmessage.ItemType}}</span>
          </li>
          <li>
            <strong>项目性质</strong>
            <span>{{PMDmessage.ItemNature}}</span>
          </li>
          <li>
            <strong>开始时间</strong>
            <span>{{PMDmessage.StartTime}}</span>
          </li>
          <li>
            <strong>截止时间</strong>
            <span>{{PMDmessage.EndTime}}</span>
          </li>
          <li>
            <strong>资金预算</strong>
            <span>{{PMDmessage.CapitalBudget || 0}}万元</span>
          </li>
          <li>
            <strong>已支付数</strong>
            <span>{{PMDmessage.PayFinish || 0}}万元</span>
          </li>
          <li>
            <strong>下达文号</strong>
            <span>{{PMDmessage.ReferenceNumber}}</span>
          </li>
          <li>
            <strong>支付进度</strong>
            <span>{{PMDmessage.PaySchedule}}</span>
          </li>
          <li>
            <strong>实施单位</strong>
            <span>{{PMDmessage.ImplementOffice}}</span>
          </li>
          <li>
            <strong>联系人</strong>
            <span>{{PMDmessage.Contact}}</span>
          </li>
          <li>
            <strong>惠及贫困人口数</strong>
            <span>{{PMDmessage.PovertyNum || 0}}人</span>
          </li>
          <li>
            <strong>带动脱贫人口数</strong>
            <span>{{PMDmessage.OutPovertyNum || 0}}人</span>
          </li>
          <li>
            <strong>项目内容</strong>
            <p>{{PMDmessage.ItemContent}}</p>
          </li>
        </ul>
      </div>
      <!-- 进度情况 -->
      <div class="ProjectManagementDetails-con" :class="{active: tabIndex == '1'}">
        <div class="PMD-PMD-progress-con">
          <div class="PMD-progress" v-for="item in progressList" :key="item.id">
            <span class="PMD-progress-index">{{item.indexBall}}</span>
            <span class="PMD-progress-date">{{item.date}}</span>
            <div>
              <em class="float-r">项目进度：{{item.ItemSchedule || 0}}%</em>
              <strong>汇报人: {{item.ReportBy}}</strong>
            </div>
            <p>{{item.Situation}}</p>
            <div class="PMD-Files-box" v-if="item.Files.length != '0'">
              <img :src="img.src" alt v-for="img in item.imgs" :key="img.id">
            </div>
          </div>
        </div>
      </div>
      <!-- 附件信息 -->
      <div class="ProjectManagementDetails-con" :class="{active: tabIndex == '2'}">
        <h2 v-if="pictureList.length != '0'" class="PMD-Files-title">图片信息</h2>
        <div class="PMDF-con" v-if="pictureList.length != '0'">
          <div class="PMDF-box" v-for="(item,index) in pictureList" :key="item.id">
            <img :src="item.src" alt @click="show(index)" class="previewer-img">
            <strong>{{item.AttachmentName}}</strong>
            <span>{{item.Time}}</span>
          </div>
        </div>
        <h2 v-if="enclosureList.length != '0'" class="PMD-Files-title">文档信息</h2>
        <div class="PMDF-con" v-if="enclosureList.length != '0'">
          <div class="PMDF-box" v-for="item in enclosureList" :key="item.id">
            <a :href="item.href" target="_self">
              <img src="../../assets/img/enclosure-icon.png" alt>
            </a>
            <strong>{{item.AttachmentName}}</strong>
            <span>{{item.Time}}</span>
          </div>
        </div>
        <img
          src="../../assets/img/no-pic.png"
          class="PMDF-nothing"
          alt
          v-if="enclosureList.length == '0' && pictureList.length == '0'"
        >
      </div>
    </div>
    <!-- <strong class="foot-big-blue-btn" @click="gotoUpadate()">进度更新</strong> -->
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
      pictureList: [], //图片列表
      enclosureList: [], //附件列表
      tabIndex: "0", //tab切换的index值
      PMDmessage: [], //基本信息  列表
      progressList: [], //进度情况  列表
      showLoading: false, //加载动画
      AllLoading: false, //数据加载完毕
      options: {
        getThumbBoundsFn(index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll(".previewer-img")[index];
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
      post("/API/PoorHelpAPI/GetProjectDetail", params)
        .then(resp => {
          if (resp.ret == "0") {
            let imgStr = /\.(jpg|jpeg|png|bmp|gif|JPG|JPEG|PNG|BMP|GIF)$/;
            // 基本信息Tab
            that.PMDmessage = resp.data[0].Info;
            that.PMDmessage.StartTime = that.date = Utils.dateFormatter(
              Utils.dateTransformerFromDateStr(resp.data[0].Info.StartOn),
              "yyyy-MM-dd"
            );
            that.PMDmessage.EndTime = that.date = Utils.dateFormatter(
              Utils.dateTransformerFromDateStr(resp.data[0].Info.EndOn),
              "yyyy-MM-dd"
            );
            // 进度情况Tab
            for (let i = 0; i < resp.data[0].Progress.length; i++) {
              resp.data[0].Progress[i].date = that.date = Utils.dateFormatter(
                Utils.dateTransformerFromDateStr(
                  resp.data[0].Progress[i].UpdateTime
                ),
                "yyyy-MM-dd"
              );
              resp.data[0].Progress[i].indexBall =
                resp.data[0].Progress.length - i;
              if (typeof resp.data[0].Progress[i].ItemSchedule == "string") {
                resp.data[0].Progress[i].ItemSchedule = resp.data[0].Progress[
                  i
                ].ItemSchedule.replace("%", "");
              } else {
                resp.data[0].Progress[i].ItemSchedule = "0";
              }
              // 进度中的附件
              let imgList = [];
              for (let j = 0; j < resp.data[0].Progress[i].Files.length; j++) {
                let imgSrc =
                  Utils.filePathPrefix() +
                  "/System/File/Download?Id=" +
                  JSON.stringify(
                    resp.data[0].Progress[i].Files[j].AttachmentId
                  ).replace(/"/g, "");
                //如果是img附件则传给图片地址
                if (
                  imgStr.test(resp.data[0].Progress[i].Files[j].AttachmentType)
                ) {
                  imgList.push({
                    src: imgSrc
                  });
                } else {
                  //如果是其他附件则传给使用附件图片
                  imgList.push({
                    src: require("../../assets/img/enclosure-icon.png")
                  });
                }
              }
              resp.data[0].Progress[i].imgs = imgList;
            }
            that.progressList = resp.data[0].Progress;
            // 附件信息Tab
            for (let k = 0; k < resp.data[0].File.length; k++) {
              let imgSrc =
                Utils.filePathPrefix() +
                "/System/File/Download?Id=" +
                JSON.stringify(resp.data[0].File[k].AttachmentId).replace(
                  /"/g,
                  ""
                );
              //判断图片类型或其他文档类型
              if (imgStr.test(resp.data[0].File[k].AttachmentType)) {
                resp.data[0].File[k].src = imgSrc;
                // 时间
                resp.data[0].File[k].Time = that.date = Utils.dateFormatter(
                  Utils.dateTransformerFromDateStr(
                    resp.data[0].File[k].CreatedOn
                  ),
                  "yyyy-MM-dd"
                );
                that.pictureList.push(resp.data[0].File[k]);
              } else {
                resp.data[0].File[k].href = imgSrc;
                // 时间
                resp.data[0].File[k].Time = that.date = Utils.dateFormatter(
                  Utils.dateTransformerFromDateStr(
                    resp.data[0].File[k].CreatedOn
                  ),
                  "yyyy-MM-dd"
                );
                that.enclosureList.push(resp.data[0].File[k]);
              }
            }
            that.AllLoading = true;
          } else {
            Utils.toast(that, resp.umsg);
          }
          Utils.hideLoading(that);
        })
        .catch(err => {
          Utils.toast(that, "获取数据错误");
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