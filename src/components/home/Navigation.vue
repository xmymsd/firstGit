<style>
.urlList {
  padding-top: 1rem;
}
.urlList li {
  margin-bottom: 0.3rem;
  font-size: 0.4rem;
  text-align: center;
}
</style>

<template>
  <div class="workTable-wrap">
    <!-- 头部 -->
    <mt-header title="导航页" style="display: none">
      <a href="/">
        <mt-button icon="back">返回</mt-button>
      </a>
    </mt-header>
    <!-- 页面列表 -->
    <ul class="urlList">
      <li>
        <a href="./?code=123&agentId=1000025#/IndexQuery">
          <h3>考核统计表</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/OrganizationalLeadership">
          <h3>组织领导</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/FinancialSupport">
          <h3>资金支持</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/IndustrialCooperation">
          <h3>产业合作</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/Cooperation">
          <h3>劳务协作</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/Affluent">
          <h3>携手奔小康</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/TalentSupport">
          <h3>人才支援</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/SocialAssistance">
          <h3>社会帮扶</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/login">
          <h3>登录页</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/Progress">
          <h3>进度总览</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/HelpLog">
          <h3>帮扶日志(领导看的日志列表)</h3>
        </a>
      </li>
      <!-- <li>
        <a href="./?code=123&agentId=1000025#./LogList">
          <h3>日志列表</h3>
        </a>
      </li>-->
      <li>
        <a href="./?code=123&agentId=1000025#/JournalList">
          <h3>个人日志列表</h3>
        </a>
      </li>
      <!-- <li>
        <a href="./?code=123&agentId=1000025#/SubmittedQuery">
          <h3>报送查询</h3>
        </a>
      </li> -->
      <li>
        <a href="./?code=123&agentId=1000025#/FillIn">
          <h3>单位填报</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/InformationList">
          <h3>新闻列表</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/MissiveList">
          <h3>公函列表</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/PolicyList">
          <h3>政策列表</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/PartyList">
          <h3>党建学习</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/NoticeList">
          <h3>通知公告</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/AddJournal">
          <h3>添加日志</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/ProjectManagementList">
          <h3>项目管理</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/ProList">
          <h3>项目管理（无按钮）</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/XJJM">
          <h3>新疆吉木萨尔县</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/XZZG">
          <h3>西藏左贡县</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/CQWZ">
          <h3>重庆万州</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/GansuNingxiazhou">
          <h3>甘肃临夏州</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/NXGY">
          <h3>宁夏固原市</h3>
        </a>
      </li>
      <li>
        <a href="./#/Coordination">
          <h3>任务协同</h3>
        </a>
      </li>
      <li>
        <a href="./#/TaskMessage">
          <h3>任务协同通知</h3>
        </a>
      </li>
      <li>
        <a href="./#/AddTask">
          <h3>新增任务</h3>
        </a>
      </li>
      <li>
        <a href="./?code=123&agentId=1000025#/Revoke">
          <h3>取消授权</h3>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Utils from "../common/Utils";
export default {
  mounted() {
    Utils.checkLoginStatus(this, () => {
      this.init();
    });
  },
  methods: {
    init() {
      // console.log("进入init");
    }
  }
};
</script>
