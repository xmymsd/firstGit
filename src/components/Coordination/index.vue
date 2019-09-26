<style>
.Coordination-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.Coordination-con {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 1.04rem);
}
.Coordination-foot {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.04rem;
  padding: 0 0.7rem;
  z-index: 9;
  background: #fff;
}
.Coordination-left-btn,
.Coordination-right-btn {
  position: relative;
  width: 1.2rem;
  height: 1.04rem;
  padding-top: 0.2rem;
  margin-top: -0.9rem;
  cursor: pointer;
}
.Coordination-left-btn span,
.Coordination-right-btn span {
  display: block;
  width: 0.42rem;
  height: 0.4rem;
  margin: 0 auto;
}
.Coordination-left-btn span {
  background: url(../../assets/img/pending-icon.png) no-repeat;
  background-size: 100% 100%;
}
.Coordination-left-btn.active span {
  background: url(../../assets/img/pending-icon-active.png) no-repeat;
  background-size: 100% 100%;
}
.Coordination-right-btn span {
  background: url(../../assets/img/my-icon.png) no-repeat;
  background-size: 100% 100%;
}
.Coordination-right-btn.active span {
  background: url(../../assets/img/my-icon-active.png) no-repeat;
  background-size: 100% 100%;
}
.Coordination-left-btn strong,
.Coordination-right-btn strong {
  display: block;
  font-size: 0.2rem;
  line-height: 0.4rem;
  color: #333;
  text-align: center;
}
.Coordination-left-btn em,
.Coordination-right-btn em {
  position: absolute;
  top: 0;
  right: 0.2rem;
  display: block;
  width: 0.36rem;
  height: 0.36rem;
  font-size: 0.18rem;
  line-height: 0.36rem;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  background: #fe5354;
}
.Coordination-left-btn.active strong,
.Coordination-right-btn.active strong {
  color: #5585f0;
}
.Coordination-wrap .add-task-btn {
  display: block;
  width: 0.76rem;
  height: 0.76rem;
  margin: 0.14rem auto 0;
  background: url(../../assets/img/add-task-btn.png) no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
</style>

<template>
  <div class="Coordination-wrap">
    <div class="Coordination-con">
      <vLeft v-show="selectIndex == 0" v-if="loading"></vLeft>
      <vRight v-show="selectIndex == 1" v-if="loading"></vRight>
    </div>
    <div class="Coordination-foot">
      <strong class="add-task-btn" @click="gotoAddTask()"></strong>
      <div
        class="Coordination-left-btn float-l"
        :class="{'active': selectIndex == 0}"
        @click="changeIndex(0)"
      >
        <span></span>
        <strong>待处理</strong>
        <em v-if="showPendingNum">{{pendingNum}}</em>
      </div>
      <div
        class="Coordination-right-btn float-r"
        :class="{'active': selectIndex == 1}"
        @click="changeIndex(1)"
      >
        <span></span>
        <strong>我的</strong>
      </div>
    </div>
  </div>
</template>

<script>
import { get, post } from "../../api/http";
import Utils from "../common/Utils";
import vLeft from "./Pending";
import vRight from "./My";
export default {
  data() {
    return {
      selectIndex: 0,
      loading: false, //初始化完成后，才加载待处理和我的页面
      showPendingNum: false, //显示待处理数量
      pendingNum: "0" //待处理 标记数量
    };
  },
  mounted() {
    Utils.checkLoginStatus(this, () => {
      this.getTaskNum();
      this.loading = true;
    });
  },
  methods: {
    changeIndex(index) {
      this.selectIndex = index;
    },
    // 页面跳转
    gotoAddTask() {
      Utils.route(this, "./AddTask");
    },
    getTaskNum() {
      let that = this;
      let params = JSON.stringify({
        UserId: that.$store.state.user.WechatId, //微信id
        Name: "" //关键字
      });
      post("/API/PoorHelpAPI/MissionInfoUndoByUser", params)
        .then(resp => {
          Utils.hideLoading(that);
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            that.pendingNum = resp.data.Total;
            if (that.pendingNum == 0 || that.pendingNum == undefined) {
              that.showPendingNum = false;
            } else {
              that.showPendingNum = true;
            }
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "获取待处理数量错误");
        });
    }
  },
  components: {
    vLeft,
    vRight
  }
};
document.title = "任务协同";
</script>