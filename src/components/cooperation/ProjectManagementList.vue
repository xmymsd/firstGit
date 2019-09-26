<style>
.ProjectManagementList-wrap {
  background: #f4f4f4;
}
.ProjectManagementList-head {
  padding: 0.25rem 0.3rem;
  font-size: 0;
  background: #fff;
  border-bottom: 0.01rem solid #e0e0e0;
}
.ProjectManagementList-head .mobileSelect-box {
  width: 3.4rem;
  height: 0.58rem;
  margin-bottom: 0.1rem;
  vertical-align: top;
}
.ProjectManagementList-head .mobileSelect-box:first-child {
  margin-right: 0.1rem;
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
.ProjectManagementList-wrap.XMGL-wrap .ProjectManagement-inner span {
  display: inline-block;
  width: 1.55rem;
  min-height: 0.46rem;
  line-height: 0.46rem;
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
.ProjectManagementList-wrap.XMGL-wrap .ProjectManagementList-con.mescroll {
  position: absolute;
  top: 1.77rem;
  left: 0;
  width: 100%;
  height: calc(100% - 1.77rem);
}
.mescroll-upwarp {
  font-size: 0.2rem;
}
</style>

<template>
  <div class="ProjectManagementList-wrap XMGL-wrap">
    <!-- 头部筛选 -->
    <div class="ProjectManagementList-head">
      <div class="mobileSelect-box" @click="ShowStatePup()">{{wStateName}}</div>
      <div class="mobileSelect-box" @click="ShowTypePup()">{{wTypeName}}</div>
      <div class="ProjectManagementList-query">
        <input type="text" v-model="ProName" />
      </div>
    </div>
    <div class="ProjectManagementList-con mescroll" ref="mescroll">
      <ul>
        <li v-for="item in ProList" :key="item.id" @click="gotoDetails(item.Id)">
          <div class="ProjectManagement-head">
            <img src="../../assets/img/obj-icon.png" alt />
            <strong>{{item.ItemName}}</strong>
          </div>
          <div class="ProjectManagement-con">
            <img :src="item.src" alt />
            <div class="ProjectManagement-inner">
              <strong>项目状态</strong>
              <span>{{item.state}}</span>
              <strong>项目进度</strong>
              <span>{{item.ItemSchedule}}</span>
              <strong>项目类型</strong>
              <span>{{item.ItemType}}</span>
              <div class="ProjectManagement-schedule-box">
                <em :style="{width:item.ItemSchedule}"></em>
              </div>
            </div>
          </div>
          <div class="ProjectManagement-footer">
            <strong class="float-r" @click.stop="gotoUpdate(item.Id)">进度更新</strong>
            <span>更新时间：{{item.Time}}</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 加载动画 -->
    <div class="loading-box">
      <loading v-model="showLoading"></loading>
    </div>
    <popup-picker :data="StateArr" :show.sync="showState" @on-change="onChangeState"></popup-picker>
    <popup-picker :data="TypeArr" :show.sync="showType" @on-change="onChangeType"></popup-picker>
  </div>
</template>

<script>
import MeScroll from "mescroll.js";
import "mescroll.js/mescroll.min.css";
import { get, post } from "../../api/http";
import Utils from "../common/Utils";
import { Loading, PopupPicker } from "vux";
export default {
  components: {
    Loading,
    PopupPicker
  },
  data() {
    return {
      page: "0",
      pageSize: "10",
      wState: "",
      wStateName: "",
      wType: "",
      wTypeName: "",
      ProName: "", //项目名称
      showLoading: false, //加载动画
      mescroll: null, // mescroll实例对象
      ProList: [], //项目列表数据
      hasOtherData: true, //还有其他数据，用来判断是否继续加载
      // popupPicker的组件
      showState: false,
      showType: false,
      StateArr: [],
      TypeArr: []
    };
  },
  mounted() {
    Utils.checkLoginStatus(this, () => {
      this.init();
      this.initMescroll();
    });
  },
  methods: {
    // 获取下拉选项
    init() {
      let that = this;
      Utils.showLoading(that);
      let stateParams = JSON.stringify({
        Type: "ItemState"
      });
      post("/API/PoorHelpAPI/GetDictList", stateParams)
        .then(resp => {
          if (resp.ret == "0") {
            let StateList = [];
            that.wStateName = "全部";
            that.wState = "";
            for (let i = 0; i < resp.data.length; i++) {
              StateList.push({
                name: resp.data[i].Name,
                value: resp.data[i].Code
              });
            }
            let selectAll = { name: "全部", value: "" };
            StateList.unshift(selectAll);
            that.StateArr.push(StateList);
          } else {
            Utils.toast(that, resp.umsg);
          }
        })
        .catch(err => {
          Utils.toast(that, "获取数据错误");
        });
      let typeParams = JSON.stringify({
        Type: "ItemType"
      });
      post("/API/PoorHelpAPI/GetDictList", typeParams)
        .then(resp => {
          if (resp.ret == "0") {
            let TypeList = [];
            that.wTypeName = "全部";
            that.wType = "";
            for (let i = 0; i < resp.data.length; i++) {
              TypeList.push({
                name: resp.data[i].Name,
                value: resp.data[i].Code
              });
            }
            let selectAll = { name: "全部", value: "" };
            TypeList.unshift(selectAll);
            that.TypeArr.push(TypeList);
          } else {
            Utils.toast(that, resp.umsg);
          }
        })
        .catch(err => {
          Utils.toast(that, "获取数据错误");
        });
    },
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
      let SelectType;
      if (that.NqueryType == "全部") {
        SelectType = "";
      } else {
        SelectType = that.NqueryType;
      }
      let params = JSON.stringify({
        // UserId: that.UserId,
        StartRecord: that.page,
        PageSize: that.pageSize,
        State: that.wState,
        Type: that.wType,
        Name: that.ProName
      });
      post("/API/PoorHelpAPI/GetProjectManagementList", params)
        .then(resp => {
          this.mescroll.endSuccess();
          if (resp.ret == "0") {
            if (that.hasOtherData) {
              for (let i = 0; i < resp.data[0].List.length; i++) {
                // 项目更新时间
                resp.data[0].List[i].Time = Utils.dateFormatter(
                  Utils.dateTransformerFromDateStr(
                    resp.data[0].List[i].ModifiedOn
                  ),
                  "yyyy-MM-dd"
                );
                // 图片附件的获取
                let imgStr = /\.(jpg|jpeg|png|bmp|gif|JPG|JPEG|PNG|BMP|GIF)$/;
                let imgSrc = "";
                for (let j = 0; j < resp.data[0].List[i].File.length; j++) {
                  if (
                    imgStr.test(resp.data[0].List[i].File[j].AttachmentType)
                  ) {
                    imgSrc =
                      Utils.filePathPrefix() +
                      "/System/File/Download?Id=" +
                      JSON.stringify(
                        resp.data[0].List[i].File[j].AttachmentId
                      ).replace(/"/g, "");
                    break;
                  } else {
                    imgSrc = require("../../assets/img/no-pic.png");
                  }
                }
                if (resp.data[0].List[i].File.length == "0") {
                  imgSrc = require("../../assets/img/no-pic.png");
                }
                resp.data[0].List[i].src = imgSrc;
                // 项目状态
                if (resp.data[0].List[i].ItemSchedule == "100%") {
                  resp.data[0].List[i].state = "已完成";
                } else {
                  resp.data[0].List[i].state = "进行中";
                }
                that.ProList.push(resp.data[0].List[i]);
                Utils.hideLoading(that);
                that.page = that.ProList.length - 1;
              }
              if (resp.data[0].List.length < that.pageSize) {
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
      let params = { path: `/ProjectManagementDetails/` + Id };
      Utils.route(this, params);
    },
    // 进入项目进度更新
    gotoUpdate(Id) {
      let params = { path: `/ProjectManagementUpdate/` + Id };
      Utils.route(this, params);
    },
    // 显示popupPick
    ShowStatePup() {
      this.showState = true;
    },
    ShowTypePup() {
      this.showType = true;
    },
    // 选择改变状态
    onChangeState(val) {
      let that = this;
      that.wState = val[0];
      if (
        !!that.StateArr &&
        !!that.StateArr[0] &&
        that.StateArr[0] instanceof Array
      ) {
        for (let i = 0; i < that.StateArr[0].length; i++) {
          if (val[0] == that.StateArr[0][i].value) {
            this.wStateName = that.StateArr[0][i].name;
          }
        }
      }
    },
    // 选择改变类型
    onChangeType(val) {
      let that = this;
      that.wType = val[0];
      if (
        !!that.TypeArr &&
        !!that.TypeArr[0] &&
        that.TypeArr[0] instanceof Array
      ) {
        for (let i = 0; i < that.TypeArr[0].length; i++) {
          if (val[0] == that.TypeArr[0][i].value) {
            this.wTypeName = that.TypeArr[0][i].name;
          }
        }
      }
    }
  },
  watch: {
    wState() {
      this.refresh();
    },
    wType() {
      this.refresh();
    },
    ProName() {
      this.refresh();
    }
  }
};
document.title = "项目管理";
</script>