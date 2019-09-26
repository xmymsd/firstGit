<style>
.my-wrap {
  position: relative;
  height: 100%;
  background: #f7f7f7;
}
.my-head {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.91rem;
  padding: 0.15rem;
  background: #fff;
  border-bottom: 0.01rem solid #e0e0e0;
}
.my-head::after {
  content: "";
  position: absolute;
  top: 0.32rem;
  left: 0.27rem;
  width: 0.3rem;
  height: 0.27rem;
  background: url(../../assets/img/query-icon.png) no-repeat;
  background-size: 100% 100%;
}
.my-head input {
  display: block;
  float: left;
  width: 6.4rem;
  height: 0.6rem;
  padding: 0 0.5rem;
  border: none;
  font-size: 0.24rem;
  background: #f3f4f7;
  border-radius: 0.05rem;
}
.my-state-btn {
  display: block;
  float: right;
  width: 0.6rem;
  height: 0.6rem;
  background: url(../../assets/img/my-type-icon.png) center no-repeat;
  background-size: 0.47rem 0.6rem;
}
.my-tab-list {
  position: relative;
  padding: 0 0.3rem;
  font-size: 0;
  background: #fff;
  border-bottom: 0.01rem solid #e0e0e0;
}
.my-tab-list strong {
  display: inline-block;
  width: 33.3%;
  height: 0.9rem;
  line-height: 0.9rem;
  color: #888;
  font-size: 0.28rem;
  text-align: center;
  cursor: pointer;
}
.my-tab-list span {
  position: absolute;
  display: block;
  bottom: 0;
  width: 2.3rem;
  height: 0.06rem;
  background: #5585f0;
  transition: all 0.5s ease;
}
.my-tab-list strong.active:nth-last-child(4) ~ span {
  left: 0.3rem;
}
.my-tab-list strong.active:nth-last-child(3) ~ span {
  left: 2.6rem;
}
.my-tab-list strong.active:nth-last-child(2) ~ span {
  left: 4.9rem;
}
.my-tab-con {
  position: absolute;
  overflow-y: auto;
  top: 1.82rem;
  left: 0;
  width: 100%;
  height: calc(100% - 1.82rem);
}
.my-task-con {
  padding: 0 0.3rem;
}
.my-task-box {
  overflow: hidden;
  background: #fff;
  font-size: 0;
  padding: 0.16rem 0.25rem;
  border-radius: 0.07rem;
  margin-bottom: 0.3rem;
}
.my-task-box h2 {
  font-size: 0.32rem;
  line-height: 0.4rem;
  color: #0a1735;
  margin-bottom: 0.2rem;
  text-align: justify;
}
.my-task-box.my-task-type1 {
  border-left: 0.07rem solid #999999;
}
.my-task-box.my-task-type2 {
  border-left: 0.07rem solid #60e188;
}
.my-task-box.my-task-type3 {
  border-left: 0.07rem solid #ff9900;
}
.my-task-box.my-task-type4 {
  border-left: 0.07rem solid #ff548f;
}
.my-task-box span.state1 {
  color: #fff;
  background: #ff5254;
}
.my-task-box span.state2 {
  color: #5c8fff;
  background: #e8efff;
}
.my-task-box span.state3 {
  color: #fff;
  background: #e3e4e8;
}
.my-task-box span.state4 {
  color: #fff;
  background: #888;
}
.my-task-box span {
  display: inline-block;
  padding: 0 0.1rem;
  margin-top: 0.1rem;
  line-height: 0.34rem;
  border-radius: 0.02rem;
  font-size: 0.22rem;
}
.my-con-title {
  padding: 0 0.3rem;
  font-size: 0.2rem;
  color: #888;
  line-height: 0.8rem;
}
.Coordination-wrap .noTaskList {
  padding-top: 2.4rem;
}
.Coordination-wrap .noTaskList img {
  display: block;
  width: 100%;
  margin-bottom: 0.6rem;
}
.Coordination-wrap .noTaskList span {
  display: block;
  font-size: 0.28rem;
  color: #888;
  text-align: center;
}
.Coordination-wrap .noTaskList span strong {
  color: #5585f0;
  cursor: pointer;
}
.my-state-select {
  overflow: hidden;
  position: absolute;
  top: 0.91rem;
  left: 0;
  width: 100%;
  height: 0;
  z-index: 99;
}
.my-state-select.active {
  height: calc(100% - 0.91rem);
}
.my-state-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.my-state-select ul {
  position: relative;
  overflow: hidden;
  background: #fff;
  z-index: 2;
}
.my-state-select ul li {
  position: relative;
  display: block;
  height: 0;
  padding: 0 0.3rem;
  line-height: 0.8rem;
  font-size: 0.26rem;
  color: #333;
  cursor: pointer;
}
.my-state-select.active ul li {
  height: 0.8rem;
  transition: all 0.5s ease;
}
.my-state-select ul li:not(:last-child) {
  margin-bottom: 0.2rem;
}
.my-state-select ul li.active::after {
  position: absolute;
  right: 0.3rem;
  top: 0;
  content: "";
  height: 0.8rem;
  width: 0.8rem;
  background: url(../../assets/img/select-icon.png) center no-repeat;
  background-size: 0.48rem 0.48rem;
}
.my-wrap .noTask-img {
  display: block;
  width: 100%;
  margin-top: 3rem;
}
</style>

<template>
  <div class="my-wrap">
    <div class="my-head">
      <input type="text" v-model="queryInput">
      <strong class="my-state-btn" @click="showStateModal()"></strong>
    </div>
    <div class="my-state-select" :class="{active: showState}">
      <div class="my-state-bg" @click="showState = false"></div>
      <ul>
        <li :class="{'active': selectState == 1}" @click="changeState(1)">全部</li>
        <li :class="{'active': selectState == 2}" @click="changeState(2)">进行中</li>
        <li :class="{'active': selectState == 3}" @click="changeState(3)">已结束</li>
        <li :class="{'active': selectState == 4}" @click="changeState(4)">逾期</li>
      </ul>
    </div>
    <div class="my-tab-list">
      <strong :class="{'active': selectIndex == 'all'}" @click="changeIndex('all')">我发起的</strong>
      <strong :class="{'active': selectIndex == '0'}" @click="changeIndex('0')">我负责的</strong>
      <strong :class="{'active': selectIndex == '1'}" @click="changeIndex('1')">我相关的</strong>
      <span></span>
    </div>
    <div class="my-tab-con">
      <div class="my-tab-task-con" v-for="(List,key) in AllList" :key="List.id">
        <p class="my-con-title">{{key}} · {{List.length}}</p>
        <div class="my-task-con">
          <div
            class="my-task-box"
            :class="'my-task-type' + item.Type"
            v-for="item in List"
            :key="item.id"
            @click="getTaskDetails(item.Id)"
          >
            <h2>{{item.Name}}</h2>
            <span :class="item.state">{{item.EndOn}} 截止</span>
          </div>
        </div>
        <div class="noTaskList" v-if="List.length == '0'">
          <img src="../../assets/img/noTask.png" alt>
          <span>
            暂无任务,马上
            <strong @click="gotoAddTask()">新建任务</strong>
          </span>
        </div>
      </div>
      <img src="../../assets/img/noMessage.png" alt class="noTask-img" v-show="noData">
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
import { DatetimePicker } from "mint-ui";
export default {
  components: {
    Loading
  },
  data: function() {
    return {
      queryInput: "", //搜索关键字
      showState: false, //显示状态的下拉框
      selectState: "0", //状态  all为全部，0进行中，1已结束，2逾期,
      selectIndex: "all", //tab 选中下标
      AllList: {}, //数据列表
      noData: false, //无数据提示
      showLoading: false //加载动画
    };
  },
  mounted() {
    // Utils.checkLoginStatus(this, () => {
    this.init();
    // });
  },
  methods: {
    init() {
      let that = this;
      Utils.showLoading(that);
      let selectIndex;
      if (that.selectIndex == "all") {
        selectIndex == "";
      } else {
        selectIndex = that.selectIndex;
      }
      let params = JSON.stringify({
        UserId: that.$store.state.user.WechatId,
        Name: that.queryInput || "",
        States: that.selectState,
        UserType: selectIndex
      });
      // console.log("参数", params);
      post("/API/PoorHelpAPI/MissionInfoList", params)
        .then(resp => {
          Utils.hideLoading(that);
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            // console.log(resp.data);
            that.AllList = {};
            let DataKeyArr = ["逾期", "进行中", "已完成", "已结束"];
            for (let i = 0; i < DataKeyArr.length; i++) {
              let keyName = DataKeyArr[i];
              let StatesIndex = i + 1;
              if (resp.data[keyName]) {
                for (let j = 0; j < resp.data[keyName].length; j++) {
                  resp.data[keyName][j].EndOn = Utils.dateFormatter(
                    Utils.dateTransformerFromDateStr(
                      resp.data[keyName][j].EndOn
                    ),
                    "yyyy-MM-dd"
                  );
                  resp.data[keyName][j].state = "state" + StatesIndex;
                }
                that.AllList[keyName] = resp.data[keyName];
              }
            }
            if (JSON.stringify(that.AllList) == "{}") {
              that.noData = true;
            } else {
              that.noData = false;
            }
            Utils.hideLoading(that);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "获取数据失败");
        });
    },
    showStateModal() {
      let that = this;
      if (that.showState) {
        that.showState = false;
      } else {
        that.showState = true;
      }
    },
    changeIndex(index) {
      this.selectIndex = index;
      this.selectState = "1";
      this.init();
    },
    changeState(index) {
      let that = this;
      that.selectState = index;
      that.showState = false;
      this.init();
    },
    // 页面跳转
    gotoAddTask() {
      Utils.route(this, "./AddTask");
    },
    // 跳转到任务详情
    getTaskDetails(id) {
      Utils.route(this, "./TaskMessageDetails/" + id);
    }
  },
  watch: {
    queryInput() {
      this.init();
    }
  }
};
function isEmptyObject(obj) {
  var name;
  for (name in obj) {
    return false;
  }
  return true;
}
</script>

