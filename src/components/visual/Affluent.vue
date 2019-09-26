<style>
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
  height: 100%;
  border-radius: 0.1rem;
  background: #4b89f7;
}
.liquidfill-box {
  display: inline-block;
  width: 45%;
  height: 3.2rem;
}
.liquidfill-box div {
  height: 2.7rem;
}
.liquidfill-box p {
  margin-top: 0.1rem;
  font-size: 0.22rem;
  color: #888;
}
#poorPeople {
  height: 3.8rem;
}
.Statistics-title {
  line-height: 0.6rem;
  font-size: 0.46rem;
  color: #333;
  text-align: center;
}
.school-hospital {
  padding-top: 0.15rem;
}
.school-hospital-echarts {
  width: 92%;
  padding-bottom: 0.2rem;
  font-size: 0;
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
.Assistance-situation {
  padding: 0.2rem 0.3rem 0.2rem;
}
.Assistance-situation-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.help-message-box {
  width: 42%;
  height: 0.98rem;
  padding-top: 0.15rem;
  font-size: 0;
  text-align: left;
}
.help-message-box strong {
  font-size: 0.24rem;
  color: #888;
}
.help-message-box em {
  float: right;
  font-size: 0.24rem;
  color: #333;
}
.east-help-proportion,
.west-help-proportion {
  width: 100%;
  height: 0.16rem;
  margin-top: 0.15rem;
  border-radius: 0.1rem;
  background: #f4f4f4;
}
.east-help-proportion span,
.west-help-proportion span {
  display: block;
  float: left;
  height: 0.16rem;
  border-radius: 0.1rem;
}
.east-help-proportion span {
  background: #4b89f7;
}
.west-help-proportion span {
  background: #0ebdca;
}
.Assistance-situation-box img {
  display: block;
  width: 0.58rem;
  height: 0.58rem;
}
</style>

<template>
  <div class="bigData">
    <!-- 头部 -->
    <mt-header title="携手奔小康" style="display: none">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 头部筛选 -->
    <div class="workTable-query">
      <div class="mobileSelect-box" id="select-address" @click="ShowAddressPup()">{{wRegionName}}</div>
      <div class="mobileSelect-box" id="select-data" @click="ShowDataPup()">{{wDataName}}</div>
    </div>
    <!-- 地图 -->
    <div class="map-box border-bottom-20px">
      <img src="../../assets/img/map6.png" alt />
    </div>
    <!-- 统计区 -->
    <div class="Statistics-con border-bottom-20px">
      <div class="Statistics-box" v-for="item in StatisticsList" :key="item.id">
        <img :src="item.src" alt />
        <strong>{{ item.title }}</strong>
        <span>{{ item.value }}</span>
      </div>
    </div>
    <!-- 东西部结对帮扶情况 -->
    <div class="border-bottom-20px text-align-center">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        东西部结对帮扶情况
      </div>
      <div class="Assistance-situation">
        <div class="Assistance-situation-box" v-for="item in helpList" :key="item.id">
          <div class="help-message-box">
            <strong>{{ item.LName }}</strong>
            <em>{{ item.LNum }}个</em>
            <div class="east-help-proportion">
              <span :style="{width: item.LProportion + '%'}"></span>
            </div>
          </div>
          <img src="../../assets/img/help-icon.png" alt />
          <div class="help-message-box">
            <strong>{{ item.RName }}</strong>
            <em>{{ item.RNum }}个</em>
            <div class="west-help-proportion">
              <span :style="{width: item.RProportion + '%'}"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 携手奔小康财政援助投入 -->
    <div class="border-bottom-20px text-align-center">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        携手奔小康财政援助投入
        <span class="float-r">单位：亿元</span>
      </div>
      <div class="school-hospital">
        <h2 class="Statistics-title">总计{{ Allmoney }}亿元</h2>
        <div class="school-hospital-echarts">
          <div class="SH-echarts-box">
            <div id="SH-echart-school"></div>
            <p>{{InvestmentList[0].Name}}</p>
          </div>
          <div class="SH-echarts-box">
            <div id="SH-echart-peo"></div>
            <p>{{InvestmentList[1].Name}}</p>
          </div>
          <div class="SH-echarts-box">
            <div id="SH-echart-hospital"></div>
            <p>{{InvestmentList[2].Name}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 携手奔小康惠及贫困人口 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        携手奔小康惠及贫困人口
        <span class="float-r">单位：人</span>
      </div>
      <h2 class="Statistics-title">总计{{ poorPeopleNum }}人</h2>
      <div id="poorPeople"></div>
    </div>
    <!-- 培训创业致富脱贫成效 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        培训创业致富脱贫成效
        <span class="float-r">单位：人</span>
      </div>
      <h2 class="Statistics-title">总计{{ ShakeOffPoverty }}人</h2>
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
      wData: "", //选择的时间
      wDataName: "",
      wRegion: "", //选择的地址
      wRegionName: "",
      Allmoney: "0",
      ShakeOffPoverty: "0",
      poorPeopleData: [], //携手奔小康惠及贫困人口 数据
      poorPeopleNum: "0", //携手奔小康惠及贫困人口 总人口
      InvestmentList: [{ Name: "" }, { Name: "" }, { Name: "" }],
      helpList: [], //结对帮扶数据
      StatisticsList: [
        {
          src: require("../../assets/img/Statistics-icon-15.png"),
          title: "奔小康县财政援助",
          value: "0"
        },
        {
          src: require("../../assets/img/Statistics-icon-6.png"),
          title: "创业成功数",
          value: "0"
        },
        {
          src: require("../../assets/img/Statistics-icon-16.png"),
          title: "行动惠及贫困人口",
          value: "0"
        },
        {
          src: require("../../assets/img/Statistics-icon-17.png"),
          title: "行动帮助脱贫人口",
          value: "0"
        }
      ],
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
            Utils.toast(that, "获取区域数据错误" + resp.umsg);
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
          // Utils.toast(that, "获取年份数据错误!");
        });
    },
    // 展示默认数据，及根据地址和日期筛选
    initData() {
      let that = this;
      // 暂时使用
      let QueryAddress = that.wRegion,
        QueryYear = that.wData || that.ThisYear;
      // 四条指标
      let params = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear
      });
      post("/API/PoorHelpAPI/GetXiaokangIndex", params)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log(resp.data)
            that.StatisticsList[0].value = resp.data.xkczyzzj + "亿";
            that.StatisticsList[1].value = resp.data.cyCHgSH + "人";
            that.StatisticsList[2].value = resp.data.xkxdhj + "人";
            that.StatisticsList[3].value = resp.data.xkcdbtp + "人";
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取指标数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取指标数据错误!");
        });
      // 东西部结对帮扶情况 数据获取
      let helpParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear
      });
      post("/API/PoorHelpAPI/GetPairingSupport", helpParams)
        .then(resp => {
          if (resp.ret == "0") {
            let that = this;
            // console.log('东西部结对帮扶情况',resp.data[0])
            for (let i = 0; i < resp.data[0].List.length; i++) {
              resp.data[0].List[i].LProportion =
                resp.data[0].List[i].LNum == "0"
                  ? "0"
                  : (resp.data[0].List[i].LNum / resp.data[0].MaxLenght) * 100;
              resp.data[0].List[i].RProportion =
                resp.data[0].List[i].RNum == "0"
                  ? "0"
                  : (resp.data[0].List[i].RNum / resp.data[0].MaxLenght) * 100;
            }
            that.helpList = resp.data[0].List;
            // console.log(that.helpList)
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取结对帮扶数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取结对帮扶数据错误!");
        });
      // // 携手奔小康财政援助投入  数据获取
      let InvestmentParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear
      });
      post("/API/PoorHelpAPI/GetFinancialAidUse", InvestmentParams)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log("携手奔小康财政援助投入", resp.data[0]);
            for (let i = 0; i < resp.data[0].List.length; i++) {
              resp.data[0].List[i].proportion =
                resp.data[0].List[i].Value == "0"
                  ? "0"
                  : (resp.data[0].List[i].Value / resp.data[0].Total) * 100;
            }
            that.InvestmentList = resp.data[0].List;
            // console.log(that.InvestmentList)
            that.Allmoney = resp.data[0].Total;
            that.echartsPies();
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取财政援助数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取财政援助数据错误!");
        });
      // 携手奔小康惠及贫困人口  数据获取
      let quotaParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A791"
      });
      // console.log(quotaParams)
      post("/API/PoorHelpAPI/GetDetailStaticByIndx", quotaParams)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log('携手奔小康惠及贫困人口',resp.data[0].List)
            that.poorPeopleData = resp.data[0].List;
            that.poorPeople();
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取惠及贫困人口数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取惠及贫困人口数据错误!");
        });
      // 培训创业致富脱贫成效  数据获取
      let EffectParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A7101"
      });
      post("/API/PoorHelpAPI/GetDetailStaticByIndx", EffectParams)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log('培训创业致富脱贫成效',resp)
            // 获取最大值，并以此值为参考值
            let MaxNum = resp.data[0].List[0].Value;
            for (let i = 0; i < resp.data[0].List.length; i++) {
              if (MaxNum < resp.data[0].List[i].Value) {
                MaxNum = resp.data[0].List[i].Value;
              }
            }
            for (let j = 0; j < resp.data[0].List.length; j++) {
              resp.data[0].List[j].proportion =
                (resp.data[0].List[j].Value / MaxNum) * 100;
            }
            that.ShakeOffPoverty = resp.data[0].Total;
            that.regionList = resp.data[0].List;
            Utils.hideLoading(that);
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取脱贫成效数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取脱贫成效数据错误!");
        });
    },
    echartsPies() {
      let PiesData = this.InvestmentList;
      // console.log("aaa", PiesData[0].Value);
      // console.log(PiesData)
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
                name: PiesData[0].Value.toString(),
                label: {
                  normal: {
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: "20",
                      fontWeight: "normal",
                      color: "#333"
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
                name: PiesData[1].Value.toString(),
                label: {
                  normal: {
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: "20",
                      fontWeight: "normal",
                      color: "#333"
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
                name: PiesData[2].Value.toString(),
                label: {
                  normal: {
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: "20",
                      fontWeight: "normal",
                      color: "#333"
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
    poorPeople() {
      let DataList = this.poorPeopleData;
      // console.log(DataList)
      let DataTitle = [],
        DataNum = [],
        addAll = 0;
      for (let i = 0; i < DataList.length; i++) {
        DataTitle[i] = DataList[i].Name;
        DataNum[i] = DataList[i].Value;
        addAll += parseFloat(DataList[i].Value);
      }
      this.poorPeopleNum = addAll;
      let myChart = this.$echarts.init(document.getElementById("poorPeople"));
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
            formatter: "{value}人"
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
                }
              }
            },
            barMinWidth: 12,
            barMaxWidth: 50,
            data: DataNum
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
document.title = "携手奔小康";
</script>