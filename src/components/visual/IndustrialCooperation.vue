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
#Investment-echarts {
  height: 3.42rem;
  z-index: 0;
}
.pie-message {
  display: inline-block;
  width: 46%;
  padding-top: 0.5rem;
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
#Investment-echarts div {
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
#workPeople,
#workshop,
#product {
  height: 3.8rem;
}
.regionCon {
  padding-bottom: 0.15rem;
}
</style>

<template>
  <div class="bigData">
    <!-- 头部 -->
    <mt-header title="产业合作" style="display: none">
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
    <div class="map-box border-bottom-20px" style="display: none">
      <img src="../../assets/img/map4.png" alt />
    </div>
    <!-- 统计区 -->
    <div class="Statistics-con border-bottom-20px">
      <div class="Statistics-box" v-for="item in StatisticsList" :key="item.id">
        <img :src="item.src" alt />
        <strong>{{ item.title }}</strong>
        <span>{{ item.value }}</span>
      </div>
    </div>
    <!-- 企业实际投资额 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        企业实际投资额
        <span class="float-r">单位：亿元</span>
      </div>
      <div id="Investment-echarts"></div>
    </div>
    <!-- 企业带动脱贫人口 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        企业带动脱贫人口
        <span class="float-r">单位：人</span>
      </div>
      <div class="regionCon">
        <h2 class="Statistics-title">总计{{ poorPeopleNum }}人</h2>
        <div class="region-box" v-for="item in regionList" :key="item.id">
          <span class="region-name">{{ item.Name }}</span>
          <div class="Proportion-box">
            <span class="Proportion-inner" :style="{width: item.proportion +'%'}"></span>
          </div>
          <strong>{{ parseInt(item.Value *10000) }}</strong>
        </div>
      </div>
    </div>
    <!-- 企业吸纳就业 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        企业吸纳就业
        <span class="float-r">单位：人</span>
      </div>
      <h2 class="Statistics-title">总计{{ workPeopleNum }}人</h2>
      <div id="workPeople"></div>
    </div>
    <!-- 援建扶贫车间 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        援建扶贫车间
        <span class="float-r">单位：个</span>
      </div>
      <h2 class="Statistics-title">总计{{ workshopNum }}个</h2>
      <div id="workshop"></div>
    </div>
    <!-- 采销结对地区特色农产品 -->
    <div class="border-bottom-20px">
      <div class="box-title">
        <img src="../../assets/img/title-icon.png" alt class="title-icon" />
        采销结对地区特色农产品
        <span class="float-r">单位：万元</span>
      </div>
      <h2 class="Statistics-title">总计{{ productNum }}万元</h2>
      <div id="product"></div>
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
      wRegion: "", //选择的地址
      wRegionName: "",
      wData: "", //选择的时间
      wDataName: "",
      poorPeopleNum: "", //企业带动脱贫人口总数
      workData: [], //企业吸纳就业数据
      workPeopleNum: "", //企业吸纳就业总数
      workshopData: [], //扶贫车间数据
      workshopNum: "", //扶贫车间总数
      productData: [], //特色产品数据
      productNum: "", //特色产品总数
      StatisticsList: [
        {
          src: require("../../assets/img/Statistics-icon-5.png"),
          title: "共建产业园区",
          value: "0个"
        },
        {
          src: require("../../assets/img/Statistics-icon-9.png"),
          title: "开展扶贫企业数",
          value: "0个"
        },
        {
          src: require("../../assets/img/Statistics-icon-10.png"),
          title: "援建扶贫车间",
          value: "0个"
        },
        {
          src: require("../../assets/img/Statistics-icon-11.png"),
          title: "企业实际投资额",
          value: "0亿"
        }
      ],
      pieList: [],
      regionList: [],
      workBarData: [],
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
      post("/API/PoorHelpAPI/GetCooperationIndex", params)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log(resp.data)
            that.StatisticsList[0].value = resp.data.Gjcyyq + "个";
            that.StatisticsList[1].value = resp.data.Kzfpqys + "个";
            that.StatisticsList[2].value = resp.data.Yjfpcj + "个";
            that.StatisticsList[3].value = resp.data.Qysjtze + "亿";
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取指标数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取指标数据错误");
        });
      // 企业实际投资额 数据获取
      let InvestmentParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A22"
      });
      post("/API/PoorHelpAPI/GetDetailStaticByIndx", InvestmentParams)
        .then(resp => {
          if (resp.ret == "0") {
            let that = this;
            // console.log(resp.data[0].List)
            that.pieList = resp.data[0].List;
            that.pieEcharts();
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取实际投资额数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取实际投资额数据错误");
        });
      // 企业带动脱贫人口  数据获取
      let peoParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A23"
      });
      post("/API/PoorHelpAPI/GetDetailStaticByIndx", peoParams)
        .then(resp => {
          if (resp.ret == "0") {
            // 获取最大值，并以此值为参考值
            let MaxNum = resp.data[0].List[0].Value;
            for (let i = 0; i < resp.data[0].List.length; i++) {
              if (MaxNum < resp.data[0].List[i].Value) {
                MaxNum = resp.data[0].List[i].Value;
              }
            }
            let addAll = 0;
            // console.log(resp)
            for (let i = 0; i < resp.data[0].List.length; i++) {
              resp.data[0].List[i].proportion =
                (resp.data[0].List[i].Value / MaxNum) * 100;
              addAll += parseInt(resp.data[0].List[i].Value * 10000);
            }
            that.regionList = resp.data[0].List;
            // console.log('企业带动脱贫人口',that.regionList)
            // // console.log(addAll)
            that.poorPeopleNum = addAll;
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取脱贫人口数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取脱贫人口数据错误");
        });
      // 企业吸纳就业  数据获取
      let workParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A231"
      });
      post("/API/PoorHelpAPI/GetDetailStaticByIndx", workParams)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log(resp.data[0].List)
            that.workData = resp.data[0].List;
            that.workPeopleBar();
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取企业吸纳就业数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取企业吸纳就业数据错误");
        });
      // 援建扶贫车间  数据获取
      let workshopParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A243"
      });
      post("/API/PoorHelpAPI/GetDetailStaticByIndx", workshopParams)
        .then(resp => {
          if (resp.ret == "0") {
            // console.log('6666666664',resp.data[0].List)
            that.workshopData = resp.data[0].List;
            that.workshopBar();
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取援建扶贫车间数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取援建扶贫车间数据错误");
        });
      // 采销结对地区特色农产品
      let productParams = JSON.stringify({
        reportArea: QueryAddress,
        reportYear: QueryYear,
        rType: "A26"
      });
      post("/API/PoorHelpAPI/GetDetailStaticByIndx", productParams)
        .then(resp => {
          if (resp.ret == "0") {
            that.productData = resp.data[0].List;
            that.productBar();
            Utils.hideLoading(that);
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取特色农产品数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取特色农产品数据错误");
        });
    },
    pieEcharts() {
      // 获取颜色列表和数据列表
      let that = this;
      let addAll = 0;
      // console.log(that.pieList[0].Value)
      for (let i = 0; i < that.pieList.length; i++) {
        addAll += parseFloat(that.pieList[i].Value);
        that.pieList[i].value = that.pieList[i].Value;
        that.pieList[i].name = that.pieList[i].Name;
        // delete that.pieList[i].Value
        // delete that.pieList[i].Name
      }
      addAll = addAll.toFixed(3) + "亿";
      let pieEcharts = this.$echarts.init(
        document.getElementById("Investment-echarts")
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
        color: [
          "#ff3355",
          "#ff7f4c",
          "#ffb463",
          "#0ebdca",
          "#94da74",
          "#ff7f4c",
          "#d04fff",
          "#7f46ff",
          "#07c6ff",
          "#4b89f7",
          "#ff708b"
        ],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["60%", "75%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            minAngle: 30,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{c}亿  {b}",
                  textStyle: {
                    color: "#333"
                  }
                },
                labelLine: {
                  show: true,
                  lineStyle: {
                    color: "#ccc"
                  }
                }
              }
            },
            data: that.pieList
          }
        ]
      });
      pieEcharts.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: 0
      });
    },
    workPeopleBar() {
      let DataList = this.workData;
      let DataTitle = [],
        DataNum = [],
        addAll = 0;
      for (let i = 0; i < DataList.length; i++) {
        DataTitle[i] = DataList[i].Name;
        DataNum[i] = parseInt(DataList[i].Value * 10000);
        addAll += parseInt(DataList[i].Value * 10000);
      }
      this.workPeopleNum = addAll;
      // 防止数据过多文字叠加，底部标题倾斜展示
      // （使用方法将xAxis--axisLabel--rotate 值替换为TitleRotate）
      // let TitleRotate = 0
      // if(DataList.length >4) {
      //     TitleRotate = 45
      // }
      let myChart = this.$echarts.init(document.getElementById("workPeople"));
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
            barMaxWidth: 40,
            barMinWidth: 12,
            data: DataNum
          }
        ]
      });
    },
    workshopBar() {
      let DataList = this.workshopData;
      let DataTitle = [],
        DataNum = [],
        addAll = 0;
      for (let i = 0; i < DataList.length; i++) {
        DataTitle[i] = DataList[i].Name;
        DataNum[i] = DataList[i].Value;
        addAll += parseInt(DataList[i].Value);
      }
      this.workshopNum = addAll;
      let myChart = this.$echarts.init(document.getElementById("workshop"));
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
          top: "5%",
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
            formatter: "{value}个"
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
            type: "line",
            smooth: true, //柔和线条
            symbolSize: 6, //节点大小
            symbol: "circle", //节点类型
            itemStyle: {
              normal: {
                color: "#fbb444", //小球的颜色
                lineStyle: {
                  width: 2, //折线宽度
                  color: "#fbb444" //折线颜色
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
                }
              }
            },
            areaStyle: {
              normal: {
                color: {
                  type: "linear", //设置线性渐变
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(251,180,68,0.4)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(251,180,68,0)" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            data: DataNum
          }
        ]
      });
    },
    productBar() {
      let DataList = this.productData;
      let DataTitle = [],
        DataNum = [],
        addAll = 0;
      for (let i = 0; i < DataList.length; i++) {
        DataTitle[i] = DataList[i].Name;
        DataNum[i] = DataList[i].Value * 10000;
        addAll += parseFloat(DataList[i].Value * 10000);
      }
      this.productNum = addAll;
      let myChart = this.$echarts.init(document.getElementById("product"));
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
            formatter: "{value}万元"
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
            type: "line",
            smooth: true, //柔和线条
            symbolSize: 6, //节点大小
            symbol: "circle", //节点类型
            itemStyle: {
              normal: {
                color: "#4b89f7", //小球的颜色
                lineStyle: {
                  width: 2, //折线宽度
                  color: "#4b89f7" //折线颜色
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
                }
              }
            },
            areaStyle: {
              normal: {
                color: {
                  type: "linear", //设置线性渐变
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(75,137,247,0.4)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(75,137,247,0)" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            },
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
document.title = "产业合作";
</script>
