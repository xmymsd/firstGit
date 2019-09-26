<style>
.workTable-query {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.2rem 0.3rem;
  font-size: 0;
  border-bottom: 0.01rem solid #e0e0e0;
}
.mobileSelect-box {
  width: 30%;
  margin-bottom: 0.17rem;
}
.mobileSelect-box.width100 {
  margin-bottom: 0;
}
.workTable-table {
  padding: 0.3rem;
  background: #fff;
}
.workTable-table table {
  width: 100%;
  font-size: 0.24rem;
  border: 0.01rem solid #e0e0e0;
}
.workTable-table table th {
  font-weight: bold;
  padding: 0.18rem 0;
  background: #e9f1fe;
  color: #333;
  text-align: center;
}
.workTable-table table td {
  max-width: 4.2rem;
  padding: 0.15rem 0.04rem;
  color: #888;
  text-align: center;
}
.workTable-table tbody tr td:first-child {
  color: #333;
}
.table-title {
  overflow: auto;
  padding-left: 0.05rem;
  text-align: left;
  white-space: nowrap;
}
.workTable-table table .table-Type {
  text-align: left;
  padding-left: 0.09rem;
  font-weight: bold;
}
.workTable-table table td.canClick {
  color: #4b89f7;
  text-decoration: underline;
  cursor: pointer;
}
.workTable-wrap .vux-cell-box:not(:first-child):before {
  border-top: none;
}
.workTable-wrap .vux-cell-box {
  display: none;
}
</style>

<template>
  <div class="workTable-wrap">
    <!-- 头部 -->
    <mt-header title="指标查询" style="display: none">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 查询模块 -->
    <div class="workTable-query">
      <div class="mobileSelect-box" id="select-type" @click="ShowTypePup()">{{ wTypeName }}</div>
      <div class="mobileSelect-box" id="select-data" @click="ShowDataPup()">{{ wDataName }}</div>
      <div class="mobileSelect-box" id="select-region" @click="ShowAddressPup()">{{ wRegionName}}</div>
      <!-- <div class="mobileSelect-box width100" id="select-table-name">所有年度统计表</div> -->
    </div>
    <!-- 表格内容区 -->
    <div class="workTable-table" v-if="tableShow">
      <table border="none">
        <thead>
          <tr>
            <!-- <th>指标类型</th> -->
            <th>指标</th>
            <th>计量单位</th>
            <th>合计</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(type,index) of TrList" :key="type.id">
            <td v-if="type.UnitName != null">
              <div class="table-title">{{ type.IndexName }}</div>
            </td>
            <td v-if="type.UnitName != null">{{ type.UnitName }}</td>
            <td
              @click="jumpTo(index)"
              :class="{'canClick': type.hasClass != false}"
              v-if="type.UnitName != null"
            >{{ type.Counts }}</td>
            <td colspan="3" class="table-Type" v-if="type.UnitName == null">{{ type.IndexName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <popup-picker
      :data="typeArr"
      v-model="typeValue"
      :show.sync="showType"
      @on-change="onChangeType"
    ></popup-picker>
    <popup-picker
      :data="dataArr"
      v-model="dataValue"
      :show.sync="showData"
      @on-change="onChangeData"
    ></popup-picker>
    <popup-picker
      :data="addressArr"
      v-model="addressValue"
      :show.sync="showAddress"
      @on-change="onChangeAddress"
    ></popup-picker>
    <!-- 加载动画 -->
    <div class="loading-box">
      <loading v-model="showLoading"></loading>
    </div>
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
      showAll: false, //初始化数据
      showLoading: false, //加载动画
      ThisYear: "", //当前年
      tableShow: false,
      wType: "", //指标类型  id
      wTypeName: "", //指标类型 中文
      wData: "", //选择日期
      wDataName: "", //选择日期年份
      wRegion: "", //选择区域
      wRegionName: "", //选择区域 名称
      TrList: [],
      // popupPicker的组件
      showType: false,
      showData: false,
      showAddress: false,
      typeArr: [],
      dataArr: [],
      addressArr: [],
      typeValue: [],
      dataValue: [],
      addressValue: []
    };
  },
  mounted() {
    Utils.checkLoginStatus(this, () => {
      Utils.showLoading(this);
      this.init();
    });
  },
  methods: {
    //数据查询并渲染
    queryTable() {
      let that = this;
      that.tableShow = false;
      Utils.showLoading(that);
      let params = JSON.stringify({
        categoryId: that.wType,
        reportYear: that.wData,
        ReportArea: that.wRegion
      });
      post("/API/PoorHelpAPI/GetIndicatrixList", params)
        .then(resp => {
          if (resp.ret == "0") {
            if (resp.data.length == "0") {
              Utils.hideLoading(that);
            }
            that.TrList = [];
            for (let i = 0; i < resp.data.length; i++) {
              that.TrList.push(resp.data[i]);
            }
            that.screenData();
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取表格数据错误！" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取表格数据错误！");
        });
      that.showAll = true;
    },
    // 下拉参数请求
    init() {
      let that = this;
      let ThisYear;
      (that.typeValue = []), (that.dataValue = []), (that.addressValue = []);
      ThisYear = new Date().getFullYear();
      if (Utils.getCookie(that, "selectType") != null) {
        that.wType = Utils.getCookie(that, "selectType");
        that.typeValue.push(Utils.getCookie(that, "selectType"));
        that.wTypeName = Utils.getCookie(that, "selectTypeName");
      }
      if (Utils.getCookie(that, "selectYear") != null) {
        that.wData = Utils.getCookie(that, "selectYear");
        that.dataValue.push(Utils.getCookie(that, "selectYear"));
        that.wDataName = that.wData + "年";
      }
      if (Utils.getCookie(that, "selectAddress") != null) {
        that.wRegion = Utils.getCookie(that, "selectAddress");
        that.addressValue.push(Utils.getCookie(that, "selectAddress"));
        that.wRegionName = Utils.getCookie(that, "selectAddressName");
      }
      // 指标类型
      post("/API/PoorHelpAPI/GetIndicatrixcat")
        .then(resp => {
          if (resp.ret == "0") {
            resp.data.pop();
            let TypeList = [];
            for (let i = 0; i < resp.data.length; i++) {
              TypeList.push({
                name: resp.data[i].Name,
                value: resp.data[i].Id
              });
            }
            let selectAll = { name: "所有分类", value: "" };
            TypeList.unshift(selectAll);
            if (Utils.getCookie(that, "selectTypeName") == null) {
              that.wTypeName = "所有分类";
              that.wType = "";
            }
            that.typeArr.push(TypeList);
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取指标类型数据错误" + resp.um9sg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取指标类型数据错误");
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
            if (Utils.getCookie(that, "selectYear") == null) {
              that.wData = ThisYear;
              that.wDataName = ThisYear + "年";
            }
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
      // 帮扶区域
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
            // 没缓存时读取默认第一个
            if (Utils.getCookie(that, "selectAddress") == null) {
              that.wRegionName = resp.data[0].Name;
              that.wRegion = resp.data[0].Code;
            }
            that.addressArr.push(addressList);
            that.queryTable();
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取帮扶区域数据错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取帮扶区域数据错误");
        });
    },
    screenData() {
      let that = this;
      for (let i = 0; i < that.TrList.length; i++) {
        let that = this;
        if (that.TrList[i].Counts == "0") {
          that.TrList[i].hasClass = false;
        } else {
          that.TrList[i].hasClass = true;
        }
        if (that.TrList.length == i + 1) {
          that.tableShow = true;
          Utils.hideLoading(that);
        }
      }
    },
    // 跳转页面
    jumpTo(i) {
      let that = this;
      if (!that.TrList[i].hasClass) {
        return false;
      }
      post(
        "/API/PoorHelpAPI/GetIndicatorMatch?code=" + that.TrList[i].IndexCode
      )
        .then(resp => {
          if (resp.ret == "0") {
            // 先判断跳转的目标页面
            let strData = resp.data;
            let url = "";
            let FPXMtype = new RegExp("/Base/ProjectManagement/Index");
            let GZGBtype = new RegExp(
              "/Base/SupportDocking/AssignCadresDetailIndex"
            );
            let ZYRCtype = new RegExp(
              "/Base/SupportDocking/AssignTalentDetailIndex"
            );
            // 跳过数据为空或无目标页的
            if (strData == null || strData == undefined) {
              return false;
              // 扶贫项目
            } else {
              if (FPXMtype.test(strData)) {
                // console.log("扶贫项目");
                url = "/FPXM";
                // 挂职干部
              } else if (GZGBtype.test(strData)) {
                // console.log("挂职干部");
                url = "/GZGB";
                // 专业人才
              } else if (ZYRCtype.test(strData)) {
                // console.log("专业人才");
                url = "/ZYRC";
              } else {
                return false;
              }
              // 参数处理
              let params = strData;
              let StarNum = params.indexOf("?");
              Utils.setCookie(that, "Direction", "");
              Utils.setCookie(that, "OldJobLevel", "");
              if (StarNum != "-1") {
                // 如果有参数先截取参数，判断是一个还是两个参数
                let str = params.substring(StarNum + 1, params.length);
                let StarNum2 = str.indexOf("&");
                if (StarNum2 != "-1") {
                  //  两个参数处理
                  let str2 = str.substring(0, StarNum2);
                  let str3 = str.substring(StarNum2 + 1, str.length);
                  let str2Num = str2.indexOf("=");
                  let str3Num = str3.indexOf("=");
                  Utils.setCookie(
                    that,
                    str2.substring(0, str2Num),
                    str2.substring(str2Num + 1, str2.length)
                  );
                  Utils.setCookie(
                    that,
                    str3.substring(0, str3Num),
                    str3.substring(str3Num + 1, str3.length)
                  );
                } else {
                  //  一个参数处理
                  let OneParamsNum = str.indexOf("=");
                  Utils.setCookie(
                    that,
                    str.substring(0, OneParamsNum),
                    str.substring(OneParamsNum + 1, str.length)
                  );
                }
              }
              Utils.setCookie(that, "selectType", that.wType);
              Utils.setCookie(that, "selectYear", that.wData);
              Utils.setCookie(that, "selectAddress", that.wRegion);
              Utils.setCookie(that, "selectTypeName", that.wTypeName);
              Utils.setCookie(that, "selectAddressName", that.wRegionName);
              Utils.route(that, { path: url });
            }
          } else {
            Utils.hideLoading(that);
            Utils.toast(that, "获取统计表目标页错误" + resp.umsg);
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          // Utils.toast(that, "获取帮扶区域数据错误");
        });
    },
    // 显示popupPick
    ShowTypePup() {
      this.showType = true;
    },
    ShowDataPup() {
      this.showData = true;
    },
    ShowAddressPup() {
      this.showAddress = true;
    },
    // 选择改变类型
    onChangeType(val) {
      let that = this;
      that.wType = val[0];
      if (
        !!that.typeArr &&
        !!that.typeArr[0] &&
        that.typeArr[0] instanceof Array
      ) {
        for (let i = 0; i < that.typeArr[0].length; i++) {
          if (val[0] == that.typeArr[0][i].value) {
            this.wTypeName = that.typeArr[0][i].name;
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
    // 点击确定
    clickSure() {
      let that = this;
      that.popupVisible = !that.popupVisible;
    }
  },
  watch: {
    // 当下拉选项一发生变化，重新筛选
    wType() {
      if (this.showAll) {
        this.queryTable();
      }
    },
    wData() {
      if (this.showAll) {
        this.queryTable();
      }
    },
    wRegion() {
      if (this.showAll) {
        this.queryTable();
      }
    }
  }
};
document.title = "考核统计表";
</script>