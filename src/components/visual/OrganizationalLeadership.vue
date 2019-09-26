<style>
.font-size-0 {
  font-size: 0 !important;
}
.border-bottom-20px {
  border-bottom: 0.2rem solid #f4f4f4;
}
.workTable-query {
  padding: 0.2rem 0.3rem;
  font-size: 0;
  border-bottom: 0.01rem solid #e0e0e0;
}
#select-address {
  width: 61%;
  margin-right: 3%;
}
#select-data {
  width: 36%;
}
.Statistics-con {
  box-sizing: border-box;
  height: 4.4rem;
  padding-top: 0.5rem;
  text-align: center;
  background: #fff url(../../assets/img/mountain-bg.png) bottom no-repeat;
  background-size: 100%;
}
.Statistics-box {
  box-sizing: border-box;
  display: inline-block;
  width: 43.5%;
  height: 1.42rem;
  padding: 0.33rem 0 0 0.23rem;
  margin-bottom: 0.4rem;
  background: #fff;
  border-radius: 0.05rem;
  box-shadow: 0.03rem 0.03rem 0.05rem #f1f1f1, -0.03rem -0.03rem 0.05rem #f1f1f1;
}
.Statistics-box:nth-child(2n + 1) {
  margin-right: 5%;
}
.Statistics-box img {
  display: block;
  float: left;
  width: 0.74rem;
  height: 0.74rem;
  margin-right: 0.19rem;
}
.Statistics-box strong {
  display: block;
  overflow: hidden;
  width: 55%;
  margin-bottom: 0.1rem;
  font-size: 0.22rem;
  color: #888;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.Statistics-box span {
  display: block;
  overflow: hidden;
  width: 55%;
  font-size: 0.26rem;
  color: #333;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
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
.Statistics-title {
  line-height: 0.6rem;
  font-size: 0.46rem;
  color: #333;
  text-align: center;
}
#eastBar,
#westBar,
#personnelBar {
  height: 3.55rem;
}
#pie-echarts {
  display: inline-block;
  width: 52%;
  height: 3.42rem;
}
.pie-message {
  display: inline-block;
  width: 44%;
  padding-top: 0.5rem;
  vertical-align: top;
}
.message-box {
  padding-right: 0.3rem;
  font-size: 0;
  margin-bottom: 0.15rem;
}
#pie-echarts div {
  background: none !important;
}
.message-box span {
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border-radius: 50%;
  margin-right: 0.16rem;
}
.message-box em {
  display: inline-block;
  font-size: 0.3rem;
  color: #333;
}
.message-box p {
  padding-left: 0.33rem;
  white-space: nowrap;
  overflow: auto;
  font-size: 0.22rem;
  color: #888;
}
.school-hospital-echarts {
  width: 92%;
  font-size: 0;
  padding-bottom: 0.2rem;
  margin: 0.5rem auto 0;
  text-align: center;
}
.SH-echarts-box {
  display: inline-block;
  width: 33%;
}
.SH-echarts-box div {
  height: 1.6rem;
}
.SH-echarts-box p {
  padding-top: 0.1rem;
  font-size: 0.22rem;
  color: #888;
}
.regionCon {
  padding-bottom: 0.15rem;
}
.region-box {
  display: flex;
  padding: 0 0.3rem;
  justify-content: space-between;
  align-items: center;
}
.region-name {
  display: inline-block;
  overflow: hidden;
  width: 15%;
  height: 0.52rem;
  line-height: 0.52rem;
  font-size: 0.22rem;
  color: #888;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.Proportion-box {
  display: inline-block;
  width: 69%;
  height: 0.16rem;
  margin: 0 2.5%;
  border-radius: 0.1rem;
  background: #f4f4f4;
}
.region-box strong {
  display: inline-block;
  width: 11%;
  height: 0.52rem;
  line-height: 0.52rem;
  font-size: 0.22rem;
  color: #333;
}
.Proportion-inner {
  display: block;
  float: left;
  max-width: 100%;
  height: 100%;
  border-radius: 0.1rem;
  background: #4b89f7;
}
</style>

<template>
  <div class="workTable-wrap">
    <!-- 头部 -->
    <mt-header title="组织领导" style="display: none">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 查询模块 -->
    <div class="workTable-query">
      <div class="mobileSelect-box" id="select-address" @click="ShowAddressPup()">{{wRegionName}}</div>
      <div class="mobileSelect-box" id="select-data" @click="ShowDataPup()">{{wDataName}}</div>
    </div>
    <!-- 统计区 -->
    <div class="Statistics-con border-bottom-20px">
      <div class="Statistics-box" v-for="item in StatisticsList" :key="item.id">
        <img :src="item.src" alt />
        <strong>{{ item.title }}</strong>
        <span>{{ item.value }}</span>
      </div>
    </div>
    <!-- 东部地区到西部地区调研对接 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        东部地区到西部地区调研对接
      </div>
      <h2 class="Statistics-title">总计{{ eastNum }}人次</h2>
      <div id="eastBar"></div>
    </div>
    <!-- 西部地区到东部地区调研对接 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        西部地区到东部地区调研对接
      </div>
      <h2 class="Statistics-title">总计{{ westNum }}人次</h2>
      <div id="westBar"></div>
    </div>
    <!-- 召开会议专题 -->
    <div class="border-bottom-20px font-size-0">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        召开会议专题
      </div>
      <div id="pie-echarts"></div>
      <div class="pie-message">
        <div class="message-box" v-for="item in pieList" :key="item.id">
          <span :style="{background: item.color}"></span>
          <em>{{ item.value }}次</em>
          <p>{{ item.Name }}</p>
        </div>
      </div>
    </div>
    <!-- 东部地区到西部地区调研分布 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        东部地区到西部地区调研分布
        <span class="float-r">单位：人次</span>
      </div>
      <h2 class="Statistics-title">总计{{ meetingNum }}人次</h2>
      <div class="regionCon">
        <div class="region-box" v-for="item in regionList" :key="item.id">
          <span class="region-name">{{ item.Name }}</span>
          <div class="Proportion-box">
            <span class="Proportion-inner" :style="{width: item.proportion + '%'}"></span>
          </div>
          <strong>{{ item.Value }}</strong>
        </div>
      </div>
    </div>
    <!-- 专业技术人才交流 -->
    <!-- <div class="border-bottom-20px">
            <div class="box-title">
                <img src="../../assets/img/title-icon.png" alt="" class="title-icon">
                专业技术人才交流
            </div>
            <h2 class="Statistics-title">总计{{ personnelNum }}人次</h2>
            <div id="personnelBar"></div>
    </div>-->
    <!-- 加载动画 -->
    <div class="loading-box">
      <loading v-model="showLoading"></loading>
    </div>
    <popup-picker :data="dataArr" :show.sync="showData" @on-change="onChangeData"></popup-picker>
    <popup-picker :data="addressArr" :show.sync="showAddress" @on-change="onChangeAddress"></popup-picker>
  </div>
</template>

<script>
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
      showLoading: false, //加载动画
      ThisYear: "2019", //当前年
      firsrtQuery: true,
      eastNum: "",
      westNum: "",
      wData: "", //选择的时间
      wDataName: "",
      wRegion: "", //选择的地址
      wRegionName: "",
      eastCadreNum: "",
      meetingNum: "",
      personnelNum: "",
      eastBarData: [],
      westBarData: [],
      PiesData: [],
      CommunicationData: [],
      StatisticsList: [
        {
          src: require("../../assets/img/Statistics-icon-1.png"),
          title: "东西部调研对接",
          value: "0人次"
        },
        {
          src: require("../../assets/img/Statistics-icon-2.png"),
          title: "高层联席会议",
          value: "0次"
        },
        {
          src: require("../../assets/img/Statistics-icon-3.png"),
          title: "选派挂职干部",
          value: "0人次"
        },
        {
          src: require("../../assets/img/Statistics-icon-4.png"),
          title: "党政干部培训",
          value: "0人次"
        }
      ],
      pieList: [],
      regionList: [],
      // popupPicker的组件
      showData: false,
      showAddress: false,
      dataArr: [],
      addressArr: []
    };
  },
  mounted() {
    Utils.checkLoginStatus(this, () => {
      this.init();
    });
    // this.initMobileSelect();
  },
  methods: {
    // 初始化筛选选项
    init() {
      let that = this;
      let ThisYear = new Date().getFullYear();
      that.ThisYear = ThisYear;
      Utils.showLoading(that);
      // 区域
      post(
        "/API/PoorHelpAPI/GetRegions",
        JSON.stringify({
          UserId: that.$store.state.user.UserId
        })
      )
        .then(resp => {
          if (resp.ret == "0") {
            let addressList = [];
            for (let i = 0; i < resp.data.length; i++) {
              addressList.push({
                name: resp.data[i].Name,
                value: resp.data[i].Code
              });
            }
            that.wRegion = resp.data[0].Code;
            that.wRegionName = resp.data[0].Name;
            that.addressArr.push(addressList);
            that.initData();
          } else {
            Utils.hideLoading(that);
            tils.toast(that, "获取区域数据错误" + resp.status);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取区域数据错误");
        });
      //年份
      post("/API/PoorHelpAPI/GetReportMinData")
        .then(resp => {
          if (resp.ret == "0") {
            let StartYear = resp.data;
            let YearLength = ThisYear - StartYear;
            let YearArr = [];
            YearArr.push({ name: ThisYear + "年", value: ThisYear });
            for (let j = 1; j <= YearLength; j++) {
              let prevYear = ThisYear - j;
              YearArr.push({ name: prevYear + "年", value: prevYear });
            }
            that.wData = ThisYear;
            that.wDataName = ThisYear + "年";
            that.dataArr.push(YearArr);
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取年份数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取年份数据错误");
        });
    },
    // 展示默认数据，及根据地址和日期筛选
    initData() {
      let that = this;
      // 暂时使用
      let QueryAddress = that.wRegion || "GSLX",
        QueryYear = that.wData || that.ThisYear;
      // 四条指标
      let params = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear
      });
      post("/API/PoorHelpAPI/GetOrgIndicatrix", params)
        .then(resp => {
          if (resp.ret == "0") {
            that.StatisticsList[0].value = resp.data.dydj + "人次";
            that.StatisticsList[1].value = resp.data.gclxhy + "次";
            that.StatisticsList[2].value = resp.data.gzgb + "人次";
            that.StatisticsList[3].value = resp.data.dzgbpx + "人次";
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取指标数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取指标数据错误");
        });
      // 东部地区到西部地区调研对接  柱状图数据获取
      let BarParamsE = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A61"
      });
      post("/API/PoorHelpAPI/GetEastWestCount", BarParamsE)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log(resp.data[0].List)
            let addAll = 0;
            for (let i = 0; i < resp.data[0].List.length; i++) {
              addAll += parseInt(resp.data[0].List[i].Value);
              that.eastBarData[i] = resp.data[0].List[i].Value;
            }
            // console.log(that.eastBarData)
            that.eastNum = addAll;
            that.eastBar();
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取东部地区到西部地区数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取东部地区到西部地区数据错误");
        });
      // 西部地区到东部地区调研对接  柱状图数据获取
      let BarParamsW = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A62"
      });
      post("/API/PoorHelpAPI/GetEastWestCount", BarParamsW)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log(resp.data[0].List)
            let addAll = 0;
            for (let i = 0; i < resp.data[0].List.length; i++) {
              addAll += parseInt(resp.data[0].List[i].Value);
              that.westBarData[i] = resp.data[0].List[i].Value;
            }
            // console.log(addAll)
            that.westNum = addAll;
            that.westBar();
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取西部地区到东部地区数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取西部地区到东部地区数据错误");
        });
      // 召开会议专题
      let MeetingParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A64"
      });
      // console.log("MeetingParams", MeetingParams);
      post("/API/PoorHelpAPI/GetSubStaticByIndx", MeetingParams)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log("召开会议专题", resp);
            // 空数据处理
            if (resp.data[0].List.length == 0) {
              resp.data[0].List = [
                { Name: "以市级名义召开的其他会议", Value: "0" },
                { Name: "市政府常务会", Value: "0" },
                { Name: "市党委常委会", Value: "0" }
              ];
            }
            let PieColor = ["#94da74", "#0ebdca", "#4b89f7"];
            for (let i = 0; i < resp.data[0].List.length; i++) {
              resp.data[0].List[i].color = PieColor[i];
              resp.data[0].List[i].value = resp.data[0].List[i].Value;
            }
            that.pieList = resp.data[0].List;
            that.pieEcharts();
            // console.log('444',that.pieList)
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取召开会议专题数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取召开会议专题数据错误");
        });
      // 干部培训
      let CadreTrain = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A45"
      });
      post("/API/PoorHelpAPI/GetDetailStaticByIndx", CadreTrain)
        .then(resp => {
          if (resp.ret == "0") {
            that.regionList = resp.data[0].List;
            // 获取最大值，并以此值为参考值
            let MaxNum = resp.data[0].List[0].Value;
            for (let i = 0; i < resp.data[0].List.length; i++) {
              if (MaxNum < resp.data[0].List[i].Value) {
                MaxNum = resp.data[0].List[i].Value;
              }
            }
            let addAll = 0;
            for (let j = 0; j < resp.data[0].List.length; j++) {
              addAll += parseInt(resp.data[0].List[j].Value);
              that.regionList[j].proportion =
                (resp.data[0].List[j].Value / MaxNum) * 100;
            }
            that.meetingNum = addAll;
            Utils.hideLoading(that);
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取干部培训数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取干部培训数据错误");
        });
    },
    eastBar() {
      let barData = this.eastBarData;
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("eastBar"));
      // 绘制图表
      myChart.setOption({
        xAxis: {
          data: ["省级", "地厅级", "其他"],
          axisLine: {
            lineStyle: {
              color: "#999",
              width: 1
            }
          }
        },
        grid: {
          left: "5%",
          right: "5%",
          top: "10%",
          bottom: "8%",
          containLabel: true
        },
        yAxis: {
          type: "value",
          splitLine: { show: false },
          axisLabel: {
            formatter: "{value}人次"
          },
          splitNumber: 3,
          axisLine: {
            lineStyle: {
              color: "#999",
              width: 1
            }
          }
        },
        series: [
          {
            type: "bar",
            itemStyle: {
              normal: {
                color: "#4b89f7"
              }
            },
            label: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  fontSize: 14,
                  color: "#333"
                },
                formatter: function(params) {
                  return params.data + "人次";
                }
              }
            },
            barWidth: 60,
            data: barData
          }
        ]
      });
    },
    westBar() {
      let barData = this.westBarData;
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("westBar"));
      // 绘制图表
      myChart.setOption({
        xAxis: {
          data: ["省级", "地厅级", "其他"],
          axisLine: {
            lineStyle: {
              color: "#999",
              width: 1
            }
          }
        },
        grid: {
          left: "5%",
          right: "5%",
          top: "10%",
          bottom: "8%",
          containLabel: true
        },
        yAxis: {
          type: "value",
          splitLine: { show: false },
          axisLabel: {
            formatter: "{value}人次"
          },
          splitNumber: 3,
          axisLine: {
            lineStyle: {
              color: "#999",
              width: 1
            }
          }
        },
        series: [
          {
            type: "bar",
            itemStyle: {
              normal: {
                color: "#0ebdca"
              }
            },
            label: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  fontSize: 14,
                  color: "#333"
                },
                formatter: function(params) {
                  return params.data + "人次";
                }
              }
            },
            barWidth: 60,
            data: barData
          }
        ]
      });
    },
    pieEcharts() {
      // 获取颜色列表和数据列表
      let addAll = 0;
      let pieMessage = this.pieList;
      for (let i = 0; i < this.pieList.length; i++) {
        addAll += parseInt(this.pieList[i].value);
      }
      let pieEcharts = this.$echarts.init(
        document.getElementById("pie-echarts")
      );
      // 绘制图表
      pieEcharts.setOption({
        tooltip: {
          show: true,
          trigger: "item",
          formatter: function(params, ticket, callback) {
            var str =
              '<div style="text-align: center"><p style="font-size:20px;color: #4b89f7;margin:0px">' +
              addAll +
              '次</p><p style="font-size:14px;color: #999">总计</p></div>';
            return str;
          },
          position: function(point, params, dom, rect, size) {
            //size参数可以拿到提示框的outerWidth和outerheight，dom参数可以拿到提示框div节点。
            //console.log(dom)可以看到，提示框是用position定位
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
        color: ["#94da74", "#0ebdca", "#4b89f7"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["70%", "85%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            minAngle: 20,
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
            data: pieMessage
          }
        ]
      });
      pieEcharts.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: 0
      });
    },
    echartsPies() {
      let PiesData = this.PiesData;
      // console.log('77777777',PiesData)
      let Pie1 = this.$echarts.init(
        document.getElementById("SH-echart-school")
      );
      Pie1.setOption({
        series: [
          {
            center: ["50%", "50%"],
            radius: ["90%", "85%"],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            itemStyle: {
              normal: {
                borderColor: "#0ebdca",
                borderWidth: 3,
                labelLine: {
                  show: false
                }
              }
            },
            data: [
              {
                value: PiesData[0].proportion,
                name: PiesData[0].Value + "人次",
                label: {
                  normal: {
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: "18",
                      fontWeight: "normal",
                      color: "#0ebdca"
                    }
                  }
                }
              },
              {
                name: " ",
                value: 100 - PiesData[0].proportion,
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    },
                    color: "#0ebdca",
                    borderColor: "#0ebdca",
                    borderWidth: 0
                  },
                  emphasis: {
                    color: "#0ebdca",
                    borderColor: "#0ebdca",
                    borderWidth: 0
                  }
                }
              }
            ]
          }
        ]
      });
      let Pie2 = this.$echarts.init(document.getElementById("SH-echart-peo"));
      Pie2.setOption({
        series: [
          {
            center: ["50%", "50%"],
            radius: ["90%", "85%"],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            itemStyle: {
              normal: {
                borderColor: "#94da74",
                borderWidth: 3,
                labelLine: {
                  show: false
                }
              }
            },
            data: [
              {
                value: PiesData[1].proportion,
                name: PiesData[1].Value + "人次",
                label: {
                  normal: {
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: "18",
                      fontWeight: "normal",
                      color: "#94da74"
                    }
                  }
                }
              },
              {
                name: " ",
                value: 100 - PiesData[1].proportion,
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    },
                    color: "#94da74",
                    borderColor: "#94da74",
                    borderWidth: 0
                  },
                  emphasis: {
                    color: "#94da74",
                    borderColor: "#94da74",
                    borderWidth: 0
                  }
                }
              }
            ]
          }
        ]
      });
      let Pie3 = this.$echarts.init(
        document.getElementById("SH-echart-hospital")
      );
      Pie3.setOption({
        series: [
          {
            center: ["50%", "50%"],
            radius: ["90%", "85%"],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            itemStyle: {
              normal: {
                borderColor: "#ffb463",
                borderWidth: 3,
                labelLine: {
                  show: false
                }
              }
            },
            data: [
              {
                value: PiesData[2].proportion,
                name: PiesData[2].Value + "人次",
                label: {
                  normal: {
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: "18",
                      fontWeight: "normal",
                      color: "#ffb463"
                    }
                  }
                }
              },
              {
                name: " ",
                value: 100 - PiesData[2].proportion,
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    },
                    color: "#ffb463",
                    borderColor: "#ffb463",
                    borderWidth: 0
                  },
                  emphasis: {
                    color: "#ffb463",
                    borderColor: "#ffb463",
                    borderWidth: 0
                  }
                }
              }
            ]
          }
        ]
      });
    },
    personnelBar() {
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("personnelBar"));
      // 绘制图表
      myChart.setOption({
        xAxis: {
          data: [
            "帮扶时间\n1-6个月",
            "帮扶时间\n6-12个月",
            "帮扶时间\n12个月以上"
          ],
          axisLine: {
            lineStyle: {
              color: "#999",
              width: 1
            }
          }
        },
        grid: {
          left: "5%",
          right: "5%",
          top: "12%",
          bottom: "5%",
          containLabel: true
        },
        yAxis: {
          type: "value",
          splitLine: { show: false },
          axisLabel: {
            formatter: "{value}人次"
          },
          splitNumber: 3,
          axisLine: {
            lineStyle: {
              color: "#999",
              width: 1
            }
          }
        },
        series: [
          {
            type: "bar",
            itemStyle: {
              normal: {
                color: "#0ebdca"
              }
            },
            label: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  fontSize: 14,
                  color: "#333"
                },
                formatter: function(params) {
                  return params.data + "人次";
                }
              }
            },
            barWidth: 60,
            data: that.CommunicationData
          }
        ]
      });
    },
    // 显示popupPick
    ShowDataPup() {
      this.showData = true;
    },
    ShowAddressPup() {
      this.showAddress = true;
    },
    // 选择改变地区
    onChangeAddress(val) {
      let that = this;
      that.wRegion = val[0];
      if (
        !!that.addressArr &&
        !!that.addressArr[0] &&
        that.addressArr[0] instanceof Array
      ) {
        for (let i = 0; i < that.addressArr[0].length; i++) {
          if (val[0] == that.addressArr[0][i].value) {
            this.wRegionName = that.addressArr[0][i].name;
          }
        }
      }
    },
    // 选择改变时间
    onChangeData(val) {
      let that = this;
      that.wData = val[0];
      that.wDataName = val[0] + "年";
    },
  },
  watch: {
    wRegion() {
      this.initData();
    },
    wData() {
      this.initData();
    }
  }
};
document.title = "组织领导";
</script>
