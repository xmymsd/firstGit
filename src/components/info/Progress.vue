<style>
.border-bottom-20px {
  border-bottom: 0.2rem solid #f4f4f4;
}
.box-title {
  height: 0.88rem;
  padding: 0 0.3rem;
  font-size: 0.26rem;
  line-height: 0.88rem;
  text-align: left;
  color: #333;
}
.title-icon {
  width: 0.3rem;
  height: 0.3rem;
  margin-right: 0.14rem;
  vertical-align: middle;
}
.box-title span {
  line-height: 0.88rem;
  font-size: 0.2rem;
  color: #888;
}
.ProgressTableCon {
  padding: 0 0.3rem 0.3rem;
}
.ProgressTableCon .ProgressTable {
  width: 100%;
  font-size: 0.24rem;
  text-align: center;
  border: 0.01rem solid #e0e0e0;
}
.ProgressTableCon .ProgressTable th {
  font-weight: 400;
  line-height: 0.58rem;
  background: #e9f1fe;
  color: #333;
}
.ProgressTableCon .ProgressTable tbody tr td {
  padding: 0.15rem 0.04rem;
  line-height: 0.28rem;
  color: #333;
}
.ProgressStatistics {
  padding: 0.38rem 0.3rem 0.38rem 0.8rem;
  background: #fff;
  font-size: 0;
  border-bottom: 0.2rem solid #f4f4f4;
}
.ProgressStatistics-box {
  display: inline-block;
  width: 50%;
  height: 1.04rem;
}
.ProgressStatistics .ProgressStatistics-box:nth-child(1),
.ProgressStatistics .ProgressStatistics-box:nth-child(2) {
  margin-bottom: 0.76rem;
}
.ProgressStatistics-box img {
  float: left;
  display: block;
  width: 1.04rem;
  height: 1.04rem;
}
.ProgressStatistics-box strong {
  display: block;
  float: right;
  width: 1.8rem;
  line-height: 0.55rem;
  font-size: 0.24rem;
  color: #888;
}
.ProgressStatistics-box span {
  display: block;
  float: right;
  width: 1.8rem;
  font-size: 0.36rem;
  line-height: 0.38rem;
  color: #333;
}
.TitleNum-box {
  color: #4b89f7;
  margin-left: 0.12rem;
}
.pies-con {
  height: 3rem;
  padding: 0 0.3rem;
  font-size: 0;
}
.pies-con > div:nth-child(1) {
  float: left;
  width: 2.6rem;
  height: 3rem;
}
.pies-con > div:nth-child(2) {
  float: right;
  width: 2.6rem;
  height: 3rem;
}
#taskPie1,
#taskPie2 {
  height: 2rem;
}
#taskPie1 div,
#taskPie2 div {
  background: none !important;
}
.pies-message strong {
  display: inline-block;
  width: 60%;
  padding-right: 0.2rem;
  margin-top: 0.1rem;
  text-align: right;
  font-size: 0.24rem;
  color: #888;
}
.pies-message span {
  display: inline-block;
  width: 40%;
  margin-top: 0.1rem;
  text-align: left;
  font-size: 0.24rem;
  color: #333;
}
</style>

<template>
  <div class="Progresswrap">
    <!-- 头部 -->
    <mt-header title="进度总览" style="display: none">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 统计区 -->
    <div class="ProgressStatistics">
      <div class="ProgressStatistics-box" v-for="item in StatisticsList" :key="item.id">
        <img :src="item.src" alt>
        <strong>{{ item.title }}</strong>
        <span>{{ item.value }}</span>
      </div>
    </div>
    <!-- 任务数量 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon">
        任务数量
        <em class="TitleNum-box">{{taskNum}}</em>
      </div>
      <div class="pies-con">
        <div>
          <div id="taskPie1"></div>
          <div class="pies-message">
            <strong>上报数量</strong>
            <span>{{ taskList.sbsl }}</span>
            <strong>未报数量</strong>
            <span>{{ taskList.wbsl }}</span>
          </div>
        </div>
        <div>
          <div id="taskPie2"></div>
          <div class="pies-message">
            <strong>及时上报</strong>
            <span>{{ taskList.jssb }}</span>
            <strong>超期上报</strong>
            <span>{{ taskList.cqsb }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 填报单位统计报表 -->
    <div>
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon">
        填报单位统计报表
      </div>
      <div class="ProgressTableCon">
        <table class="ProgressTable" border="none">
          <thead>
            <tr>
              <th>周期</th>
              <th>任务总数</th>
              <th>上报率</th>
              <th>上报及时率</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in TableMessage" :key="item.id">
              <td>{{item.ReportPeriod}}</td>
              <td>{{item.CompanyDo}}</td>
              <td>{{item.ReportRate}}</td>
              <td>{{item.ReportInRate}}</td>
            </tr>
          </tbody>
        </table>
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
      showLoading: false, //加载动画
      // 四个指标
      StatisticsList: [
        {
          src: require("../../assets/img/progress1.png"),
          title: "报表数",
          value: "0"
        },
        {
          src: require("../../assets/img/progress2.png"),
          title: "任务期数",
          value: "0"
        },
        {
          src: require("../../assets/img/progress3.png"),
          title: "填报单位",
          value: "0"
        },
        {
          src: require("../../assets/img/progress4.png"),
          title: "任务报表数",
          value: "0"
        }
      ],
      taskNum: "0", //任务数量 总数
      taskList: {
        sbsl: "0",
        wbsl: "0",
        jssb: "0",
        cqsb: "0"
      },
      PieProgress: [0, 0],
      // 表格信息
      TableMessage: []
    };
  },
  mounted() {
    Utils.checkLoginStatus(this, () => {
      this.init();
    });
  },
  methods: {
    // 初始化筛选选项
    init() {
      let that = this;
      Utils.showLoading(that);
      // 四个指标
      let params = JSON.stringify({
        UserId: that.$store.state.user.UserId
      });
      post("/API/PoorHelpAPI/GetReportSubmitTotal", params)
        .then(resp => {
          if (resp.ret == "0") {
            // 四个指标
            that.StatisticsList[0].value = resp.data.ReportNum;
            that.StatisticsList[1].value = resp.data.TaskPeriod;
            that.StatisticsList[2].value = resp.data.ReportOffice;
            that.StatisticsList[3].value = resp.data.TaskReportNum;
            // 任务数量
            that.taskNum = resp.data.CompanyDo;
            that.taskList.sbsl = resp.data.TotalReport;
            that.taskList.wbsl = resp.data.TotalUnreport;
            that.taskList.jssb = resp.data.Report;
            that.taskList.cqsb = resp.data.OverReport;
            that.PieProgress[0] = (
              (resp.data.TotalReport /
                (parseInt(resp.data.TotalReport) +
                  parseInt(resp.data.TotalUnreport))) *
              100
            ).toFixed(2);
            that.PieProgress[1] = (
              (resp.data.Report /
                (parseInt(resp.data.Report) + parseInt(resp.data.OverReport))) *
              100
            ).toFixed(2);
            // 百分百时不要两位小数
            if (that.PieProgress[1] == 100) {
              that.PieProgress[1] = 100;
            }
            if (resp.data.TotalReport == "0") {
              that.PieProgress[0] = '0'
            }
            if (resp.data.Report == "0") {
              that.PieProgress[1] = '0'
            }
            // 渲染图形
            let YQtimer = setTimeout(function() {
              that.pieEcharts();
            }, 100);
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "获取数据错误");
        });
      //统计报表
      post("/API/PoorHelpAPI/GetReportSubmitCollectionTable", params)
        .then(resp => {
          if (resp.ret == "0") {
            that.TableMessage = resp.data;
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "获取统计报表数据错误");
        });
    },
    pieEcharts() {
      // 获取颜色列表和数据列表
      let that = this;
      let PieData = that.PieProgress;
      let PieData1 = [
        { Name: "上报率", value: PieData[0] },
        { Name: "上报失败率", value: 100 - PieData[0] }
      ];
      let PieData2 = [
        { Name: "及时上报率", value: PieData[1] },
        { Name: "非及时上报率", value: 100 - PieData[1] }
      ];
      let pieEcharts = this.$echarts.init(document.getElementById("taskPie1"));
      // 绘制图表
      pieEcharts.setOption({
        tooltip: {
          show: true,
          trigger: "item",
          formatter: function(params, ticket, callback) {
            var str =
              '<div style="text-align: center"><p style="font-size:18px;color: #4b89f7;margin:0px">' +
              PieData[0] +
              '%</p><p style="font-size:12px;color: #888">上报率</p></div>';
            return str;
          },
          position: function(point, params, dom, rect, size) {
            //size参数可以拿到提示框的outerWidth和outerheight，dom参数可以拿到提示框div节点。
            var marginW = Math.ceil(size.contentSize[0] / 2);
            var marginH = Math.ceil(size.contentSize[1] / 2);
            dom.style.marginLeft = "-" + marginW + "px";
            dom.style.marginTop = "-" + marginH + "px";
            return ["50%", "50%"];
          },
          alwaysShowContent: true,
          backgroundColor: "#f3f5f6", //设置提示框的背景色
          textStyle: {
            color: "#333"
          }
        },
        color: ["#0ebdca", "#f4f4f4"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["80%", "95%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            clockWise: false,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: PieData1
          }
        ]
      });
      pieEcharts.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: 0
      });
      let pieEcharts2 = this.$echarts.init(document.getElementById("taskPie2"));
      // 绘制图表
      pieEcharts2.setOption({
        tooltip: {
          show: true,
          trigger: "item",
          formatter: function(params, ticket, callback) {
            var str =
              '<div style="text-align: center"><p style="font-size:18px;color: #4b89f7;margin:0px">' +
              PieData[1] +
              '%</p><p style="font-size:12px;color: #888">及时上报率</p></div>';
            return str;
          },
          position: function(point, params, dom, rect, size) {
            //size参数可以拿到提示框的outerWidth和outerheight，dom参数可以拿到提示框div节点。
            var marginW = Math.ceil(size.contentSize[0] / 2);
            var marginH = Math.ceil(size.contentSize[1] / 2);
            dom.style.marginLeft = "-" + marginW + "px";
            dom.style.marginTop = "-" + marginH + "px";
            return ["50%", "50%"];
          },
          alwaysShowContent: true,
          backgroundColor: "#f3f5f6", //设置提示框的背景色
          textStyle: {
            color: "#333"
          }
        },
        color: ["#94da74", "#f4f4f4"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["80%", "95%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            clockWise: false,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: PieData2
          }
        ]
      });
      pieEcharts2.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: 0
      });
      Utils.hideLoading(that);
    }
  }
};
document.title = "进度总览";
</script>