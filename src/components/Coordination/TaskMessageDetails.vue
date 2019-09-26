<style>
.AddTask-wrap.TaskMessageDetails-wrap {
  padding: 0.2rem 0.3rem 1.1rem;
}
.AddTask-title {
  display: block;
  width: 100%;
  height: 0.8rem;
  padding: 0 0.2rem;
  margin-bottom: 0.3rem;
  font-size: 0.34rem;
  color: #333;
}
.AddTask-title-h1 {
  display: block;
  width: 100%;
  padding: 0 0.2rem;
  margin-bottom: 0.3rem;
  font-size: 0.34rem;
  color: #333;
}
.AddTask-textarea {
  display: block;
  width: 100%;
  height: 2rem;
  padding: 0.2rem;
  margin-bottom: 0.3rem;
  font-size: 0.28rem;
  color: #333;
  line-height: 0.44rem;
}
.AddTask-textarea-p {
  display: block;
  width: 100%;
  padding: 0.2rem;
  margin-bottom: 0.3rem;
  font-size: 0.28rem;
  color: #333;
  line-height: 0.44rem;
}
.AddTask-title-box {
  position: relative;
  height: 0.9rem;
  padding: 0.2rem 0;
  font-size: 0.28rem;
  color: #333;
  line-height: 0.5rem;
}
.AddTask-title-box i {
  display: block;
  float: left;
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.18rem;
}
.AddTask-wrap .person-icon {
  background: url(../../assets/img/person-icon.png) no-repeat;
  background-size: 100% 100%;
}
.AddTask-wrap .file-icon {
  background: url(../../assets/img/file-icon.png) no-repeat;
  background-size: 100% 100%;
}
.AddTask-wrap .relevant-icon {
  background: url(../../assets/img/relevant-icon.png) no-repeat;
  background-size: 100% 100%;
}
.AddTask-wrap .date-icon {
  background: url(../../assets/img/date-icon.png) no-repeat;
  background-size: 100% 100%;
}
.AddTask-wrap .label-icon {
  background: url(../../assets/img/label-icon.png) no-repeat;
  background-size: 100% 100%;
}
.AddTask-wrap .adjust-icon {
  background: url(../../assets/img/adjust-icon.png) no-repeat;
  background-size: 100% 100%;
}
.AddTask-wrap .schedule-icon {
  background: url(../../assets/img/schedule-icon.png) no-repeat;
  background-size: 100% 100%;
}
.AddTask-wrap .add-icon {
  display: block;
  float: right;
  width: 0.5rem;
  height: 0.5rem;
  background: url(../../assets/img/addTask-icon.png) no-repeat;
  background-size: 100% 100%;
}
.AddTask-wrap .file-con ul li {
  display: block;
  padding-left: 0.68rem;
  margin-bottom: 0.2rem;
  font-size: 0;
}
.AddTask-wrap.TaskMessageDetails-wrap .file-con ul li img {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.2rem;
}
.TaskMessageDetails-wrap .file-con ul .file-message-box {
  display: inline-block;
  width: 5rem;
  vertical-align: top;
}
.TaskMessageDetails-wrap .file-con ul .file-message-box strong {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.28rem;
  line-height: 0.8rem;
  color: #333;
}
.person-con {
  padding: 0.2rem 0 0.2rem 0.68rem;
  font-size: 0;
}
.person-con img {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.15rem 0.15rem 0;
  border-radius: 50%;
}
.AddTask-more-icon::after {
  position: absolute;
  display: block;
  content: "";
  top: 0.33rem;
  right: 0.1rem;
  width: 0.25rem;
  height: 0.25rem;
  border-top: 0.05rem solid #ccc;
  border-right: 0.05rem solid #ccc;
  transform: rotate(45deg);
}
.AddTask-data-box {
  margin-right: 0.2rem;
}
.label-type-box {
  display: block;
  float: left;
  height: 0.44rem;
  padding: 0 0.28rem;
  margin-top: 0.03rem;
  line-height: 0.44rem;
  border-radius: 0.06rem;
}
.label-type1 {
  border-left: 0.06rem solid #999;
  color: #999;
  background: #f6f6f8;
}
.label-type2 {
  border-left: 0.06rem solid #60e188;
  color: #60e188;
  background: #e5fcf4;
}
.label-type3 {
  border-left: 0.06rem solid #ff9900;
  color: #ff9900;
  background: #fff9ef;
}
.label-type4 {
  border-left: 0.06rem solid #ff548f;
  color: #ff548f;
  background: #fff2f6;
}
.label-modal {
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  padding: 0.3rem;
  background: #fff;
  z-index: 999;
  transition: all 0.5s ease;
}
.label-modal.active {
  left: 0;
}
.label-modal ul li {
  position: relative;
  display: block;
  height: 1.04rem;
  padding-left: 0.42rem;
  margin-bottom: 0.33rem;
  font-size: 0.32rem;
  line-height: 1.04rem;
  border-radius: 0.06rem;
  cursor: pointer;
}
.label-modal ul li.active::after {
  position: absolute;
  right: 0.3rem;
  top: 0;
  content: "";
  width: 0.6rem;
  height: 1.04rem;
  background: url(../../assets/img/select-icon.png) center no-repeat;
  background-size: 0.48rem 0.48rem;
}
.AddTask-footer {
  width: 7.5rem;
  padding-top: 0.2rem;
  margin-left: -0.3rem;
  border-top: 0.01rem solid #e0e0e0;
}
.AddTask-title-box .fileInput {
  position: absolute;
  right: 0;
  top: 0.2rem;
  display: block;
  width: 0.8rem;
  height: 0.5rem;
  opacity: 0;
}
.AddTask-title-box .AddTask-title-name {
  display: block;
  float: left;
  height: 0.5rem;
  line-height: 0.5rem;
  margin-right: 0.2rem;
}
.schedule-line-box {
  display: block;
  float: left;
  width: 4rem;
  height: 0.12rem;
  margin-top: 0.19rem;
  border-radius: 0.06rem;
  background: #f4f8fb;
}
.schedule-line-box span {
  display: block;
  float: left;
  height: 0.12rem;
  border-radius: 0.06rem;
  background: linear-gradient(to right, #6e90f1, #a8cff6);
}
.person-schedule-con ul li {
  display: block;
  height: 1.12rem;
  padding: 0.24rem 0.1rem 0 0.68rem;
}
.person-schedule-con ul li img {
  display: block;
  float: left;
  width: 0.64rem;
  height: 0.64rem;
  border-radius: 50%;
  margin-right: 0.1rem;
}
.person-schedule-con ul li strong {
  display: block;
  float: left;
  font-size: 0.3rem;
  color: #333;
  line-height: 0.64rem;
}
.person-schedule-con ul li div {
  display: block;
  float: right;
  width: 0.8rem;
  height: 0.8rem;
  margin-top: -0.16rem;
}
.MissionProgress {
  width: 7.5rem;
  margin-left: -0.3rem;
  border-top: 0.2rem solid #e0e0e0;
}
.MissionProgress .AddTask-title-box {
  padding-left: 0.3rem;
}
.MissionProgress-box {
  padding: 0.3rem;
  border-top: 0.01rem solid #e0e0e0;
  font-size: 0;
}
.MissionProgress-box img {
  display: block;
  float: left;
  width: 0.68rem;
  height: 0.68rem;
  border-radius: 0.04rem;
}
.MissionProgress-box div {
  padding-left: 0.84rem;
}
.MissionProgress-box div strong {
  display: block;
  font-size: 0.3rem;
  color: #333;
  margin-bottom: 0.15rem;
}
.MissionProgress-box div span {
  display: block;
  font-size: 0.24rem;
  color: #333;
  margin-bottom: 0.15rem;
  line-height: 0.4rem;
}
.MissionProgress-box div em {
  display: block;
  font-size: 0.24rem;
  color: #888;
}
.TaskMessageDetails-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 7.5rem;
  padding: 0.2rem 0;
  text-align: center;
  font-size: 0;
  background: #fff;
  border-top: 0.01rem solid #e0e0e0;
  z-index: 9;
}
.TaskMessageDetails-footer strong {
  display: inline-block;
  width: 50%;
  height: 0.6rem;
  font-size: 0.28rem;
  color: #333;
  line-height: 0.6rem;
  cursor: pointer;
}
.TaskMessageDetails-footer strong i {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  vertical-align: top;
}
.TaskMessageDetails-footer .update-icon {
  background: url(../../assets/img/update-icon.png) center no-repeat;
  background-size: 0.3rem 0.3rem;
}
.TaskMessageDetails-footer .over-icon {
  background: url(../../assets/img/over-icon.png) center no-repeat;
  background-size: 0.3rem 0.3rem;
}
.TaskMessageDetails-footer strong:not(:last-child) {
  border-right: 0.01rem solid #e0e0e0;
}
.TaskMessageDetails-wrap .mt-range-runway,
.TaskMessageDetails-wrap .mt-range-progress {
  border-radius: 0.1rem;
}
.Popup-model {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 2.2rem;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
}
.Popup-con {
  width: 6.75rem;
  margin: 0 auto;
  border-radius: 0.12rem;
  background: #fff;
}
.Popup-title {
  font-size: 0.32rem;
  color: #333;
  text-align: center;
  line-height: 0.86rem;
  border-bottom: 0.01rem solid #e0e0e0;
}
.Popup-box {
  padding: 0 0.3rem 0.3rem;
}
.Popup-box .updateSchedule {
  display: block;
  padding: 0.4rem 0 0.6rem;
  text-align: center;
  font-size: 0.28rem;
  color: #888;
}
.Popup-box .updateSchedule em {
  color: #5585f0;
  font-size: 0.48rem;
}
.Popup-box .mt-range-progress {
  background: linear-gradient(to right, #6e90f1, #a8cff6);
}
.Popup-model .mt-range-thumb {
  background: #fff url(../../assets/img/mt-range-btn.png) center no-repeat;
  background-size: 0.24rem 0.21rem;
}
.Popup-box textarea {
  display: block;
  width: 100%;
  padding: 0.2rem 0.3rem;
  margin-top: 0.3rem;
  background: #f7f8fa;
  border-radius: 0.06rem;
  font-size: 0.28rem;
  line-height: 0.44rem;
  color: #333;
  border: none;
}
.Popup-model .Popup-footer {
  border-top: 0.01rem solid #e0e0e0;
  font-size: 0;
}
.Popup-model .Popup-footer span,
.Popup-model .Popup-footer strong {
  display: inline-block;
  width: 50%;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.3rem;
  text-align: center;
  cursor: pointer;
}
.Popup-model .Popup-footer span {
  border-right: 0.01rem solid #e0e0e0;
  color: #888;
}
.Popup-model .Popup-footer strong {
  color: #5585f0;
}
.EndTask-title {
  font-size: 0.26rem;
  line-height: 0.6rem;
  margin-bottom: 0.2rem;
}
.EndTask-con {
  font-size: 0;
  text-align: center;
}
.EndTask-con label {
  display: inline-block;
  width: 2rem;
}
.EndTask-con label input {
  -webkit-appearance: none;
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  border: 0.03rem solid #e4e4e4;
  border-radius: 50%;
}
.EndTask-con label input:checked {
  border: 0.08rem solid #6291f9;
}
.EndTask-con label span {
  font-size: 0.3rem;
  color: #333;
  margin-left: 0.2rem;
  vertical-align: top;
  line-height: 0.36rem;
}
.tssj {
  padding: 0.3rem 0.3rem 3rem;
  font-size: 0.24rem;
  color: #333;
  word-wrap: break-word;
  overflow: hidden;
  word-break: break-all;
  user-select: text;
}
</style>

<template>
  <div class="AddTask-wrap TaskMessageDetails-wrap">
    <h1 class="AddTask-title-h1">{{title}}</h1>
    <p class="AddTask-textarea-p" v-if="describe != null">{{describe}}</p>
    <h2 class="AddTask-title-box" v-if="fileList.length != '0'">
      <i class="file-icon"></i>附件
    </h2>
    <div class="file-con" v-if="fileList.length != '0'">
      <ul>
        <li v-for="item in fileList" :key="item.id">
          <img src="../../assets/img/enclosure-icon.png" v-if="item.url == ''" alt>
          <img :src="item.url" v-else alt>
          <div class="file-message-box">
            <strong>{{item.AttachmentName}}</strong>
            <!-- <span>{{item.Size}}</span> -->
          </div>
        </li>
      </ul>
    </div>
    <h2 class="AddTask-title-box">
      <i class="label-icon"></i>
      <strong class="label-type-box label-type1" v-if="labelType == 0">普通</strong>
      <strong class="label-type-box label-type2" v-if="labelType == 1">不紧急但重要</strong>
      <strong class="label-type-box label-type3" v-if="labelType == 2">紧急但不重要</strong>
      <strong class="label-type-box label-type4" v-if="labelType == 3">紧急且重要</strong>
    </h2>
    <h2 class="AddTask-title-box">
      <i class="adjust-icon"></i>
      <span class="AddTask-title-name">平均进度</span>
      <div class="schedule-line-box">
        <span :style="{width: scheduleNum || 0 + '%'}"></span>
      </div>
      <span class="float-r">{{scheduleNum || 0}}</span>
    </h2>
    <h2 class="AddTask-title-box">
      <i class="person-icon"></i>负责人
    </h2>
    <div class="person-schedule-con">
      <ul>
        <li v-for="(item,index) in personScheduleList" :key="item.id">
          <img
            v-if="item.Avatar == '../../assets/img/user-head.png'"
            src="../../assets/img/user-head.png"
            alt
          >
          <img v-else :src="item.Avatar" alt>
          <strong>{{item.Name}}</strong>
          <div :id="'personSchedule' + index"></div>
        </li>
      </ul>
    </div>
    <h2 class="AddTask-title-box">
      <i class="date-icon"></i>
      <strong class="AddTask-data-box">{{selectStartDate}}</strong>开始
    </h2>
    <h2 class="AddTask-title-box">
      <i class="date-icon"></i>
      <strong class="AddTask-data-box">{{selectEndDate}}</strong>截止
    </h2>
    <!-- <div class="tssj">{{tssj}}</div> -->
    <div class="MissionProgress" v-if="MissionProgressList.length != '0'">
      <h2 class="AddTask-title-box">
        <i class="schedule-icon"></i>
        任务进展
        <span>（{{MissionProgressList.length}}）</span>
      </h2>
      <div class="MissionProgress-box" v-for="item in MissionProgressList" :key="item.id">
        <img :src="item.Avatar" alt>
        <div>
          <strong>{{item.Name}}</strong>
          <span>{{item.Note}}</span>
          <em>{{item.date}}</em>
        </div>
      </div>
    </div>
    <div class="TaskMessageDetails-footer" v-if="userType != '3'">
      <strong @click="showUpdate()" v-if="isPersonInCharge">
        <i class="update-icon"></i>更新进度
      </strong>
      <strong v-if="userType == '1'" @click="showEndTask()">
        <i class="over-icon"></i>结束
      </strong>
    </div>
    <!-- 更新进度弹窗 -->
    <div class="Popup-model update-model" v-if="showUpdateModel">
      <div class="Popup-con">
        <h3 class="Popup-title">更新个人进度</h3>
        <div class="Popup-box">
          <strong class="updateSchedule">
            已完成
            <em>{{updateSchedule}}%</em>
          </strong>
          <mt-range v-model="updateSchedule" :min="0" :max="100" :bar-height="5"></mt-range>
          <textarea name id rows="5" v-model="updateTextarea"></textarea>
        </div>
        <div class="Popup-footer">
          <span @click="cancelUpdate()">取消</span>
          <strong @click="submitUpdate()">确定</strong>
        </div>
      </div>
    </div>
    <!-- 结束任务弹窗 -->
    <div class="Popup-model EndTask-model" v-if="showEndTaskModel">
      <div class="Popup-con">
        <h3 class="Popup-title">结束任务</h3>
        <div class="Popup-box">
          <h4 class="EndTask-title">结束类型</h4>
          <div class="EndTask-con">
            <label>
              <input type="radio" name="EndTaskType" value="完成" id v-model="EndTaskType">
              <span>完成</span>
            </label>
            <label>
              <input type="radio" name="EndTaskType" value="终止" id v-model="EndTaskType">
              <span>终止</span>
            </label>
            <label>
              <input type="radio" name="EndTaskType" value="取消" id v-model="EndTaskType">
              <span>取消</span>
            </label>
            选择内容：
            {{EndTaskType}}
          </div>
          <textarea name id rows="5" v-model="endTaskTextarea"></textarea>
        </div>
        <div class="Popup-footer">
          <span @click="cancelEndTask()">取消</span>
          <strong @click="submitEndTask()">确定</strong>
        </div>
      </div>
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
import { Range } from "mint-ui";
import { Loading } from "vux";
export default {
  components: {
    Loading
  },
  data() {
    return {
      tssj: "", //调试数据
      updateSchedule: 15, //更新进度
      userType: "1", //用户与任务的关系 1为发起人，2为负责人，3为相关人
      title: "", //标题
      describe: "", //描述
      pickerStartValue: "", //插件使用的 开始时间
      pickerEndValue: "", //插件使用的 开始时间
      selectStartDate: "", //显示的 开始时间
      selectEndDate: "", //显示的 截止时间
      labelType: "0", //任务类型
      fileList: [], //上传列表
      scheduleNum: "16%", //平均进度
      personScheduleList: [], //负责人进度详情
      MissionProgressList: [], //任务进展的信息
      showLabelModel: false, //显示选择类型
      showUpdateModel: false, //显示 更新进度弹窗
      oldUpdateSchedule: "", //记录以前的进度
      updateTextarea: "阶段性完成", //更新进度弹窗 的文字输入框
      showEndTaskModel: false, //显示 结束任务弹窗
      EndTaskType: "", //结束类型
      endTaskTextarea: "", //结束任务的 文字输入框
      myMessage: {}, //负责人个人信息
      isPersonInCharge: false,  //是否负责人
      showLoading: false //加载动画
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
      post("/API/PoorHelpAPI/MissionInfoDetial?Id=" + that.$route.params.id)
        .then(resp => {
          Utils.hideLoading(that);
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            that.tssj = JSON.stringify(resp);
            that.title = resp.data.BaseInfo.Name;
            that.describe = resp.data.BaseInfo.Content;
            let imgStr = /\.(jpg|jpeg|png|bmp|gif|JPG|JPEG|PNG|BMP|GIF)$/;
            for (let i = 0; i < resp.data.AttachmentList.length; i++) {
              if (imgStr.test(resp.data.AttachmentList[i].AttachmentType)) {
                resp.data.AttachmentList[i].url =
                  Utils.filePathPrefix() +
                  "/System/File/Download?Id=" +
                  JSON.stringify(
                    resp.data.AttachmentList[i].AttachmentId
                  ).replace(/"/g, "");
              } else {
                resp.data.AttachmentList[i].url = "";
              }
            }
            that.selectStartDate = Utils.dateFormatter(
              Utils.dateTransformerFromDateStr(resp.data.BaseInfo.CreatedOn),
              "yyyy-MM-dd hh:mm"
            );
            that.selectEndDate = Utils.dateFormatter(
              Utils.dateTransformerFromDateStr(resp.data.BaseInfo.EndOn),
              "yyyy-MM-dd hh:mm"
            );
            that.labelType = resp.data.BaseInfo.Type - 1;
            that.scheduleNum = parseInt(resp.data.AverageData);
            that.fileList = resp.data.AttachmentList;
            let myWechatId = that.$store.state.user.WechatId;
            that.personScheduleList = [];
            for (let j = 0; j < resp.data.UserList.length; j++) {
              resp.data.UserList[j].date = Utils.dateFormatter(
                Utils.dateTransformerFromDateStr(
                  resp.data.UserList[j].CreatedOn
                ),
                "yyyy-MM-dd hh:mm"
              );
              if (
                resp.data.UserList[j].Avatar != null &&
                resp.data.UserList[j].Name != null
              ) {
                that.personScheduleList.push(resp.data.UserList[j]);
              }
              if (resp.data.UserList[j].Note != null) {
                that.MissionProgressList.push(resp.data.UserList[j]);
              }
              if (myWechatId == resp.data.UserList[j].WeChatId) {
                that.isPersonInCharge = true;
              }
            }
            if (myWechatId == resp.data.BaseInfo.CreatedBy) {
              that.userType = "1";
            } else if (that.isPersonInCharge) {
              that.userType = "2";
            } else {
              that.userType = "3";
            }
            if (resp.data.BaseInfo.States != null) {
              that.userType = "3";
            }
            // that.personScheduleList = resp.data.UserList;
            let EchartsTime = setTimeout(() => {
              for (
                let pieI = 0;
                pieI < that.personScheduleList.length;
                pieI++
              ) {
                that.initEcharts(
                  "personSchedule" + pieI,
                  that.personScheduleList[pieI].UserStates
                );
              }
            }, 500);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "获取数据错误");
        });
    },
    // 渲染进度图形
    initEcharts(id, Num) {
      let Pie = this.$echarts.init(document.getElementById(id));
      Pie.setOption({
        color: ["#5585f0", "#eee"],
        yAxis: [
          {
            show: false
          }
        ],
        series: [
          {
            center: ["50%", "50%"],
            radius: ["100%", "90%"],
            hoverAnimation: false,
            type: "pie",
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: Num, //占比值
                name: Num + "%", //显示百分比
                label: {
                  normal: {
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: "12",
                      fontWeight: "bold",
                      color: "#5585f0"
                    }
                  }
                }
              },
              {
                value: 100 - Num,
                name: ""
              }
            ]
          }
        ]
      });
    },
    // 显示更新进度
    showUpdate() {
      this.showUpdateModel = true;
      let that = this;
      for (let i = 0; i < that.personScheduleList.length; i++) {
        if (
          that.personScheduleList[i].WeChatId == that.$store.state.user.WechatId
        ) {
          that.updateSchedule = Number(that.personScheduleList[i].UserStates);
          that.myMessage = that.personScheduleList[i];
        }
      }
      this.oldUpdateSchedule = this.updateSchedule;
    },
    // 取消更新进度
    cancelUpdate() {
      this.showUpdateModel = false;
      this.updateSchedule = this.oldUpdateSchedule;
    },
    // 提交更新进度
    submitUpdate() {
      let that = this;
      this.showUpdateModel = false;
      let CoordUserId = "";
      let EchartsIndex = "";
      let params = JSON.stringify({
        AgentId: "",
        CoordInfoId: that.$route.params.id, //任务ID
        CoordUserName: that.myMessage.Name, //UserList里面名称
        CoordUserId: that.myMessage.Id, //UserList里面 Id
        Note: that.updateTextarea, //描述
        States: that.updateSchedule //百分比
      });
      post("/API/PoorHelpAPI/UpdateMission", params)
        .then(resp => {
          Utils.hideLoading(that);
          if (resp.msg == "更新成功") {
            for (let i = 0; i < that.personScheduleList.length; i++) {
              if (
                that.personScheduleList[i].WeChatId ==
                that.$store.state.user.WechatId
              ) {
                EchartsIndex = i;
                that.initEcharts(
                  "personSchedule" + EchartsIndex,
                  that.updateSchedule
                );
                that.personScheduleList[i].UserStates = that.updateSchedule;
              }
            }
            that.getNewAverageData();
            Utils.toast(that, resp.umsg);
          } else {
            Utils.toast(that, resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "提交进度失败");
        });
    },
    // 显示结束任务
    showEndTask() {
      let that = this;
      this.showEndTaskModel = true;
      this.EndTaskType = "";
      this.endTaskTextarea = "";
    },
    // 取消结束任务
    cancelEndTask() {
      this.showEndTaskModel = false;
    },
    // 提交结束任务
    submitEndTask() {
      let that = this;
      this.showEndTaskModel = false;
      let EndTaskTypeCode = "";
      if (that.EndTaskType == "完成") {
        EndTaskTypeCode = "3";
      } else if (that.EndTaskType == "终止") {
        EndTaskTypeCode = "2";
      }
      if (that.EndTaskType == "取消") {
        EndTaskTypeCode = "1";
      }
      let params = JSON.stringify({
        Id: that.$route.params.id, //任务ID
        Note: that.endTaskTextarea, //描述
        States: EndTaskTypeCode, //结束类型编码
        AgentId: ""
      });
      post("/API/PoorHelpAPI/FinishMission", params)
        .then(resp => {
          Utils.hideLoading(that);
          // console.log('resp',resp)
          if (resp.umsg == "保存成功") {
            Utils.toast(that, resp.umsg);
            that.userType = "3";
          } else {
            Utils.toast(that, resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "结束任务失败");
        });
    },
    // 提交进度后的部分数据修改
    getNewAverageData() {
      let that = this;
      post("/API/PoorHelpAPI/MissionInfoDetial?Id=" + that.$route.params.id)
        .then(resp => {
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            that.scheduleNum = parseInt(resp.data.AverageData);
            that.MissionProgressList = [];
            for (let j = 0; j < resp.data.UserList.length; j++) {
              resp.data.UserList[j].date = Utils.dateFormatter(
                Utils.dateTransformerFromDateStr(
                  resp.data.UserList[j].CreatedOn
                ),
                "yyyy-MM-dd hh:mm"
              );
              if (resp.data.UserList[j].Note != null) {
                // console.log("!null", resp.data.UserList[j]);
                that.MissionProgressList.push(resp.data.UserList[j]);
              }
            }
          }
          Utils.hideLoading(that);
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "获取数据错误");
        });
    }
  },
  watch: {
    updateSchedule() {
      if (this.updateSchedule == "100") {
        this.updateTextarea = "任务完成！";
      } else {
        this.updateTextarea = "完成" + this.updateSchedule + "%, 阶段性完成";
      }
    },
    EndTaskType() {
      if (this.EndTaskType != "")
        this.endTaskTextarea = "任务已" + this.EndTaskType;
    }
  }
};
document.title = "任务详情";
</script>