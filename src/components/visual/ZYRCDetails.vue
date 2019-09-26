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
.GZGBDetails-wrap .ProjectManagementDetails-cons .ProjectManagementDetails-con {
  display: block;
}
.GZGBDetails-wrap .PMD-message {
  padding-top: 0.5rem;
}
.GZGBDetails-wrap .PMD-message li {
  padding: 0.2rem 0;
}
.GZGBDetails-wrap .PMD-message li strong {
  width: 2.9rem;
  padding-left: 0.2rem;
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
  <div class="GZGBDetails-wrap ProjectManagementDetails-wrap">
    <div class="ProjectManagementDetails-cons">
      <!-- 基本信息 -->
      <div class="ProjectManagementDetails-con">
        <ul class="PMD-message">
          <li>
            <strong>帮扶区划</strong>
            <span>{{dataList.ParentName}}</span>
          </li>
          <li>
            <strong>交流方向</strong>
            <span>{{dataList.Direction}}</span>
          </li>
          <li>
            <strong>所属区域</strong>
            <span>{{dataList.BelongToArea}}</span>
          </li>
          <li>
            <strong>选派区域</strong>
            <span>{{dataList.GoToArea}}</span>
          </li>
          <li>
            <strong>姓名</strong>
            <span>{{dataList.Name}}</span>
          </li>
          <li>
            <strong>联系电话</strong>
            <span>{{dataList.Tel}}</span>
          </li>
          <li>
            <strong>出生年月</strong>
            <span>{{dataList.Birthdate}}</span>
          </li>
          <li>
            <strong>身份证号</strong>
            <span>{{dataList.IdNumber}}</span>
          </li>
          <li>
            <strong>学历</strong>
            <span>{{dataList.Education}}</span>
          </li>
          <li>
            <strong>专业技术职称</strong>
            <span>{{dataList.ProfessionalTitle}}</span>
          </li>
          <li>
            <strong>专业技术领域</strong>
            <span>{{dataList.ProfessionalArea}}</span>
          </li>
          <li>
            <strong>选派前单位及职务</strong>
            <span>{{dataList.OldOfficeJob}}</span>
          </li>
          <li>
            <strong>选派期单位及职务</strong>
            <span>{{dataList.NewOfficeJob}}</span>
          </li>
          <li>
            <strong>挂职开始时间</strong>
            <span>{{dataList.StartTime}}</span>
          </li>
          <li>
            <strong>挂职结束时间</strong>
            <span>{{dataList.EndTime}}</span>
          </li>
        </ul>
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
import { Loading } from "vux";
export default {
  components: {
    Loading
  },
  data() {
    return {
      dataList: [], //信息列表
      showLoading: false //加载动画
    };
  },
  mounted() {
    Utils.checkLoginStatus(this, () => {
      Utils.showLoading(this);
      this.init();
    });
  },
  methods: {
    init() {
      let that = this;
      post("/API/PoorHelpAPI/GetTalentDetail?Id=" + that.$route.params.id)
        .then(resp => {
          if (resp.ret == "0") {
            //干部挂职开始时间
            resp.data.StartTime = Utils.dateFormatter(
              Utils.dateTransformerFromDateStr(resp.data.StartOn),
              "yyyy-MM-dd"
            );
            // 干部挂职结束时间
            resp.data.EndTime = Utils.dateFormatter(
              Utils.dateTransformerFromDateStr(resp.data.EndOn),
              "yyyy-MM-dd"
            );
            that.dataList = resp.data;
            Utils.hideLoading(that);
          } else {
            Utils.toast(that, resp.umsg);
            Utils.hideLoading(that);
          }
        })
        .catch(err => {
          Utils.toast(that, "获取数据错误");
          Utils.hideLoading(that);
        });
    }
  }
};
document.title = "专业人才详情";
</script>