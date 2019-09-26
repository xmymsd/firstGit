<style>
.ProjectManagementList-wrap {
  background: #f4f4f4;
}
.ProjectManagementList-query {
  width: 100%;
  height: 0.58rem;
  padding-right: 1rem;
  padding-left: 0.14rem;
  background: #f4f4f4 url(../../assets/img/query-icon.png) 6.48rem 0.17rem
    no-repeat;
  background-size: 0.26rem 0.24rem;
}
.ProjectManagementList-query input {
  display: block;
  width: 100%;
  height: 0.58rem;
  border: none;
  background: none;
  font-size: 0.24rem;
  color: #333;
}
.ProjectManagementList-con {
  padding: 0.2rem 0.3rem;
}
.ProjectManagementList-con li {
  display: block;
  margin-bottom: 0.2rem;
}
.ProjectManagement-head {
  position: relative;
  padding: 0.32rem 0.3rem;
  background: #fff;
  font-size: 0;
  border-bottom: 0.01rem solid #e0e0e0;
}
.ProjectManagement-head::after {
  position: absolute;
  top: 0.46rem;
  right: 0.2rem;
  content: "";
  width: 0.1rem;
  height: 0.1rem;
  border-left: 0.01rem solid #767676;
  border-top: 0.01rem solid #767676;
  transform: rotate(135deg);
}
.ProjectManagement-head img {
  display: inline-block;
  width: 0.3rem;
  height: 0.34rem;
  margin-right: 0.17rem;
}
.ProjectManagement-head strong {
  overflow: hidden;
  display: inline-block;
  width: 5.6rem;
  height: 0.34rem;
  font-size: 0.32rem;
  color: #333;
  line-height: 0.34rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}
.ProjectManagement-con {
  padding: 0.3rem;
  background: #fff;
  font-size: 0;
}
.ProjectManagement-con img {
  display: inline-block;
  width: 2.7rem;
  height: 2.1rem;
  margin-right: 0.5rem;
  vertical-align: top;
  object-fit: cover;
}
.ProjectManagement-inner {
  display: inline-block;
  width: 2.9rem;
  vertical-align: top;
}
.ProjectManagement-inner strong {
  display: inline-block;
  width: 1.33rem;
  height: 0.46rem;
  line-height: 0.46rem;
  font-size: 0.24rem;
  color: #888;
}
.GZGB-wrap .ProjectManagement-inner span {
  display: inline-block;
  font-size: 0.24rem;
  color: #333;
}
.ProjectManagement-schedule-box {
  height: 0.16rem;
  margin-top: 0.3rem;
  border-radius: 0.08rem;
  background: #f4f4f4;
}
.ProjectManagement-schedule-box em {
  float: left;
  display: block;
  height: 0.16rem;
  border-radius: 0.08rem;
  background: #0ebdca;
}
.ProjectManagement-footer {
  padding: 0.16rem 0.3rem;
  background: #fff;
  border-top: 0.01rem solid #e0e0e0;
}
.ProjectManagement-footer strong {
  display: block;
  height: 0.52rem;
  padding: 0 0.12rem;
  background: #4b89f7;
  font-size: 0.24rem;
  color: #fff;
  line-height: 0.52rem;
  border-radius: 0.08rem;
  cursor: pointer;
}
.ProjectManagement-footer span {
  display: block;
  font-size: 0.24rem;
  line-height: 0.52rem;
  color: #888;
}
.mescroll-upwarp {
  font-size: 0.2rem;
}
.GZGB-wrap .ProjectManagement-con img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.3rem;
}
.GZGB-wrap .ProjectManagement-inner {
  width: 4.5rem;
}
.GZGB-wrap .ProjectManagement-inner span {
  width: 3rem;
}
.GZGB-wrap .ProjectManagement-head strong {
  font-weight: bold;
}
.GZGB-wrap .ProjectManagement-inner strong {
  width: 1.3rem;
}
.GZGB-wrap .ProjectManagement-inner strong,
.GZGB-wrap .ProjectManagement-inner span {
  line-height: 0.5rem;
  min-height: 0.5rem;
  vertical-align: top;
}
</style>

<template>
  <div class="ProjectManagementList-wrap GZGB-wrap">
    <div class="ProjectManagementList-con mescroll" ref="mescroll">
      <ul>
        <li v-for="item in ProList" :key="item.id" @click="gotoDetails(item.Id)">
          <div class="ProjectManagement-head">
            <strong>{{item.Name}}</strong>
          </div>
          <div class="ProjectManagement-con">
            <img src="../../assets/img/user-head.png" alt />
            <div class="ProjectManagement-inner">
              <strong>联系电话</strong>
              <span>{{item.Tel}}</span>
              <strong>职务层级</strong>
              <span>{{item.OldJobLevel}}</span>
              <strong>选派方向</strong>
              <span>{{item.BelongToArea}}-{{item.GoToArea}}</span>
            </div>
          </div>
          <div class="ProjectManagement-footer">
            <span>挂职时间：{{item.StartTime}} 至 {{item.EndTime}}</span>
          </div>
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
import MeScroll from "mescroll.js";
import "mescroll.js/mescroll.min.css";
import { get, post } from "../../api/http";
import Utils from "../common/Utils";
import { Loading } from "vux";
export default {
  components: {
    Loading
  },
  data() {
    return {
      ThisYear: "",
      wRegion: "",
      page: "0",
      pageSize: "10",
      Direction: "", //缓存过来的参数
      OldJobLevel: "", //缓存过来的参数
      showLoading: false, //加载动画
      mescroll: null, // mescroll实例对象
      ProList: [], //项目列表数据
      hasOtherData: true //还有其他数据，用来判断是否继续加载
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
      that.urlParams = Utils.getCookie(that, "urlParams");
      that.ThisYear = Utils.getCookie(that, "selectYear");
      that.wRegion = Utils.getCookie(that, "selectAddress");
      that.Direction = Utils.getCookie(that, "Direction");
      that.OldJobLevel = Utils.getCookie(that, "OldJobLevel");
      that.initMescroll();
      that.getList()
    },
    // 实例化下拉加载组建
    initMescroll() {
      this.mescroll = new MeScroll(this.$refs.mescroll, {
        down: {
          // callback: this.refresh
          isLock: true
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
      this.ProList = [];
      this.hasOtherData = true;
      this.getList();
    },
    // 加载更多
    loadMore() {
      this.getList();
    },
    // 数据请求
    getList() {
      let that = this;
      Utils.showLoading(that);
      let params = JSON.stringify({
        Year: that.ThisYear,
        ReportArea: that.wRegion,
        Year: that.ThisYear,
        StartRecord: that.page,
        PageSize: that.pageSize,
        Direction: that.Direction,
        OldJobLevel: that.OldJobLevel
      });
      console.log("params", params);
      post("/API/PoorHelpAPI/GetTalentList", params)
        .then(resp => {
          this.mescroll.endSuccess();
          if (resp.ret == "0") {
            console.log("resp", resp);
            if (that.hasOtherData) {
              for (let i = 0; i < resp.data.length; i++) {
                //干部挂职开始时间
                resp.data[i].StartTime = Utils.dateFormatter(
                  Utils.dateTransformerFromDateStr(resp.data[i].StartOn),
                  "yyyy-MM-dd"
                );
                // 干部挂职结束时间
                resp.data[i].EndTime = Utils.dateFormatter(
                  Utils.dateTransformerFromDateStr(resp.data[i].EndOn),
                  "yyyy-MM-dd"
                );
                that.ProList.push(resp.data[i]);
                that.page = that.ProList.length;
                Utils.hideLoading(that);
              }
              if (resp.data.length < that.pageSize) {
                that.hasOtherData = false;
                Utils.hideLoading(that);
                that.mescroll.endUpScroll(true);
              }
            }
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
    // 进入详情详情
    gotoDetails(Id) {
      let params = { path: `/ZYRCDetails/` + Id };
      Utils.route(this, params);
    }
  }
};
document.title = "专业人才";
</script>