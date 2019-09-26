<style>
.AddTask-wrap {
  padding: 0.2rem 0.3rem;
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
.AddTask-wrap .file-con ul li img {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.1rem;
}
.AddTask-wrap .file-con ul .file-message-box {
  display: inline-block;
  width: 4.5rem;
  vertical-align: top;
}
.AddTask-wrap .file-con ul .file-message-box strong {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.28rem;
  line-height: 0.5rem;
  color: #333;
}
.AddTask-wrap .file-con ul .file-message-box span {
  display: block;
  font-size: 0.24rem;
  color: #888;
}
.file-con ul .delete-icon {
  display: block;
  float: right;
  width: 0.8rem;
  height: 0.8rem;
  background: url(../../assets/img/delete-icon.png) center no-repeat;
  background-size: 0.4rem 0.4rem;
  cursor: pointer;
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
  border-top: 0.05rem solid #e3e4e8;
  border-right: 0.05rem solid #e3e4e8;
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
</style>

<template>
  <div class="AddTask-wrap">
    <input type="text" class="AddTask-title" v-model="title" placeholder="请输入任务标题" />
    <textarea class="AddTask-textarea" v-model="describe" placeholder="添加描述"></textarea>
    <h2 class="AddTask-title-box">
      <i class="file-icon"></i>附件
      <span class="add-icon"></span>
      <input
        type="file"
        class="fileInput"
        ref="fileUpload"
        @change="fileUploadChanged('fileUpload')"
      />
    </h2>
    <div class="file-con">
      <ul>
        <li v-for="item in fileList" :key="item.id">
          <img :src="item.src" alt v-if="item.Type == 'pic'" />
          <img src="../../assets/img/enclosure-icon.png" alt v-else />
          <div class="file-message-box">
            <strong>{{item.Name}}</strong>
            <span>{{item.Size}}</span>
          </div>
          <em class="delete-icon" @click="delFile(item.uuid)"></em>
        </li>
      </ul>
    </div>
    <h2 class="AddTask-title-box AddTask-more-icon" @click="selectLabelType()">
      <i class="label-icon"></i>
      <strong class="label-type-box label-type1" v-if="labelType == 0">普通</strong>
      <strong class="label-type-box label-type2" v-if="labelType == 1">不紧急但重要</strong>
      <strong class="label-type-box label-type3" v-if="labelType == 2">紧急但不重要</strong>
      <strong class="label-type-box label-type4" v-if="labelType == 3">紧急且重要</strong>
    </h2>
    <h2 class="AddTask-title-box">
      <i class="person-icon"></i>负责人
      <span class="add-icon" @click="openAddressBook()"></span>
    </h2>
    <div class="person-con">
      <template v-for="item in PersonInChargeImgs">
        <img
          v-if="item.src == '../../assets/img/user-head.png'"
          src="../../assets/img/user-head.png"
          :key="item.id"
        />
        <img v-else :src="item.src" :key="item.id" />
      </template>
    </div>
    <h2 class="AddTask-title-box">
      <i class="relevant-icon"></i>相关人
      <span class="add-icon" @click="openAddressBook2()"></span>
    </h2>
    <div class="person-con">
      <template v-for="item in TheRelevantPersonImgs">
        <img
          v-if="item.src == '../../assets/img/user-head.png'"
          src="../../assets/img/user-head.png"
          :key="item.id"
        />
        <img v-else :src="item.src" :key="item.id" />
      </template>
    </div>
    <h2 class="AddTask-title-box AddTask-more-icon" @click="openPickerStart()">
      <i class="date-icon"></i>
      <strong class="AddTask-data-box">{{selectStartDate}}</strong>开始
    </h2>
    <h2 class="AddTask-title-box AddTask-more-icon" @click="openPickerEnd()">
      <i class="date-icon"></i>
      <strong class="AddTask-data-box">{{selectEndDate}}</strong>截止
    </h2>
    <div class="label-modal" :class="{active: showLabelModel}">
      <ul>
        <li class="label-type1" :class="{active:labelType == 0}" @click="changeLabelType(0)">普通</li>
        <li class="label-type2" :class="{active:labelType == 1}" @click="changeLabelType(1)">不紧急但重要</li>
        <li class="label-type3" :class="{active:labelType == 2}" @click="changeLabelType(2)">紧急但不重要</li>
        <li class="label-type4" :class="{active:labelType == 3}" @click="changeLabelType(3)">紧急且重要</li>
      </ul>
    </div>
    <div class="AddTask-footer">
      <strong class="foot-big-blue-btn" @click="submitClick()">提交</strong>
    </div>
    <!-- 开始时间 -->
    <template>
      <mt-datetime-picker
        ref="pickerStart"
        type="datetime"
        v-model="pickerStartValue"
        @confirm="dateConfirmStart()"
      ></mt-datetime-picker>
    </template>
    <!-- 结束时间 -->
    <template>
      <mt-datetime-picker
        ref="pickerEnd"
        type="datetime"
        v-model="pickerEndValue"
        @confirm="dateConfirmEnd()"
      ></mt-datetime-picker>
    </template>
    <!-- 加载动画 -->
    <div class="loading-box">
      <loading v-model="showLoading"></loading>
    </div>
  </div>
</template>

<script>
import { get, post } from "../../api/http";
import Utils from "../common/Utils";
import { DatetimePicker } from "mint-ui";
import { Loading } from "vux";
import wx from "wx";
export default {
  components: {
    Loading
  },
  data() {
    return {
      title: "", //标题
      describe: "", //描述
      pickerStartValue: "", //插件使用的 开始时间
      pickerEndValue: "", //插件使用的 开始时间
      selectStartDate: "", //显示的 开始时间
      selectEndDate: "", //显示的 截止时间
      labelType: "0", //任务类型
      OriginatorHead: {}, //发起人信息
      activeLabelType: "",
      activeTypeName: "",
      fileList: [], //上传列表
      EnclosureList: [], //附件上传后返回的数据
      showLabelModel: false, //显示选择类型
      PersonInChargeImgs: [], //负责人头像
      PersonInChargeIds: [], //负责人 id
      TheRelevantPersonImgs: [], //相关人头像
      TheRelevantPersonIds: [], //相关人 id
      showLoading: false //加载动画
    };
  },
  mounted() {
    Utils.checkLoginStatus(this, () => {
      this.init();
      Utils.wxConfig(this);
    });
  },
  methods: {
    init() {
      let that = this;
      // that.userId = that.$store.state.user.UserId;
      let nowDate = Utils.getMintUiDateTime(new Date());
      this.selectStartDate = nowDate;
      this.selectEndDate = nowDate;
      that.OriginatorHead = {};
      post(
        "/API/PoorHelpAPI/GetWeChatUserInfo?UserId=" +
          that.$store.state.user.WechatId
      )
        .then(resp => {
          Utils.hideLoading(that);
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            that.OriginatorHead = resp.data;
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "获取发起人头像错误");
        });
    },
    // 打开时间选择器
    openPickerStart() {
      if (this.selectStartDate) {
        this.pickerStartValue = this.selectStartDate;
      } else {
        this.pickerStartValue = new Date();
      }
      this.$refs.pickerStart.open();
    },
    // 选择时间后确定传值给标签
    dateConfirmStart() {
      this.selectStartDate = Utils.getMintUiDateTime(this.pickerStartValue);
    },
    openPickerEnd() {
      if (this.selectEndDate) {
        this.pickerEndValue = this.selectEndDate;
      } else {
        this.pickerEndValue = new Date();
      }
      this.$refs.pickerEnd.open();
    },
    // 选择时间后确定传值给标签
    dateConfirmEnd() {
      this.selectEndDate = Utils.getMintUiDateTime(this.pickerEndValue);
    },
    // 点击弹出选择任务类型
    selectLabelType() {
      this.showLabelModel = true;
    },
    // 修改任务类型
    changeLabelType(index) {
      let that = this;
      this.labelType = index;
      // 获取任务类型的数据字典
      let TypeList = ["普通", "不紧急但重要", "紧急但不重要", "紧急且重要"];
      let labelType, TypeName;
      let Typeparams = JSON.stringify({
        Type: "MissionType"
      });
      post("/API/PoorHelpAPI/GetDictList", Typeparams)
        .then(resp => {
          Utils.hideLoading(that);
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            for (let i = 0; i < resp.data.length; i++) {
              if (TypeList[index] == resp.data[i].Name) {
                that.activeLabelType = resp.data[i].Code;
                that.activeTypeName = resp.data[i].Name;
                break;
              }
            }
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "获取任务类型错误！");
        });
      this.showLabelModel = false;
    },
    // 附件或图片上传
    fileUploadChanged(refName) {
      var file = this.$refs[refName].files[0];
      var self = this;
      if (window.FileReader) {
        // 判断上传类型
        let imgType = "";
        let imgStr = /\.(jpg|jpeg|png|bmp|gif|JPG|JPEG|PNG|BMP|GIF)$/;
        if (file) {
          var fr = new FileReader();
          fr.onloadend = function(e) {
            if (imgStr.test(file.name)) {
              self.fileList.push({
                file: file,
                src: e.target.result,
                uuid: Utils.genRandomStr(),
                Name: file.name,
                Type: "pic",
                Size: file.size / 1000 + "KB"
              });
            } else {
              self.fileList.push({
                file: file,
                src: e.target.result,
                uuid: Utils.genRandomStr(),
                Name: file.name,
                Type: "other",
                Size: file.size / 1000 + "KB"
              });
            }
          };
          fr.readAsDataURL(file);
        }
      }
    },
    // 删除附件
    delFile(uuid) {
      for (let i = 0; i < this.fileList.length; i++) {
        if (this.fileList[i].uuid === uuid) {
          this.fileList.splice(i, 1);
          break;
        }
      }
    },
    // 提交按钮，先做判断，是否有附件
    submitClick() {
      let that = this;
      Utils.showLoading(that);
      // 先判断必填项不能为空
      if (that.title == "") {
        Utils.toast(that, "任务标题不能为空!");
        Utils.hideLoading(that);
        return false;
      } else if (that.describe == "") {
        Utils.hideLoading(that);
        Utils.toast(that, "任务描述不能为空!");
        return false;
      } else if (that.PersonInChargeIds.length == "0") {
        Utils.toast(that, "请选择负责人!");
        Utils.hideLoading(that);
        return false;
      }
      if (that.fileList.length != "0") {
        that.subEnclosure();
      } else {
        that.submitAll();
      }
    },
    // 提交附件
    subEnclosure() {
      let that = this;
      let fileData = new FormData();
      for (let i = 0; i < that.fileList.length; i++) {
        fileData.append("file" + i, that.fileList[i].file);
      }
      post("/API/PoorHelpAPI/UploadFiles", fileData)
        .then(resp => {
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            that.EnclosureList = resp.data;
            that.submitAll();
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "提交数据错误!");
        });
    },
    // 提交所有表单
    submitAll() {
      let that = this;
      // 获取负责人和相关人头像及数据
      let peoList = [];
      if (that.PersonInChargeIds.length != "0") {
        for (let i = 0; i < that.PersonInChargeIds.length; i++) {
          peoList.push({
            WeChatId: that.PersonInChargeIds[i].id,
            Name: that.PersonInChargeIds[i].name,
            Avatar: that.PersonInChargeIds[i].avatar,
            UserType: 0
          });
        }
      }
      if (that.TheRelevantPersonIds.length != "0") {
        for (let j = 0; j < that.TheRelevantPersonIds.length; j++) {
          peoList.push({
            WeChatId: that.TheRelevantPersonIds[j].id,
            Name: that.TheRelevantPersonIds[j].name,
            UserType: 1
          });
        }
      }
      // 获取所有参数并提交
      var agentId = Utils.getQueryString("agentId");
      let params = JSON.stringify({
        AgentId: agentId,
        MissObj: {
          Name: that.title, //名称
          Content: that.describe, //描述
          Type: that.activeLabelType || "1", //标签编码
          TypeName: that.activeTypeName || "普通", //标签名称
          StartOn: that.selectStartDate, //起始时间
          EndOn: that.selectEndDate, //结束时间
          CreatedBy: that.$store.state.user.WechatId, //发起人微信id
          CreatedByName: that.OriginatorHead.name, //发起人 名称
          Avatar: that.OriginatorHead.avatar
        },
        UserList: peoList,
        AttachmentList: that.EnclosureList
      });
      // console.log("提交数据", params);
      post("/API/PoorHelpAPI/SaveMissionCoord", params)
        .then(resp => {
          Utils.hideLoading(that);
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            // console.log("提交", resp);
            Utils.toast(that, "所有信息提交成功!");
            Utils.route(that, "/Coordination");
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "提交数据错误");
        });
    },
    // 打开通讯录 添加责任人
    openAddressBook() {
      let that = this;
      let oldList = [];
      for (let i = 0; i < that.PersonInChargeIds.length; i++) {
        oldList.push(that.PersonInChargeIds[i].id);
      }
      if (wx.invoke) {
        wx.invoke(
          "selectEnterpriseContact",
          {
            fromDepartmentId: 0, // 必填，表示打开的通讯录从指定的部门开始展示，-1表示自己所在部门开始, 0表示从最上层开始
            mode: "multi", // 必填，选择模式，single表示单选，multi表示多选
            type: ["user"], // 必填，选择限制类型，指定department、user中的一个或者多个
            selectedDepartmentIds: [], // 非必填，已选部门ID列表。用于多次选人时可重入，single模式下请勿填入多个id
            selectedUserIds: oldList // 非必填，已选用户ID列表。用于多次选人时可重入，single模式下请勿填入多个id
          },
          function(res) {
            if (res.err_msg == "selectEnterpriseContact:ok") {
              if (typeof res.result == "string") {
                res.result = JSON.parse(res.result); //由于目前各个终端尚未完全兼容，需要开发者额外判断result类型以保证在各个终端的兼容性
              }
              that.PersonInChargeIds = [];
              that.PersonInChargeImgs = [];
              let selectedUserList = res.result.userList; // 已选的成员列表
              for (let i = 0; i < selectedUserList.length; i++) {
                if (
                  selectedUserList[i].avatar == null ||
                  selectedUserList[i].avatar == ""
                ) {
                  selectedUserList[i].avatar = "../../assets/img/user-head.png";
                }
                that.PersonInChargeImgs.push({
                  src: selectedUserList[i].avatar
                });
                that.PersonInChargeIds.push(selectedUserList[i]);
              }
            }
          }
        );
      }
    },
    // 打开通讯录  添加相关人
    openAddressBook2() {
      let that = this;
      let oldList = [];
      for (let i = 0; i < that.TheRelevantPersonIds.length; i++) {
        oldList.push(that.TheRelevantPersonIds[i].id);
      }
      if (wx.invoke) {
        wx.invoke(
          "selectEnterpriseContact",
          {
            fromDepartmentId: 0, // 必填，表示打开的通讯录从指定的部门开始展示，-1表示自己所在部门开始, 0表示从最上层开始
            mode: "multi", // 必填，选择模式，single表示单选，multi表示多选
            type: ["user"], // 必填，选择限制类型，指定department、user中的一个或者多个
            selectedDepartmentIds: [], // 非必填，已选部门ID列表。用于多次选人时可重入，single模式下请勿填入多个id
            selectedUserIds: oldList // 非必填，已选用户ID列表。用于多次选人时可重入，single模式下请勿填入多个id
          },
          function(res) {
            if (res.err_msg == "selectEnterpriseContact:ok") {
              if (typeof res.result == "string") {
                res.result = JSON.parse(res.result); //由于目前各个终端尚未完全兼容，需要开发者额外判断result类型以保证在各个终端的兼容性
              }
              that.TheRelevantPersonIds = [];
              that.TheRelevantPersonImgs = [];
              let selectedUserList = res.result.userList; // 已选的成员列表
              for (let i = 0; i < selectedUserList.length; i++) {
                if (
                  selectedUserList[i].avatar == null ||
                  selectedUserList[i].avatar == ""
                ) {
                  selectedUserList[i].avatar = "../../assets/img/user-head.png";
                }
                that.TheRelevantPersonImgs.push({
                  src: selectedUserList[i].avatar
                });
                that.TheRelevantPersonIds.push(selectedUserList[i]);
              }
            }
          }
        );
      }
    }
  }
};
document.title = "添加任务";
</script>