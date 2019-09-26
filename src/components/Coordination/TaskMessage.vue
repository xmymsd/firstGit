<style>
.TaskMessage-wrap {
  overflow-y: auto;
  background: #ebebeb;
}
.TaskMessage-con {
  padding: 0.2rem 0.3rem;
  text-align: center;
  font-size: 0;
}
.TaskMessage-date {
  display: inline-block;
  height: 0.46rem;
  padding: 0 0.14rem;
  margin: 0 auto 0.54rem;
  border-radius: 0.04rem;
  line-height: 0.46rem;
  font-size: 0.24rem;
  color: #fff;
  background: #d5d5d5;
}
.TaskMessage-box {
  padding: 0.3rem 0.3rem 0;
  margin-bottom: 0.38rem;
  border: 0.01rem solid #dfdfdf;
  border-radius: 0.06rem;
  background: #fff;
  text-align: left;
  cursor: pointer;
}
.TaskMessage-box h2 {
  margin-bottom: 0.1rem;
  font-size: 0.34rem;
  line-height: 0.46rem;
  font-weight: bold;
  color: #333;
}
.TaskMessage-box strong {
  display: block;
  font-size: 0.28rem;
  color: #333;
  line-height: 0.44rem;
}
.TaskMessage-box-footer {
  position: relative;
  height: 0.96rem;
  margin-top: 0.2rem;
  font-size: 0.28rem;
  line-height: 0.95rem;
  color: #333;
  border-top: 0.01rem solid #e0e0e0;
}
.TaskMessage-box-footer::after {
  position: absolute;
  display: block;
  content: "";
  top: 0.33rem;
  right: 0.1rem;
  width: 0.25rem;
  height: 0.25rem;
  border-top: 0.03rem solid #aaa;
  border-right: 0.03rem solid #aaa;
  transform: rotate(45deg);
}
</style>

<template>
  <div class="TaskMessage-wrap">
    <div class="TaskMessage-con">
      <template v-for="item in List">
        <span class="TaskMessage-date" :key="item.id">{{item.date}}</span>
        <div class="TaskMessage-box" :key="item.id">
          <h2>{{item.title}}</h2>
          <strong v-if="item.type == '1' ">发起人：{{item.promoter}}</strong>
          <strong v-if="item.type == '1' ">有任务需要你处理，点击处理</strong>
          <strong v-if="item.type == '2' ">处理人：{{item.handle}}</strong>
          <strong v-if="item.type == '2' ">进度：{{item.schedule}}</strong>
          <strong v-if="item.type == '2' ">有任务需要你处理，点击处理</strong>
          <strong v-if="item.type == '2' ">意见：{{item.opinion}}</strong>
          <div class="TaskMessage-box-footer">详情</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { get, post } from "../../api/http";
import Utils from "../common/Utils";
export default {
  data() {
    return {
      List: [] //任务协同消息列表
    };
  },
  methods: {
    init() {
      this.List = [
        {
          date: "2019-02-15 16:30",
          id: "2342342342344",
          title: "任务通知：关于【某某某某某某某某某】任务",
          type: "1",
          promoter: "张三",
          handle: "李四",
          schedule: "40%",
          opinion: "所有人完成了任务"
        },
        {
          date: "2019-02-15 16:30",
          id: "2342342342344",
          title: "任务通知：关于【某某某某某某某某某】任务",
          type: "2",
          promoter: "张三",
          handle: "李四",
          schedule: "40%",
          opinion: "所有人完成了任务"
        },
        {
          date: "2019-02-15 16:30",
          id: "2342342342344",
          title: "任务通知：关于【某某某某某某某某某】任务",
          type: "2",
          promoter: "张三",
          handle: "李四",
          schedule: "40%",
          opinion: "所有人完成了任务"
        },
        {
          date: "2019-02-15 16:30",
          id: "2342342342344",
          title: "任务通知：关于【某某某某某某某某某】任务",
          type: "1",
          promoter: "张三",
          handle: "李四",
          schedule: "40%",
          opinion: "所有人完成了任务"
        }
      ];
    }
  },
  mounted() {
    this.init();
  }
};
document.title = "任务协同信息";
</script>