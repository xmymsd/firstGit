<style>
.Pending-wrap {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f7f7f7;
}
.Pending-head {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.91rem;
  padding: 0.15rem;
  background: #fff;
  border-bottom: 0.01rem solid #e0e0e0;
}
.Pending-head::after {
  content: "";
  position: absolute;
  top: 0.32rem;
  left: 0.27rem;
  width: 0.3rem;
  height: 0.27rem;
  background: url(../../assets/img/query-icon.png) no-repeat;
  background-size: 100% 100%;
}
.Pending-head input {
  display: block;
  width: 100%;
  height: 0.6rem;
  padding: 0 0.5rem;
  border: none;
  font-size: 0.24rem;
  background: #f3f4f7;
  border-radius: 0.05rem;
}
.Pending-center {
  position: absolute;
  overflow-y: auto;
  top: 0.91rem;
  left: 0;
  width: 100%;
  height: calc(100% - 0.91rem);
}
.Pending-Statistics {
  width: 100%;
  padding: 0 0.3rem;
  font-size: 0;
}
.Pending-Statistics span {
  position: relative;
  display: inline-block;
  padding: 0.2rem 0 0.2rem 0.3rem;
  line-height: 0.4rem;
  font-size: 0.22rem;
  vertical-align: top;
}
.Pending-Statistics span:not(:last-child) {
  width: 28%;
}
.Pending-Statistics span:last-child {
  width: 16%;
}
.Pending-Statistics span::after {
  position: absolute;
  content: "■";
  top: 0;
  left: 0;
  line-height: 0.75rem;
  font-size: 0.3rem;
}
.Pending-Statistics span:nth-child(1)::after {
  color: #ff548f;
}
.Pending-Statistics span:nth-child(2)::after {
  color: #ff9900;
}
.Pending-Statistics span:nth-child(3)::after {
  color: #60e188;
}
.Pending-Statistics span:nth-child(4)::after {
  color: #999999;
}
.Pending-con {
  padding: 0 0.3rem;
}
.Pending-box {
  overflow: hidden;
  background: #fff;
  font-size: 0;
  padding: 0.16rem 0.25rem;
  border-radius: 0.07rem;
}
.Pending-box:not(:last-child) {
  margin-bottom: 0.3rem;
}
.Pending-box h2 {
  font-size: 0.32rem;
  line-height: 0.4rem;
  color: #0a1735;
  margin-bottom: 0.2rem;
}
.Pending-box.Pending-type1 {
  border-left: 0.07rem solid #999999;
}
.Pending-box.Pending-type2 {
  border-left: 0.07rem solid #60e188;
}
.Pending-box.Pending-type3 {
  border-left: 0.07rem solid #ff9900;
}
.Pending-box.Pending-type4 {
  border-left: 0.07rem solid #ff548f;
}
.Pending-box span {
  display: inline-block;
  padding: 0 0.1rem;
  margin-top: 0.1rem;
  line-height: 0.34rem;
  border-radius: 0.02rem;
  font-size: 0.22rem;
}
.Pending-box span.state1 {
  color: #5c8fff;
  background: #e8efff;
}
.Pending-box span.state2 {
  color: #fff;
  background: #ff5254;
}
.Pending-box span.state3 {
  color: #fff;
  background: #e3e4e8;
}
.Pending-box span.state4 {
  color: #fff;
  background: #888;
}
.Pending-box img {
  display: block;
  float: right;
  width: 0.5rem;
  height: 0.5rem;
}
.Pending-bottom {
  font-size: 0.18rem;
  color: #888;
  text-align: center;
  line-height: 0.8rem;
}
.Pending-wrap .noTaskList {
  padding-top: 2.4rem;
}
.Pending-wrap .noTaskList img {
  display: block;
  width: 100%;
  margin-bottom: 0.6rem;
}
.Pending-wrap .noTaskList span {
  display: block;
  font-size: 0.28rem;
  color: #888;
  text-align: center;
}
.Pending-wrap .noTaskList span strong {
  color: #5585f0;
  cursor: pointer;
}
</style>

<template>
  <div class="Pending-wrap">
    <div class="Pending-head">
      <input type="text" v-model="queryInput">
    </div>
    <div class="Pending-center" v-if="showAllList">
      <div class="Pending-Statistics" v-if="!noList">
        <span>紧急且重要-{{type1Num}}</span>
        <span>紧急但不重要-{{type2Num}}</span>
        <span>不紧急但重要-{{type3Num}}</span>
        <span>普通-{{type4Num}}</span>
      </div>
      <div class="Pending-con">
        <div
          class="Pending-box"
          @click="gotoDetails(item.Id)"
          :class="'Pending-type' + item.Type"
          v-for="item in List"
          :key="item.id"
        >
          <h2>{{item.Name}}</h2>
          <span :class="item.state">{{item.date}} 截止</span>
          <img :src="item.Avatar" alt>
        </div>
      </div>
      <p class="Pending-bottom" v-if="!noList">共 {{dataNum}} 任务</p>
      <div class="noTaskList" v-if="noList">
        <img src="../../assets/img/noTask.png" alt>
        <span>
          暂无任务,马上
          <strong @click="gotoAddTask()">新建任务</strong>
        </span>
      </div>
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
  data: function() {
    return {
      showAllList: false, //显示所有
      queryInput: "", //搜索关键字
      showLoading: false, //加载动画
      List: [], //所有数据列表
      type1Num: "",
      type2Num: "",
      type3Num: "",
      type4Num: "",
      dataNum: "", //任务数量
      noList: false //无数据
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
      let params = JSON.stringify({
        UserId: that.$store.state.user.WechatId, //微信id
        Name: that.queryInput //关键字
      });
      post("/API/PoorHelpAPI/MissionInfoUndoByUser", params)
        .then(resp => {
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            // console.log("数据", resp);
            // Utils.toast(that, "所有信息提交成功!");
            // Utils.route(that, "/Coordination");
            if (JSON.stringify(resp.data) != "{}") {
              that.type1Num = resp.data.Static.紧急且重要;
              that.type2Num = resp.data.Static.紧急但不重要;
              that.type3Num = resp.data.Static.不紧急但重要;
              that.type4Num = resp.data.Static.普通;
              that.dataNum = resp.data.Total;
              for (let i = 0; i < resp.data.List.length; i++) {
                resp.data.List[i].date = Utils.dateFormatter(
                  Utils.dateTransformerFromDateStr(resp.data.List[i].EndOn),
                  "yyyy-MM-dd"
                );
                if (resp.data.List[i].States == "进行中") {
                  resp.data.List[i].state = "state1";
                } else if (resp.data.List[i].States == "逾期") {
                  resp.data.List[i].state = "state2";
                } else if (resp.data.List[i].States == "超时") {
                  resp.data.List[i].state = "state3";
                } else if (resp.data.List[i].States == "已完成") {
                  resp.data.List[i].state = "state4";
                }
              }
              that.List = resp.data.List;
              if (that.List.length == "0") {
                that.noList = true;
              } else {
                that.noList = false;
              }
              that.showAllList = true;
            } else {
              that.showAllList = true;
              Utils.hideLoading(that);
              that.noList = true;
            }
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "获取数据错误");
        });
    },
    // 页面跳转
    gotoAddTask() {
      Utils.route(this, "./AddTask");
    },
    // 跳转到详情
    gotoDetails(id) {
      Utils.route(this, "./TaskMessageDetails/" + id);
    }
  },
  watch: {
    queryInput() {
      this.init();
    }
  }
};
document.title = "协同任务";
</script>