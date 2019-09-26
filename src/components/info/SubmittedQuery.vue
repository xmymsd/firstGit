<style>
.SubmittedQuery-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.SubmittedQuery-query {
  height: 1.06rem;
  padding: 0.24rem 0.3rem 0;
  font-size: 0;
  border-bottom: 0.01rem solid #e0e0e0;
  background: #fff;
}
.SubmittedQuery-input {
  float: left;
  position: relative;
  width: 5.5rem;
  height: 0.58rem;
  padding: 0 0.5rem 0 0.12rem;
  border-radius: 0.08rem;
  background: #f4f4f4;
  overflow: hidden;
}
.SubmittedQuery-input:after {
  position: absolute;
  top: 0.17rem;
  right: 0.1rem;
  content: "";
  width: 0.26rem;
  height: 0.24rem;
  background: url(../../assets/img/query-icon.png);
  background-size: 100%;
}
.SubmittedQuery-input input {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 0.24rem;
  color: #333;
  background: none;
}
.SubmittedQuery-query-btn {
  display: block;
  float: right;
  width: 1.2rem;
  height: 0.58rem;
  line-height: 0.58rem;
  background: #4b89f7;
  color: #fff;
  font-size: 0.24rem;
  border-radius: 0.08rem;
  text-align: center;
  cursor: pointer;
}
.SubmittedQuery-wrap .SubmittedQuery-table {
  width: 100%;
  height: calc(100% - 1.06rem);
  padding: 0.24rem 0.3rem;
  overflow-y: scroll;
  background: #f4f4f4;
}
.SubmittedQuery-table table {
  width: 100%;
  font-size: 0.24rem;
  text-align: center;
  border: 0.01rem solid #e0e0e0;
}
.SubmittedQuery-table table th {
  font-weight: 400;
  line-height: 0.58rem;
  background: #e9f1fe;
  color: #333;
}
.SubmittedQuery-table table tbody tr td {
  padding: 0.15rem 0.04rem;
  line-height: 0.28rem;
  color: #333;
  background: #fff;
}
.SubmittedQuery-table table tbody tr td:first-child {
  padding: 0.15rem 0.1rem;
}
.SubmittedQuery-table .table-title {
  max-width: 3.2rem;
  text-align: left;
  white-space: nowrap;
  overflow-x: auto;
}
</style>

<template>
  <div class="SubmittedQuery-wrap">
    <!-- 头部 -->
    <mt-header title="报送查询" style="display: none">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 查询模块 -->
    <div class="SubmittedQuery-query">
      <div class="SubmittedQuery-input">
        <input type="text" placeholder="请输入表名" v-model="queryInput">
      </div>
      <strong class="SubmittedQuery-query-btn" @click="queryBtn()">查询</strong>
    </div>
    <!-- 表格内容区 -->
    <div class="SubmittedQuery-table">
      <table border="none">
        <thead>
          <tr>
            <th>表名</th>
            <th>期别</th>
            <th>填报时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in TrList" :key="item.id">
            <td>
              <div class="table-title">{{ item.Name}}</div>
            </td>
            <td>{{ item.TaskPeriod }}</td>
            <td>{{ item.Time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { get, post } from "../../api/http";
import { Loading } from "vux";
import Utils from "../common/Utils";
export default {
  components: {
    Loading
  },
  data() {
    return {
      queryInput: "",
      TrList: [],
      showLoading: false //加载动画
    };
  },
  mounted() {
    Utils.checkLoginStatus(this, () => {
      this.init();
    });
  },
  methods: {
    // 下拉参数请求
    init() {
      let that = this;
      let params = JSON.stringify({
        OfficeId: that.$route.params.id,
        Name: that.queryInput
      });
      Utils.showLoading(that);
      post("/API/PoorHelpAPI/GetReportList", params)
        .then(resp => {
          Utils.hideLoading(that);
          if (resp.ret != "0") {
            Utils.toast(that, resp.umsg);
          } else {
            Utils.hideLoading(that);
            for (let i = 0; i < resp.data.length; i++) {
              resp.data[i].Time = Utils.dateFormatter(
                Utils.dateTransformerFromDateStr(resp.data[i].ReportOn),
                "yyyy-MM-dd"
              );
            }
            that.TrList = resp.data;
          }
        })
        .catch(err => {
          Utils.hideLoading(that);
          Utils.toast(that, "获取数据错误!");
        });
    },
    queryBtn() {
      this.init();
    }
  }
};
document.title = "报送查询";
</script>
