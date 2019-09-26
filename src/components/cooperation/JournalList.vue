<style>
.JournalList-wrap {
  background: #f4f4f4;
}
.JournalList-con {
  position: relative;
  height: calc(100% - 2.27rem);
}
.JournalList-con.active {
  height: calc(100% - 1rem);
}
.JournalList-con .mescroll {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0.3rem;
}
.LogList-box {
  display: block;
  height: 3.28rem;
  padding: 0 0.3rem 0.3rem 0.3rem;
  margin-bottom: 0.2rem;
  background: #fff;
}
.LogTime {
  position: relative;
  height: 0.58rem;
  margin-bottom: 0.3rem;
  font-size: 0.24rem;
  color: #333;
  line-height: 0.57rem;
  border-bottom: 0.01rem solid #e0e0e0;
}
.LogTime:after {
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
.LogCon img.newsImg {
  display: block;
  float: left;
  width: 2.7rem;
  height: 2.1rem;
  font-size: 0.24rem;
  object-fit: cover;
}
.LogCon .LogCon-r {
  float: right;
  width: 3.3rem;
}
.LogCon .LogCon-r strong {
  display: block;
  margin-bottom: 0.1rem;
  font-size: 0.32rem;
  color: #333;
}
.LogCon .LogCon-r p {
  display: -webkit-box;
  max-height: 1.52rem;
  font-size: 0.24rem;
  color: #888;
  line-height: 0.38rem;
  text-align: justify;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
.JournalList-head {
  padding: 0.15rem 0.3rem;
  background: #fff;
}
.JournalList-selectDate {
  position: relative;
  height: 0.55rem;
  background: #f4f4f4;
  border-radius: 0.1rem;
  padding-left: 0.11rem;
  font-size: 0.24rem;
  color: #888;
  line-height: 0.55rem;
  cursor: pointer;
}
.JournalList-selectDate::after {
  content: "";
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  width: 0.1rem;
  height: 0.1rem;
  border-left: 0.01rem solid #767676;
  border-top: 0.01rem solid #767676;
  transform: rotate(-135deg);
}
.JournalList-wrap .mescroll-upwarp {
  display: none !important;
}
</style>

<template>
  <div class="JournalList-wrap">
    <div class="JournalList-head">
      <div class="JournalList-selectDate" @click="openPicker()">{{ selectDate || '请选择日期'}}</div>
    </div>
    <div class="JournalList-con" :class="{active:isLead}">
      <div class="mescroll" ref="mescroll">
        <div
          @click="gotoUrl('/JournalDetails/'+ item.Id)"
          class="LogList-box"
          v-for="item in JournalList"
          :key="item.id"
        >
          <div class="LogTime">{{item.Time}}</div>
          <div class="LogCon">
            <img :src="item.src" class="newsImg">
            <div class="LogCon-r">
              <strong>日志内容</strong>
              <p>{{item.Content}}</p>
            </div>
          </div>
        </div>
      </div>
      <template>
        <mt-datetime-picker ref="picker" type="date" v-model="pickerValue" @confirm="dateConfirm()"></mt-datetime-picker>
      </template>
    </div>
    <strong class="foot-big-blue-btn" @click="gotoUrl('/AddJournal')" v-if="!isLead">+添加日志</strong>
    <!-- 加载动画 -->
    <div class="loading-box">
      <loading v-model="showLoading"></loading>
    </div>
  </div>
</template>

<script>
import MeScroll from "mescroll.js";
import "mescroll.js/mescroll.min.css";
import { get, post } from "../../api/http";
import Utils from "../common/Utils";
import { Loading } from "vux";
import { DatetimePicker } from "mint-ui";
export default {
  components: {
    Loading
  },
  data: function() {
    return {
      mescroll: null, // mescroll实例对象
      userId: "", //用户ID
      pickerValue: "", //日期
      selectDate: "", //显示的日期
      JournalList: [], //日志列表
      isLead: false, //是否领导
      page: "0",
      pageSize: "10",
      noMore: false, //无更多数据
      showLoading: false //加载动画
    };
  },
  mounted() {
    Utils.checkLoginStatus(this, () => {
      this.initMescroll();
    });
  },
  methods: {
    // 实例化下拉加载组建
    initMescroll() {
      this.mescroll = new MeScroll(this.$refs.mescroll, {
        down: {
          callback: this.refresh
        },
        up: {
          auto: false,
          callback: this.loadMore,
          htmlNodata: "<p class='upwarp-nodata'>-- 暂无更多数据 --</p>"
        }
      });
    },
    // 刷新
    refresh() {
      this.page = 0;
      this.JournalList = [];
      this.noMore = false;
      this.getList();
    },
    // 加载更多
    loadMore() {
      if (!this.noMore) {
        this.getList();
      }
    },
    // 请求数据
    getList() {
      let that = this;
      Utils.showLoading(that);
      if (that.$route.params.id == undefined) {
        that.userId = that.$store.state.user.UserId;
      } else {
        that.isLead = true;
        that.userId = that.$route.params.id;
      }
      let NowDate = this.selectDate;
      NowDate = NowDate.replace(/-/g, "/");
      let params = JSON.stringify({
        UserId: that.userId,
        Time: NowDate,
        StartRecord: that.page,
        PageSize: that.pageSize
      });
      post("/API/PoorHelpAPI/GetWorkLogList", params)
        .then(resp => {
          this.mescroll.endSuccess();
          if (resp.ret == "0") {
            let imgStr = /\.(jpg|jpeg|png|bmp|gif|JPG|JPEG|PNG|BMP|GIF)$/;
            for (let i = 0; i < resp.data[0].List.length; i++) {
              resp.data[0].List[i].Time = Utils.dateFormatter(
                Utils.dateTransformerFromDateStr(resp.data[0].List[i].Time),
                "yyyy-MM-dd"
              );
              let imgSrc = "";
              if (resp.data[0].List[i].File.length != "0") {
                if (imgStr.test(resp.data[0].List[i].File[0].AttachmentType)) {
                  imgSrc =
                   Utils.filePathPrefix()+"/System/File/Download?Id=" +
                    JSON.stringify(
                      resp.data[0].List[i].File[0].AttachmentId
                    ).replace(/"/g, "");
                } else {
                  imgSrc = require("../../assets/img/no-pic.png");
                }
              } else {
                imgSrc = require("../../assets/img/no-pic.png");
              }
              resp.data[0].List[i].src = imgSrc;
              that.JournalList.push(resp.data[0].List[i]);
              if (that.JournalList.length >= resp.data[0].Total) {
                that.noMore = true;
              }
            }
            Utils.hideLoading(that);
            that.page = that.JournalList.length;
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "获取数据错误");
        });
    },
    // 打开时间选择器
    openPicker() {
      if (this.selectDate) {
        this.pickerValue = this.selectDate;
      } else {
        this.pickerValue = new Date();
      }
      this.$refs.picker.open();
    },
    // 选择时间后确定传值给标签
    dateConfirm() {
      this.selectDate = Utils.getMintUiDate(this.pickerValue);
    },
    gotoUrl(url) {
      Utils.route(this, url);
    }
  },
  watch: {
    selectDate() {
      this.refresh();
    }
  }
};
document.title = "日志列表";
</script>

