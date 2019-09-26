<style>
.font-size-0 {
  font-size: 0 !important;
}
.border-bottom-20px {
  border-bottom: 0.2rem solid #f4f4f4;
}
.text-align-center {
  text-align: center;
}
.tab-list {
  width: 100%;
  overflow-x: auto;
  font-size: 0;
  white-space: nowrap;
}
.tab-list strong {
  display: inline-block;
  padding: 0 0.28rem;
  line-height: 0.9rem;
  font-size: 0.24rem;
  color: #888;
  border-bottom: 0.01rem solid #e0e0e0;
  cursor: pointer;
}
.tab-list strong.active {
  line-height: 0.89rem;
  color: #4b89f7;
  border-bottom: 0.02rem solid #4b89f7;
}
.map-box {
  height: 5.7rem;
  background: #fff;
}
.map-box img {
  display: block;
  width: 100%;
  height: 100%;
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
  /* width: 55%; */
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
#pie-echarts {
  display: inline-block;
  width: 52%;
  height: 3.42rem;
}
.pie-message {
  display: inline-block;
  width: 44%;
  padding-top: 0.5rem;
  margin-left: -0.2rem;
  vertical-align: top;
}
.pie-message-con {
  font-size: 0;
  margin-bottom: 0.15rem;
}
.pie-message-con span {
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border-radius: 50%;
  margin-top: 0.07rem;
  vertical-align: top;
  margin-right: 0.16rem;
}
.pie-message-con em {
  display: inline-block;
  width: 88%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.22rem;
  color: #888;
}
.pie-message-con p {
  padding: 0.1rem 0 0 0.33rem;
  white-space: nowrap;
  overflow: auto;
  font-size: 0.28rem;
  color: #333;
}
.pie-message-con p strong {
  float: right;
  font-size: 0.24rem;
  color: #21dba0;
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
  height: 100%;
  border-radius: 0.1rem;
  background: #4b89f7;
}
#pie-echarts div {
  background: none !important;
}
#Construction-input {
  height: 3.6rem;
}
.Statistics-title {
  line-height: 0.6rem;
  font-size: 0.46rem;
  color: #333;
  text-align: center;
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
.Statistics-title {
  line-height: 0.6rem;
  font-size: 0.46rem;
  color: #333;
  text-align: center;
}
#trainingCourse,
#rosePie {
  position: relative;
  height: 3.8rem;
}
#rosePie:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.35rem;
  background: #fff;
}
.signCon {
  padding: 0 0.3rem;
  font-size: 0;
}
.signBox {
  display: inline-block;
  width: 20%;
  margin-bottom: 0.2rem;
  vertical-align: top;
}
.sign-icon {
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.1rem;
  border-radius: 50%;
}
.signBox em {
  font-size: 0.24rem;
  color: #888;
}
.studentSign {
  display: flex;
  padding: 0 0.3rem;
  margin-bottom: 0.2rem;
  justify-content: space-between;
  align-items: center;
}
.studentSign strong {
  font-size: 0.24rem;
  color: #888;
}
.studentSign strong span {
  margin-right: 0.1rem;
}
.student-Statistics {
  padding: 0.2rem 0.3rem;
}
.student-Statistics-box {
  width: 100%;
  height: 0.3rem;
  font-size: 0.24rem;
  margin-bottom: 0.3rem;
}
.attend-School-em,
.employment-Number-em {
  display: block;
  float: left;
  width: 9.3%;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #333;
}
.attend-School-em {
  text-align: left;
}
.employment-Number-em {
  text-align: right;
}
.student-Statistics-box strong {
  display: block;
  float: left;
  width: 26%;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  color: #888;
}
.attend-School-box,
.employment-box {
  float: left;
  width: 27.7%;
  height: 0.16rem;
  margin-top: 0.07rem;
  border-radius: 0.1rem;
}
.attend-School-box span {
  display: block;
  float: right;
  /* min-width: 3%; */
  max-width: 100%;
  height: 0.16rem;
  background: #4b89f7;
  border-radius: 0.1rem;
}
.employment-box span {
  display: block;
  float: left;
  /* min-width: 3%; */
  max-width: 100%;
  height: 0.16rem;
  background: #0ebdca;
  border-radius: 0.1rem;
}
</style>

<template>
  <div class="bigData">
    <!-- 头部 -->
    <mt-header title="劳务协作" style="display: none">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 头部筛选 -->
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
    <!-- 举办培训班 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        举办培训班
        <span class="float-r">单位：期</span>
      </div>
      <h2 class="Statistics-title">总计{{ trainingCourse }}期</h2>
      <div id="trainingCourse"></div>
    </div>
    <!-- 贫困人口就业培训 -->
    <div class="border-bottom-20px" v-if="wRegion == 'GSLX'">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        贫困人口就业培训
      </div>
      <div class="signCon">
        <div class="signBox" v-for="(item,index) in signList" :key="item.id">
          <span class="sign-icon" :style="{background: colorArr[index]}"></span>
          <em>{{item.Name}}</em>
        </div>
      </div>
      <div id="rosePie"></div>
    </div>
    <!-- 帮助实现就业 -->
    <div class="border-bottom-20px font-size-0">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        帮助实现就业
      </div>
      <div id="pie-echarts"></div>
      <div class="pie-message">
        <div class="pie-message-con" v-for="(item,i) in workList" :key="item.id">
          <span :style="{background: pieColor[i]}"></span>
          <em>{{ item.Name }}</em>
          <p>
            {{ item.Value }}人
            <strong>占比 {{ item.proportion }}%</strong>
          </p>
        </div>
      </div>
    </div>
    <!-- 东部就读职校西部贫困学生 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        东部就读职校西部贫困学生
      </div>
      <div class="studentSign">
        <strong>
          <span class="sign-icon" style="background: #4b89f7"></span>东部就读职校西部贫困学生
        </strong>
        <strong>
          <span class="sign-icon" style="background: #0ebdca"></span>毕业贫困学生就业分布
        </strong>
      </div>
      <h2 class="Statistics-title">总计 {{stdentsNumber}} 人</h2>
      <div class="student-Statistics">
        <div class="student-Statistics-box" v-for="item in studentsList" :key="item.id">
          <em class="attend-School-em">{{ item.JiuDu }}</em>
          <div class="attend-School-box">
            <span :style="{width: item.JiuDuProportion + '%'}"></span>
          </div>
          <strong>{{ item.Name }}</strong>
          <div class="employment-box">
            <span :style="{width: item.JiuYeProportion + '%'}"></span>
          </div>
          <em class="employment-Number-em">{{ item.JiuYe }}</em>
        </div>
      </div>
    </div>
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
import { Loading,PopupPicker } from "vux";
export default {
  components: {
    Loading,
    PopupPicker
  },
  data() {
    return {
      showLoading: false, //加载动画
      wRegionName: "",
      ThisYear: "", //当前年
      wRegion: "", //选择的地址
      wData: "", //选择的时间
      wDataName: '',
      trainingCourse: "", //举办培训班总数
      trainingCourseData: [], //举办培训班数据
      colorArr: [
        "#f845f1",
        "#ad46f3",
        "#5045f6",
        "#4777f5",
        "#44aff0",
        "#45dbf7",
        "#f6d54a",
        "#f69846",
        "#ff4343",
        "#b60000"
      ], // 玫瑰图颜色列表
      pieColor: ["#94da74", "#0ebdca", "#4b89f7"],
      stdentsNumber: "", //东部就读职校西部贫困学生 总人数
      StatisticsList: [
        {
          src: require("../../assets/img/Statistics-icon-12.png"),
          title: "举办培训班",
          value: "0期"
        },
        {
          src: require("../../assets/img/Statistics-icon-13.png"),
          title: "帮助实现就业数",
          value: "0人"
        },
        {
          src: require("../../assets/img/Statistics-icon-3.png"),
          title: "就业培训人次",
          value: "0人次"
        },
        {
          src: require("../../assets/img/Statistics-icon-14.png"),
          title: "东部就业政策文件",
          value: "0件"
        }
      ],
      workList: [],
      pieList: [],
      regionList: [],
      signList: [],
      studentsList: [],
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
      post("/API/PoorHelpAPI/GetServicesIndex", params)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log(resp.data)
            that.StatisticsList[0].value = resp.data.Jbpxb + "期";
            that.StatisticsList[1].value = resp.data.Bzsxjys + "人";
            that.StatisticsList[2].value = resp.data.Jypxrs + "人次";
            that.StatisticsList[3].value = resp.data.Dbwdjyzcwj + "件";
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取指标数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取指标数据错误");
        });
      // 举办培训班 数据获取
      let trainingCourseParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A31"
      });
      post("/API/PoorHelpAPI/GetDetailStaticByIndx", trainingCourseParams)
        .then(resp => {
          if (resp.ret == "0") {
            let that = this;
            // console.log(resp.data)
            that.trainingCourseData = resp.data[0].List;
            that.trainingCourse = resp.data[0].Total;
            that.trainingCourseBar();
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取培训班数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取培训班数据错误");
        });
      // 贫困人口就业培训  数据获取
      let TrainParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A311"
      });
      post("/API/PoorHelpAPI/GetDetailStaticByIndx", TrainParams)
        .then(resp => {
          if (resp.ret == "0") {
            let newDataList = [];
            for (let i = 0; i < resp.data[0].List.length; i++) {
              // console.log("贫困人口就业培训", resp.data[0].List[i].Name);
              if (
                resp.data[0].List[i].Name != "甘肃临夏州" &&
                newDataList.length < 10
              ) {
                newDataList.push(resp.data[0].List[i]);
              }
            }
            that.signList = newDataList;
            if (QueryAddress == "GSLX") {
              that.rosePie();
            }
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取就业培训数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取就业培训数据错误");
        });
      // // 帮助实现就业  数据获取
      let employmentParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A32"
      });
      // console.log("employmentParams", employmentParams);
      post("/API/PoorHelpAPI/GetSubStaticByIndx", employmentParams)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log("帮助实现就业", resp);
            that.workList = resp.data[0].List;
            that.pieEcharts();
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取实现就业数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取实现就业数据错误");
        });
      // 东部就读职校西部贫困学生  数据获取
      let StudentParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear
      });
      // console.log("StudentParams", StudentParams);
      post("/API/PoorHelpAPI/GetEastStudyCount", StudentParams)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log("东部就读职校西部贫困学生", resp);
            for (let i = 0; i < resp.data[0].List.length; i++) {
              resp.data[0].List[i].JiuDuProportion =
                (resp.data[0].List[i].JiuDu / resp.data[0].MaxLength) * 100;
              resp.data[0].List[i].JiuYeProportion =
                (resp.data[0].List[i].JiuYe / resp.data[0].MaxLength) * 100;
            }
            that.stdentsNumber = resp.data[0].Total;
            that.studentsList = resp.data[0].List;
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取就读学生数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取就读学生数据错误");
        });
    },
    //举办培训班 柱状图
    trainingCourseBar() {
      let DataList = this.trainingCourseData;
      let DataTitle = [],
        DataNum = [];
      for (let i = 0; i < DataList.length; i++) {
        DataTitle[i] = DataList[i].Name;
        DataNum[i] = DataList[i].Value;
      }
      let myChart = this.$echarts.init(
        document.getElementById("trainingCourse")
      );
      // 绘制图表
      myChart.setOption({
        xAxis: {
          axisLine: {
            lineStyle: {
              color: "#f1f1f1",
              width: "1"
            }
          },
          splitLine: false,
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            rotate: 45,
            textStyle: {
              color: "#888"
            }
          },
          data: DataTitle
        },
        grid: {
          left: "5%",
          right: "5%",
          top: "12%",
          bottom: "1%",
          containLabel: true
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              color: "#f1f1f1",
              width: "1"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: "{value}期"
          },
          splitNumber: 3,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#888",
              width: "0"
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
                }
              }
            },
            barMaxWidth: 40,
            barMinWidth: 12,
            data: DataNum
          }
        ]
      });
    },
    // 贫困人口就业培训 彩虹图
    rosePie() {
      // 处理数据，防止没有数据，或者少于10条
      let PieData = sortByKey(this.signList, "Value");
      // let AllName =  ['广河县','和政县','积石山县','东乡县','临夏县','康乐县','宁夏市','永靖县','厦临公司','市直部门']
      // for(let i = 0;i <AllName.length; i++) {
      //     for(let j = 0; j< PieData.length; j++) {
      //         if(AllName[i] == PieData[j].Name) {
      //             AllName.splice(i,1)
      //             i--
      //         }
      //     }
      // }
      // for(let k =0;k <AllName.length;k++) {
      //     PieData.unshift({Name: AllName[k],Value: 0})
      // }
      let myChart = this.$echarts.init(document.getElementById("rosePie"));
      // 绘制图表
      myChart.setOption({
        series: [
          {
            name: "就业培训",
            type: "pie",
            radius: [37, 125],
            avoidLabelOverlap: false,
            startAngle: 0,
            center: ["52%", "10%"],
            roseType: "area",
            selectedMode: "single",
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#888"
                }
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: true,
                smooth: false,
                length: 2,
                length2: 4,
                lineStyle: {
                  color: "#888"
                }
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {
                value: 1000,
                name: PieData[0].Value + "人次",
                itemStyle: {
                  normal: {
                    color: "#f845f1"
                  }
                }
              },
              {
                value: 1100,
                name: PieData[1].Value + "人次",
                itemStyle: {
                  normal: {
                    color: "#ad46f3"
                  }
                }
              },
              {
                value: 1200,
                name: PieData[2].Value + "人次",
                itemStyle: {
                  normal: {
                    color: "#5045f6"
                  }
                }
              },
              {
                value: 1300,
                name: PieData[3].Value + "人次",
                itemStyle: {
                  normal: {
                    color: "#4777f5"
                  }
                }
              },
              {
                value: 1400,
                name: PieData[4].Value + "人次",
                itemStyle: {
                  normal: {
                    color: "#44aff0"
                  }
                }
              },
              {
                value: 1500,
                name: PieData[5].Value + "人次",
                itemStyle: {
                  normal: {
                    color: "#45dbf7"
                  }
                }
              },
              {
                value: 1600,
                name: PieData[6].Value + "人次",
                itemStyle: {
                  normal: {
                    color: "#f6d54a"
                  }
                }
              },
              {
                value: 1700,
                name: PieData[7].Value + "人次",
                itemStyle: {
                  normal: {
                    color: "#f69846"
                  }
                }
              },
              {
                value: 1800,
                name: PieData[8].Value + "人次",
                itemStyle: {
                  normal: {
                    color: "#ff4343"
                  }
                }
              },
              {
                value: 1900,
                name: PieData[9].Value + "人次",
                itemStyle: {
                  normal: {
                    color: "#b60000"
                  }
                }
              },
              {
                value: 0,
                name: "",
                itemStyle: {
                  normal: {
                    show: false
                  }
                }
              },
              {
                value: 0,
                name: "",
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      normal: {
                        show: false,
                        lineStyle: {
                          color: "#fff"
                        }
                      }
                    }
                  }
                }
              },
              {
                value: 0,
                name: "",
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      normal: {
                        show: false,
                        lineStyle: {
                          color: "#fff"
                        }
                      }
                    }
                  }
                }
              },
              {
                value: 0,
                name: "",
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      normal: {
                        show: false,
                        lineStyle: {
                          color: "#fff"
                        }
                      }
                    }
                  }
                }
              },
              {
                value: 0,
                name: "",
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      normal: {
                        show: false,
                        lineStyle: {
                          color: "#fff"
                        }
                      }
                    }
                  }
                }
              },
              {
                value: 0,
                name: "",
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                value: 0,
                name: "",
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                value: 0,
                name: "",
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                value: 0,
                name: "",
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                value: 0,
                name: "",
                itemStyle: {
                  normal: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }
            ]
          }
        ]
      });
    },
    // 帮助实现就业 环形图
    pieEcharts() {
      // 获取颜色列表和数据列表
      let that = this;
      let addAll = 0;
      let pieMessage = that.workList;
      for (let i = 0; i < that.workList.length; i++) {
        addAll += parseFloat(that.workList[i].Value);
        pieMessage[i].value = pieMessage[i].Value;
      }
      for (let i = 0; i < that.workList.length; i++) {
        that.workList[i].proportion = (
          (that.workList[i].Value / addAll) *
          100
        ).toFixed(2);
        if (isNaN(that.workList[i].proportion)) {
          that.workList[i].proportion = 0;
        }
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
              '</p><p style="font-size:14px;color: #999">总计</p></div>';
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
        color: that.pieColor,
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["70%", "85%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
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
      Utils.hideLoading(that);
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
// 排序
function sortByKey(array, key) {
  return array.sort(function(a, b) {
    var x = a[key];
    var y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}
document.title = "劳务协作";
</script>