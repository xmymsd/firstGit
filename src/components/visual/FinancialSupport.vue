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
  width: 45%;
  height: 3.42rem;
  z-index: 0;
}
.pie-message {
  display: inline-block;
  width: 48%;
  padding-top: 0.5rem;
  padding-left: 0.3rem;
  vertical-align: top;
}
.pie-message-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.5rem;
  line-height: 0.5rem;
}
.pie-message-box span {
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border-radius: 50%;
  margin-right: 0.16rem;
}
.pie-message-box strong {
  display: inline-block;
  overflow: hidden;
  width: 63%;
  height: 0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 0.5rem;
  font-size: 0.22rem;
  color: #666;
}
.pie-message-box em {
  width: 24%;
  text-align: right;
  height: 0.5rem;
  line-height: 0.5rem;
  color: #333;
  font-size: 0.22rem;
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
  /* min-width: 3%; */
  height: 100%;
  border-radius: 0.1rem;
  background: #4b89f7;
}
#pie-echarts div {
  background: none !important;
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
#Construction-input {
  height: 3.6rem;
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
.regionCon {
  padding-bottom: 0.15rem;
}
</style>

<template>
  <div class="bigData">
    <!-- 头部 -->
    <mt-header title="资金支持" style="display: none">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 头部筛选 -->
    <div class="workTable-query">
      <div class="mobileSelect-box" id="select-address"  @click="ShowAddressPup()">{{wRegionName}}</div>
      <div class="mobileSelect-box" id="select-data" @click="ShowDataPup()">{{wDataName}}</div>
    </div>
    <!-- 地图 -->
    <div class="map-box border-bottom-20px" style="display: none">
      <img src="../../assets/img/map3.png" alt />
    </div>
    <!-- 统计区 -->
    <div class="Statistics-con border-bottom-20px">
      <div class="Statistics-box" v-for="item in StatisticsList" :key="item.id">
        <img :src="item.src" alt />
        <strong>{{ item.title }}</strong>
        <span>{{ item.value }}</span>
      </div>
    </div>
    <!-- 财政援助资金投向 -->
    <div class="border-bottom-20px font-size-0">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        财政援助资金投向
        <span class="float-r">单位：亿元</span>
      </div>
      <div id="pie-echarts"></div>
      <div class="pie-message">
        <div class="pie-message-box" v-for="(item,i) in pieList" :key="item.id">
          <span :style="{background: colorArr[i]}"></span>
          <strong>{{ item.Name }}</strong>
          <em class="float-r">{{ item.value }}</em>
        </div>
      </div>
    </div>
    <!-- 财政援助区域 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        财政援助区域
        <span class="float-r">单位：亿元</span>
      </div>
      <h2 class="Statistics-title">总计{{addressAll}}亿元</h2>
      <div class="regionCon">
        <div class="region-box" v-for="item in regionList" :key="item.id">
          <span class="region-name">{{ item.Name }}</span>
          <div class="Proportion-box">
            <span class="Proportion-inner" :style="{width: item.proportion}"></span>
          </div>
          <strong>{{ item.Value }}</strong>
        </div>
      </div>
    </div>
    <!-- 土地增减挂钩节余指标跨省调入 -->
    <div class="border-bottom-20px text-align-center">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        土地增减挂钩节余指标跨省调入
        <!-- <span class="float-r">单位：亿元</span> -->
      </div>
      <div class="liquidfill-box">
        <div id="echarts-east"></div>
        <p>{{ LiquidFillData[0] }}</p>
      </div>
      <div class="liquidfill-box">
        <div id="echarts-west"></div>
        <p>{{ LiquidFillData[1] }}</p>
      </div>
    </div>
    <!-- 基础设施建设投入 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        基础设施建设投入
        <span class="float-r">单位：亿元</span>
      </div>
      <h2 class="Statistics-title">总计{{ Investment }}亿元</h2>
      <div id="Construction-input"></div>
    </div>
    <!-- 教育医疗投入 -->
    <div class="border-bottom-20px text-align-center">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        教育医疗投入
      </div>
      <div class="school-hospital">
        <h2 class="Statistics-title">总计{{ Allmoney }}亿元</h2>
        <div class="school-hospital-echarts">
          <div class="SH-echarts-box">
            <div id="SH-echart-school"></div>
            <p>{{PiesData[0].Name}}</p>
          </div>
          <div class="SH-echarts-box">
            <div id="SH-echart-peo"></div>
            <p>{{PiesData[1].Name}}</p>
          </div>
          <div class="SH-echarts-box">
            <div id="SH-echart-hospital"></div>
            <p>{{PiesData[2].Name}}</p>
          </div>
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
import "echarts-liquidfill/src/liquidFill";
import Utils from "../common/Utils";
import { Loading, PopupPicker } from "vux";
export default {
  components: {
    Loading, PopupPicker
  },
  data() {
    return {
      showLoading: false, //加载动画
      ThisYear: "2019", //当前年
      wRegion: "", //选择的地址
      wRegionName: "",
      wData: "", //选择的时间
      wDataName: '',
      addressAll: "", //援助区域总金额
      barData: [], //设施建设投入数据
      Investment: "", //设施建设投入  总计
      pieAll: "0", //
      PiesData: [{ Name: "" }, { Name: "" }, { Name: "" }], //教育医疗数据
      Allmoney: "", //教育医疗总投入金额
      LiquidFillData: [], //跨省调入数据
      eastLiquidFill: "", //东部
      westLiquidFill: "", //西部
      colorArr: ["#4b89f7", "#0ebdca", "#94da74", "#ffb463", "#ff708b"], //颜色列表
      StatisticsList: [
        {
          src: require("../../assets/img/Statistics-icon-5.png"),
          title: "财政援助资金",
          value: "0亿"
        },
        {
          src: require("../../assets/img/Statistics-icon-6.png"),
          title: "实施扶贫项目",
          value: "0个"
        },
        {
          src: require("../../assets/img/Statistics-icon-7.png"),
          title: "深度地区财政援助",
          value: "0亿"
        },
        {
          src: require("../../assets/img/Statistics-icon-8.png"),
          title: "扶贫资金使用比例",
          value: "0%"
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
      post("/API/PoorHelpAPI/GetSupportSingleIndex", params)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log(resp.data)
            that.StatisticsList[0].value = resp.data.Czyzzj + "亿";
            that.StatisticsList[1].value = resp.data.Ssfpxm + "个";
            that.StatisticsList[2].value = resp.data.Sdpkczyz + "亿";
            that.StatisticsList[3].value = resp.data.Bfzjsy + "%";
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取指标数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取指标数据错误");
        });
      // 财政援助资金投向 数据获取
      let PieParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear
      });
      // console.log('PieParams',PieParams)
      post("/API/PoorHelpAPI/GetAidMoneyCount", PieParams)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log("财政援助资金投向", resp.data);
            let that = this; // 空数据处理
            // if(resp.data[0].List.length == 0) {
            //     resp.data[0].List= [
            //     {Name: "产业开发", Value: 0},
            //     {Name: "教育医疗投入", Value: 0},
            //     {Name: "基础设施建设投入", Value: 0},
            //     {Name: "劳务协作", Value: 0},
            //     {Name: "人才培训资金", Value: 0}]
            // }
            that.pieAll = resp.data[0].Total;
            that.pieList = resp.data[0].List;
            that.pieEcharts();
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取资金投向数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取资金投向数据错误");
        });
      // 财政援助区域  数据获取
      let AddressParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A11"
      });
      post("/API/PoorHelpAPI/GetDetailStaticByIndx", AddressParams)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log(resp.data[0].List)
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
              addAll += resp.data[0].List[j].Value;
              that.regionList[j].proportion =
                (resp.data[0].List[j].Value / MaxNum) * 100 + "%";
            }
            // console.log(addAll)
            that.addressAll = addAll;
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取援助区域数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取援助区域数据错误");
        });
      // 土地增减挂钩节余指标跨省调入  数据获取
      let quotaParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear
      });
      post("/API/PoorHelpAPI/GetAdjustTaskCount", quotaParams)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log("土地增减挂钩节余指标跨省调入", resp);
            if (resp.data[0].Finish == "0") {
              that.eastLiquidFill = "0";
            } else {
              that.eastLiquidFill = resp.data[0].Finish / resp.data[0].Total;
            }
            if (resp.data[1].Finish == "0") {
              that.westLiquidFill = "0";
            } else {
              that.westLiquidFill = resp.data[1].Finish / resp.data[1].Total;
            }
            that.LiquidFillData[0] = resp.data[0].Name;
            that.LiquidFillData[1] = resp.data[1].Name;
            that.echartsEast();
            that.echartsWest();
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取跨省调入数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取跨省调入数据错误");
        });
      // 基础设施投入  数据获取
      let buildParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A131"
      });
      post("/API/PoorHelpAPI/GetRoadConstructionStatic", buildParams)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log("基础设施投入", resp.data[0].List);
            // 空数据处理
            // if(resp.data[0].List.length == 0) {
            //     resp.data[0].List= [{Name: "贫困户住房",Value: '0'},{Name: "村内道路",Value: '0'},{Name: "安全饮水",Value: '0'}]
            // }
            that.Investment = resp.data[0].Total;
            that.barData = resp.data[0].List;
            that.echartsBar();
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取基础设施投入数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取基础设施投入数据错误");
        });
      // 教育医疗投入
      let Pies = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A134"
      });
      // console.log("pie", Pies);
      post("/API/PoorHelpAPI/GetSubStaticByIndx", Pies)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log("医疗投入", resp);
            let PieProportion = ["100", "100", "100"]; //占比的模拟数据
            that.PiesData = resp.data[0].List;
            for (let i = 0; i < resp.data[0].List.length; i++) {
              that.PiesData[i].proportion = PieProportion[i];
            }
            that.Allmoney = resp.data[0].Total;
            that.echartsPies();
            Utils.hideLoading(that);
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取教育医疗投入数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取教育医疗投入数据错误");
        });
    },
    pieEcharts() {
      let that = this;
      let pieMessage = that.pieList;
      for (let i = 0; i < pieMessage.length; i++) {
        pieMessage[i].value = that.pieList[i].Value;
        delete pieMessage[i].Value;
      }
      // console.log(pieMessage)
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
              that.pieAll +
              '亿 </p><p style="font-size:14px;color: #999">援助资金总计</p></div>';
            // var let = '<div class="AllMessage" style="text-alige:center"><p style="font-size: 30px;color: #4b89f7">' + addAll + '</p><p style="font-size:20px;color: #999">援助资金总计</p></div>'
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
        color: that.colorArr,
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["70%", "85%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            minAngle: 30,
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
    echartsEast() {
      let ThisData = [];
      ThisData[0] = this.eastLiquidFill;
      let echarts = this.$echarts.init(document.getElementById("echarts-east"));
      echarts.setOption({
        series: [
          {
            type: "liquidFill",
            radius: "85%",
            center: ["50%", "50%"],
            data: ThisData,
            color: ["#0ebdca", "#cff2f4", "#fff"],
            itemStyle: {
              shadowBlur: 0
            },
            outline: {
              borderDistance: 5,
              itemStyle: {
                borderWidth: 2,
                borderColor: "#0ebdca",
                shadowBlur: 5
              }
            },
            label: {
              normal: {
                textStyle: {
                  color: "#fff",
                  insideColor: "yellow",
                  fontWeight: "normal",
                  fontSize: 28
                }
              }
            }
          }
        ]
      });
    },
    echartsWest() {
      let ThisData = [];
      ThisData[0] = this.westLiquidFill;
      let echarts = this.$echarts.init(document.getElementById("echarts-west"));
      echarts.setOption({
        series: [
          {
            type: "liquidFill",
            radius: "85%",
            center: ["50%", "50%"],
            data: ThisData,
            color: ["#94da74", "#eaf8e3", "#fff"],
            itemStyle: {
              shadowBlur: 0
            },
            outline: {
              borderDistance: 5,
              itemStyle: {
                borderWidth: 2,
                borderColor: "#94da74",
                shadowBlur: 5
              }
            },
            label: {
              normal: {
                textStyle: {
                  color: "#fff",
                  insideColor: "yellow",
                  fontWeight: "normal",
                  fontSize: 28
                }
              }
            }
          }
        ]
      });
    },
    echartsBar() {
      let barData = this.barData;
      let barTitle = [],
        barValue = [];
      for (let i = 0; i < barData.length; i++) {
        barTitle[i] = barData[i].Name;
        barValue[i] = barData[i].Value - 0;
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("Construction-input")
      );
      // 绘制图表
      myChart.setOption({
        xAxis: {
          data: barTitle,
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
          bottom: "6%",
          containLabel: true
        },
        yAxis: {
          type: "value",
          splitLine: { show: false },
          axisLabel: {
            formatter: "{value}亿"
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
                color: function(params) {
                  var colorList = ["#0ebdca", "#94da74", "#ffb463"];
                  return colorList[params.dataIndex];
                }
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
                  return params.data + "亿";
                }
              }
            },
            barWidth: 60,
            data: barValue
          }
        ]
      });
    },
    echartsPies() {
      let PiesData = this.PiesData;
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
                borderColor: "#4b89f7",
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
                    color: "#4b89f7",
                    borderColor: "#4b89f7",
                    borderWidth: 0
                  },
                  emphasis: {
                    color: "#4b89f7",
                    borderColor: "#4b89f7",
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
                borderColor: "#4b89f7",
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
                    color: "#4b89f7",
                    borderColor: "#4b89f7",
                    borderWidth: 0
                  },
                  emphasis: {
                    color: "#4b89f7",
                    borderColor: "#4b89f7",
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
                borderColor: "#4b89f7",
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
                    color: "#4b89f7",
                    borderColor: "#4b89f7",
                    borderWidth: 0
                  },
                  emphasis: {
                    color: "#4b89f7",
                    borderColor: "#4b89f7",
                    borderWidth: 0
                  }
                }
              }
            ]
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
document.title = "资金支持";
</script>
