<style>
.AddJournal-wrap .Journal-list {
  display: block;
  background: #fff;
  padding-left: 0.3rem;
}
.AddJournal-wrap .Journal-list {
  display: block;
  padding-left: 0.3rem;
  border-bottom: 0.2rem solid #f1f1f1;
}
.AddJournal-wrap .Journal-list .flex-li {
  display: flex;
  padding: 0.2rem 0.3rem 0.2rem 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.01rem solid #e0e0e0;
}
.AddJournal-wrap .Journal-list li:not(.flex-li) {
  display: block;
  padding: 0.2rem 0.3rem 0.2rem 0;
}
.AddJournal-wrap .Journal-list li strong {
  display: block;
  height: 0.42rem;
  font-size: 0.28rem;
  color: #888;
  line-height: 0.42rem;
}
.AddJournal-wrap .Journal-list .AddJournal-selectDate {
  position: relative;
  display: block;
  width: 2.8rem;
  height: 0.42rem;
  line-height: 0.42rem;
  padding-right: 0.4rem;
  text-align: right;
  font-size: 0.28rem;
  color: #000;
  cursor: pointer;
}
.AddJournal-wrap .Journal-list .AddJournal-selectDate::after {
  content: "";
  position: absolute;
  top: 0.17rem;
  right: 0.2rem;
  width: 0.1rem;
  height: 0.1rem;
  border-left: 0.01rem solid #bbb;
  border-top: 0.01rem solid #bbb;
  transform: rotate(135deg);
}
.AddJournal-reporter {
  display: block;
  font-size: 0.28rem;
  color: #888;
  line-height: 0.42rem;
}
.AddJournal-wrap .schedule-box {
  position: relative;
  width: 3.3rem;
  height: 0.42rem;
  padding-right: 0.5rem;
  line-height: 0.42rem;
  font-size: 0.28rem;
  color: #333;
}
.AddJournal-wrap .schedule-box::after {
  content: "%";
  position: absolute;
  right: 0;
  top: 0;
  display: block;
}
.AddJournal-wrap .schedule-box input {
  display: block;
  width: 100%;
  height: 0.42rem;
  border: none;
  text-align: right;
}
.AddJournal-wrap .Journal-list li textarea {
  display: block;
  width: 100%;
  min-height: 1.5rem;
  padding-right: 0.3rem;
  margin-top: 0.3rem;
  font-size: 0.28rem;
  color: #000;
  line-height: 0.4rem;
  text-align: justify;
  border: none;
}
.AddJournal-file-box {
  padding: 0 0.3rem;
}
.AddJournal-file-title {
  display: block;
  font-size: 0.32rem;
  color: #000;
  line-height: 0.8rem;
}
.AddJournal-file-img-box {
  font-size: 0;
}
.AddJournal-file-img-box .AddJournal-img,
.file-enclosure-btn {
  position: relative;
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  margin-bottom: 0.2rem;
}
.AddJournal-file-img-box .AddJournal-img:not(:nth-child(4n + 0)) {
  margin-right: 0.15rem;
}
.AddJournal-img img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.08rem;
  object-fit: cover;
}
.AddJournal-file-img-box .delete-img-btn {
  position: absolute;
  top: -0.2rem;
  right: -0.2rem;
  width: 0.5rem;
  height: 0.5rem;
  background: url(../../assets/img/del2-icon.png) center no-repeat;
  background-size: 0.4rem 0.4rem;
  z-index: 5;
}
.AddJournal-file-img-box ul li {
  position: relative;
  display: block;
  padding: 0.3rem 0.8rem 0.3rem 0;
}
.AddJournal-file-img-box ul li:not(:last-child) {
  border-bottom: 0.01rem solid #e0e0e0;
}
.AddJournal-file-img-box ul li::after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0.3rem;
  width: 0.4rem;
  height: 0.4rem;
  background: url(../../assets/img/file-other-icon.png) no-repeat;
  background-size: 100% 100%;
  z-index: 9;
}
.AddJournal-file-img-box ul li span {
  display: block;
  padding-left: 0.6rem;
  font-size: 0.28rem;
  line-height: 0.4rem;
  color: #345289;
  text-align: justify;
  word-wrap: break-word;
}
.AddJournal-file-img-box ul li .deleteEnclosure {
  position: absolute;
  right: 0.2rem;
  top: 0.3rem;
  width: 0.4rem;
  height: 0.4rem;
  z-index: 1;
}
</style>

<template>
  <div class="AddJournal-wrap">
    <ul class="Journal-list">
      <li class="flex-li">
        <strong>更新日期</strong>
        <span class="AddJournal-selectDate" @click="openPicker()">{{selectDate || '请选择日期'}}</span>
      </li>
      <li class="flex-li">
        <strong>汇报人</strong>
        <span class="AddJournal-reporter">{{reporter}}</span>
      </li>
      <li class="flex-li">
        <strong>项目进度</strong>
        <div class="schedule-box">
          <input
            type="text"
            v-model="schedule"
            oninput="value=value.replace(/[^\d]/g,'')"
            maxlength="3"
          />
        </div>
      </li>
      <li>
        <strong>进展情况</strong>
        <textarea name id placeholder="请填写..." v-model="textareaVal"></textarea>
      </li>
    </ul>
    <div class="AddJournal-file-box">
      <strong class="AddJournal-file-title">上传附件</strong>
      <input
        type="file"
        ref="fileUpload"
        style="display:none;"
        accept="*"
        @change="fileUploadChanged('fileUpload')"
      />
      <input
        type="file"
        ref="cameraFileUpload"
        accept="image/*"
        style="display:none;"
        capture="camera"
        @change="fileUploadChanged('cameraFileUpload')"
      />
      <div class="AddJournal-file-img-box">
        <div class="AddJournal-img" v-for="(item,index) in pictureList" :key="item.id">
          <img :src="item.src" alt @click="show(index)" class="previewer-demo-img" />
          <span class="delete-img-btn" @click="deleteImageByUUid(item.uuid)"></span>
        </div>
        <img
          src="../../assets/img/filp-icon.png"
          class="file-enclosure-btn"
          @click="triggerUploadImage"
        />
      </div>
      <strong class="AddJournal-file-title" v-if="fileOther.length != '0'">文件附件</strong>
      <div class="AddJournal-file-img-box" v-if="fileOther.length != '0'">
        <ul>
          <li v-for="item in fileOther" :key="item.id">
            <span>{{item.Name}}</span>
            <img
              class="deleteEnclosure"
              src="../../assets/img/del-file-icon.png"
              @click="deleteFileUUid(item.uuid)"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="foot-big-blue-btn" @click="submitBtn()">确认添加</div>
    <!-- 日期选择控件 -->
    <template>
      <mt-datetime-picker ref="picker" type="date" v-model="pickerValue" @confirm="dateConfirm()"></mt-datetime-picker>
    </template>
    <!-- 大图轮播 -->
    <div v-transfer-dom>
      <previewer :list="pictureList" ref="previewer" :options="options"></previewer>
    </div>
    <!-- 图片上传 -->
    <actionsheet
      v-model="picturePickerShown"
      :menus="picturePickerMenus"
      show-cancel
      @on-click-menu="pickPictureActionSheet"
    ></actionsheet>
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
import { Actionsheet, Previewer, Loading, TransferDom } from "vux";
export default {
  directives: {
    TransferDom
  },
  components: {
    Actionsheet,
    Loading,
    Previewer
  },
  data() {
    return {
      userId: "", //用户ID
      pickerValue: "", //插件使用的日期
      selectDate: "", //日期
      reporter: "", //汇报人
      schedule: "", //进度
      textareaVal: "", //日志内容
      pictureList: [], //图片列表
      fileOther: [], //其他附件列表
      EnclosureList: [], //所有附件提交完成后的返回值
      showLoading: false, //加载动画
      picturePickerShown: false, // 是否显示选择器
      picturePickerMenus: [
        {
          label: "拍照",
          type: "camera"
        },
        {
          label: "从相册选择",
          type: "photo"
        }
      ],
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
      that.reporter = that.$store.state.user.UserInfo.name;
      that.userId = that.$store.state.user.UserId;
      that.selectDate = Utils.getMintUiDate(new Date());
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
    // 判断安卓或者IOS
    triggerUploadImage() {
      if (Utils.isAndroid()) {
        this.picturePickerShown = true;
      } else {
        this.$refs.fileUpload.click();
      }
    },
    pickPictureActionSheet(key, item) {
      if (item.Control_Type == "camera") {
        this.$refs.cameraFileUpload.click();
      } else {
        this.$refs.fileUpload.click();
      }
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
              self.pictureList.push({
                file: file,
                src: e.target.result,
                uuid: Utils.genRandomStr(),
                isRemote: false
              });
            } else {
              self.fileOther.push({
                file: file,
                Name: file.name,
                href: "#",
                uuid: Utils.genRandomStr(),
                isRemote: false
              });
            }
          };
          fr.readAsDataURL(file);
        }
      }
    },
    // 删除图片
    deleteImageByUUid(uuid) {
      for (let idx = 0; idx < this.pictureList.length; idx++) {
        if (this.pictureList[idx].uuid === uuid) {
          this.pictureList.splice(idx, 1);
          break;
        }
      }
    },
    // 删除附件
    deleteFileUUid(uuid) {
      for (var idx = 0; idx < this.fileOther.length; idx++) {
        if (this.fileOther[idx].uuid === uuid) {
          this.fileOther.splice(idx, 1);
        }
      }
    },
    // 大图轮播
    show(index) {
      this.$refs.previewer.show(index);
    },
    // 提交按钮，先做判断，是否有附件
    submitBtn() {
      let that = this;
      Utils.showLoading(that);
      if (that.schedule == "") {
        Utils.hideLoading(that);
        Utils.toast(that, "完成进度不能为空！");
        return false;
      } else if (that.textareaVal == "") {
        Utils.hideLoading(that);
        Utils.toast(that, "进展情况不能为空！");
        return false;
      }
      if (that.pictureList.length != "0" || that.fileOther.length != "0") {
        that.subEnclosure();
      } else {
        that.submitAll();
      }
    },
    // 提交附件
    subEnclosure() {
      let that = this;
      let fileData = new FormData();
      for (let i = 0; i < that.pictureList.length; i++) {
        fileData.append("file" + i, that.pictureList[i].file);
      }
      for (
        let j = 0, k = that.pictureList.length;
        j < that.fileOther.length;
        j++, k++
      ) {
        fileData.append("file" + k, that.fileOther[j].file);
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
          Utils.toast(that, "提交附件错误！");
        });
    },
    // 提交所有表单
    submitAll() {
      let that = this;
      let params = JSON.stringify({
        UserId: that.userId,
        InfoId: that.$route.params.id,
        ReportBy: that.reporter,
        UpdateTime: that.selectDate.replace(/-/g, "/"),
        ItemSchedule: that.schedule + "%",
        Situation: that.textareaVal,
        Attachment: that.EnclosureList
      });
      post("/API/PoorHelpAPI/SaveProjectProgress", params)
        .then(resp => {
          Utils.hideLoading(that);
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            Utils.toast(that, "所有信息提交成功");
            let params = {
              path: `/ProjectManagementDetails/` + that.$route.params.id
            };
            Utils.route(that, params);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "提交数据错误");
        });
    }
  }
};
document.title = "进度更新";
</script>