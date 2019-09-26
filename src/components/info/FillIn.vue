<style>
.FillInWrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0.3rem;
  background: #f4f4f4;
}
.FillInBox {
  display: block;
  margin-bottom: 0.2rem;
  background: #fff;
}
.FillInBox-Title {
  position: relative;
  height: 0.9rem;
  padding-left: 0.3rem;
  padding-right: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.32rem;
  color: #333;
  line-height: 0.89rem;
  border-bottom: 0.01rem solid #e0e0e0;
}
.FillInBox-Title::after {
  position: absolute;
  top: 0.4rem;
  right: 0.12rem;
  content: "";
  width: 0.1rem;
  height: 0.1rem;
  border-left: 0.01rem solid #767676;
  border-top: 0.01rem solid #767676;
  transform: rotate(135deg);
}
.FillInBox-Title img {
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  margin-right: 0.15rem;
  vertical-align: middle;
}
.FillInBox-Con {
  font-size: 0;
  padding: 0.22rem 0.3rem 0.13rem;
}
.FillInBox-Num {
  display: inline-block;
  width: 50%;
  height: 1.24rem;
  padding-top: 0.1rem;
  vertical-align: top;
}
.FillInBox-Con .FillInBox-Num:first-child {
  border-right: 0.01rem solid #e0e0e0;
}
.FillInBox-Num strong {
  display: block;
  color: #4b89f7;
  line-height: 0.56rem;
  font-size: 0.36rem;
  text-align: center;
}
.FillInBox-Num span {
  display: block;
  font-size: 0.24rem;
  color: #888;
  line-height: 0.3rem;
  text-align: center;
}
.FillIn-tableName {
  padding: 0.2rem 0 0.1rem;
  margin-top: 0.13rem;
  border-top: 0.01rem solid #e0e0e0;
}
.FillIn-tableName div {
  height: 0.36rem;
  line-height: 0.36rem;
}
.FillIn-tableName div strong {
  display: inline-block;
  width: 0.66rem;
  font-size: 0.24rem;
  color: #888;
  vertical-align: top;
}
.FillIn-tableName div p {
  display: inline-block;
  width: 5.4rem;
  overflow: hidden;
  color: #888;
  font-size: 0.24rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}
</style>
<template>
  <div class="FillInWrap">
    <div
      class="FillInBox"
      v-for="item in List"
      :key="item.id"
      @click="gotoUrl('/SubmittedQuery/'+ item.Code)"
    >
      <div class="FillInBox-Title">
        <img src="../../assets/img/house-icon.png" alt>
        {{ item.Name }}
      </div>
      <div class="FillInBox-Con">
        <div class="FillInBox-Num">
          <strong>{{item.reportTable}}</strong>
          <span>报表数量</span>
        </div>
        <div class="FillInBox-Num">
          <strong>{{item.reportcount}}</strong>
          <span>上报数量</span>
        </div>
        <div class="FillIn-tableName" v-if="item.tablellist.length != 0">
          <div v-for="all in item.tablellist" :key="all.id">
            <strong>报表</strong>
            <p>{{ all.ReportName }}</p>
          </div>
        </div>
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
      List: [] //数据列表
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
      post("/API/PoorHelpAPI/ReportStatic")
        .then(resp => {
          if (resp.ret != "0") {
            Utils.hideLoading(that);
            Utils.toast(that, resp.umsg);
          } else {
            Utils.hideLoading(that);
            that.List = resp.data;
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "获取数据错误!");
        });
    },
    gotoUrl(url) {
      Utils.route(this, url);
    }
  }
};
document.title = "单位填报";
</script>