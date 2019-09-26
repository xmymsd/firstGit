import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 帮扶工作台 导航  
// 帮扶概括
const bfgk = resolve => require(['../components/nav/bfgk'], resolve);
// 考核统计
const khtj = resolve => require(['../components/nav/khtj'], resolve);
// 帮扶查询
const bfcx = resolve => require(['../components/nav/bfcx'], resolve);
// 帮扶协作
const bfxz = resolve => require(['../components/nav/bfxz'], resolve);
// 公函公告
const ghgg = resolve => require(['../components/nav/ghgg'], resolve);


// 考核统计表的跳转页
// 扶贫项目
const FPXM = resolve => require(['../components/visual/FPXM'], resolve);
// 挂职干部
const GZGB = resolve => require(['../components/visual/GZGB'], resolve);
// 挂职干部详情
const GZGBDetails = resolve => require(['../components/visual/GZGBDetails'], resolve);
// 专业人才
const ZYRC = resolve => require(['../components/visual/ZYRC'], resolve);
// 专业人才详情
const ZYRCDetails = resolve => require(['../components/visual/ZYRCDetails'], resolve);

/* login*/
const Login = resolve => require(['../components/login/'], resolve);
/* error page*/
const Err404 = resolve => require(['../components/404/'], resolve);
const ErrorPage = resolve => require(['../components/404/error'], resolve);
/*对口帮扶大数据中心*/
// 导航页(暂用，方便页面切换查看，调试)
const Navigation = resolve => require(['../components/home/Navigation'], resolve);
// 指标查询
const IndexQuery = resolve => require(['../components/visual/IndexQuery'], resolve);
// 组织领导
const OrganizationalLeadership = resolve => require(['../components/visual/OrganizationalLeadership'], resolve);
// 资金支持
const FinancialSupport = resolve => require(['../components/visual/FinancialSupport'], resolve);
// 产业合作
const IndustrialCooperation = resolve => require(['../components/visual/IndustrialCooperation'], resolve);
// 劳务协作
const Cooperation = resolve => require(['../components/visual/Cooperation'], resolve);
// 奔小康
const Affluent = resolve => require(['../components/visual/Affluent'], resolve);
// 进度总览
const Progress = resolve => require(['../components/info/Progress'], resolve);
// 帮扶日志
const HelpLog = resolve => require(['../components/info/HelpLog'], resolve);
// 日志列表
const LogList = resolve => require(['../components/info/LogList'], resolve);
// 报送查询
const SubmittedQuery = resolve => require(['../components/info/SubmittedQuery'], resolve);
// 单位填报
const FillIn = resolve => require(['../components/info/FillIn'], resolve);
// 人才支援
const TalentSupport = resolve => require(['../components/visual/TalentSupport'], resolve);
// 社会帮扶
const SocialAssistance = resolve => require(['../components/visual/SocialAssistance'], resolve);


//★★★资料共享
//信息列表
const InformationList = resolve => require(['../components/share/InformationList'], resolve);
//信息详情
const InformationDetails = resolve => require(['../components/share/InformationDetails'], resolve);
//公函列表
const MissiveList = resolve => require(['../components/share/MissiveList'], resolve);
//公函详情
const MissiveDetails = resolve => require(['../components/share/MissiveDetails'], resolve);
//政策列表
const PolicyList = resolve => require(['../components/share/PolicyList'], resolve);
//政策详情
const PolicyDetails = resolve => require(['../components/share/PolicyDetails'], resolve);
//党建学习
const PartyList = resolve => require(['../components/share/PartyList'], resolve);
//党建学习详情
const PartyDetails = resolve => require(['../components/share/PartyDetails'], resolve);
//通知公告
const NoticeList = resolve => require(['../components/share/NoticeList'], resolve);
//通知公告详情
const NoticeDetails = resolve => require(['../components/share/NoticeDetails'], resolve);


//★★★精准帮扶
//日志列表
const JournalList = resolve => require(['../components/cooperation/JournalList'], resolve);
const JournalDetails = resolve => require(['../components/cooperation/JournalDetails'], resolve);
const AddJournal = resolve => require(['../components/cooperation/AddJournal'], resolve);
const ProjectManagementList = resolve => require(['../components/cooperation/ProjectManagementList'], resolve);
const ProList = resolve => require(['../components/cooperation/ProjectManagementList-notButton'], resolve);
const ProjectManagementUpdate = resolve => require(['../components/cooperation/ProjectManagementUpdate'], resolve);
const ProjectManagementDetails = resolve => require(['../components/cooperation/ProjectManagementDetails'], resolve);
const ProDetails = resolve => require(['../components/cooperation/ProjectManagementDetails-notButton'], resolve);

//★★★精准帮扶  区域
// 新疆吉木萨尔县
const XJJM = resolve => require(['../components/region/XJJM'], resolve);
// 西藏左贡县
const XZZG = resolve => require(['../components/region/XZZG'], resolve);
// 重庆万州
const CQWZ = resolve => require(['../components/region/CQWZ'], resolve);
// 甘肃临夏州
const GansuNingxiazhou = resolve => require(['../components/region/GansuNingxiazhou'], resolve);
// 宁夏固原市
const NXGY = resolve => require(['../components/region/NXGY'], resolve);

// ★★★任务协同
// 首页
const Coordination = resolve => require(['../components/Coordination/index'], resolve);
const AddTask = resolve => require(['../components/Coordination/AddTask'], resolve);
const TaskMessage = resolve => require(['../components/Coordination/TaskMessage'], resolve);
const TaskMessageDetails = resolve => require(['../components/Coordination/TaskMessageDetails'], resolve);

// 取消授权
const Revoke = resolve => require(['../components/home/Revoke'], resolve);


export const constantRouterMap = [
    { path: '/login', component: Login, hidden: true, meta: { title: '登录' } },
    { path: '/', component: Navigation, hidden: true, meta: { title: '导航页' } },
    { path: '/bfgk', component: bfgk, hidden: true, meta: { title: '帮扶概括' } },
    { path: '/khtj', component: khtj, hidden: true, meta: { title: '考核统计' } },
    { path: '/bfcx', component: bfcx, hidden: true, meta: { title: '帮扶查询' } },
    { path: '/bfxz', component: bfxz, hidden: true, meta: { title: '帮扶协作' } },
    { path: '/ghgg', component: ghgg, hidden: true, meta: { title: '公函公告' } },
    { path: '/FPXM', component: FPXM, hidden: true, meta: { title: '扶贫项目' } },
    { path: '/GZGB', component: GZGB, hidden: true, meta: { title: '挂职干部' } },
    { path: '/GZGBDetails/:id', component: GZGBDetails, hidden: true, meta: { title: '挂职干部详情' } },
    { path: '/ZYRC', component: ZYRC, hidden: true, meta: { title: '专业人才' } },
    { path: '/ZYRCDetails/:id', component: ZYRCDetails, hidden: true, meta: { title: '专业人才详情' } },
    { path: '/IndexQuery', component: IndexQuery, hidden: true, meta: { title: '指标查询' } },
    { path: '/OrganizationalLeadership', component: OrganizationalLeadership, hidden: true, meta: { title: '组织领导' } },
    { path: '/FinancialSupport', component: FinancialSupport, hidden: true, meta: { title: '资金支持' } },
    { path: '/IndustrialCooperation', component: IndustrialCooperation, hidden: true, meta: { title: '产业合作' } },
    { path: '/Cooperation', component: Cooperation, hidden: true, meta: { title: '劳务协作' } },
    { path: '/Affluent', component: Affluent, hidden: true, meta: { title: '携手奔小康' } },
    { path: '/TalentSupport', component: TalentSupport, hidden: true, meta: { title: '人才支援' } },
    { path: '/SocialAssistance', component: SocialAssistance, hidden: true, meta: { title: '社会帮扶' } },
    { path: '/Progress', component: Progress, hidden: true, meta: { title: '进度总览' } },
    { path: '/HelpLog', component: HelpLog, hidden: true, meta: { title: '帮扶日志' } },
    { path: '/LogList/:id', component: LogList, hidden: true, meta: { title: '日志列表' } },
    { path: '/SubmittedQuery/:id', component: SubmittedQuery, hidden: true, meta: { title: '报送查询' } },
    { path: '/FillIn', component: FillIn, hidden: true, meta: { title: '单位填报' } },
    { path: '/InformationList', component: InformationList, hidden: true, meta: { title: '信息列表' } },
    { path: '/InformationDetails/:id', component: InformationDetails, hidden: true, meta: { title: '信息详情' } },
    { path: '/MissiveList', component: MissiveList, hidden: true, meta: { title: '公函列表' } },
    { path: '/MissiveDetails/:id', component: MissiveDetails, hidden: true, meta: { title: '公函详情' } },
    { path: '/PolicyList', component: PolicyList, hidden: true, meta: { title: '政策列表' } },
    { path: '/PolicyDetails/:id', component: PolicyDetails, hidden: true, meta: { title: '政策详情' } },
    { path: '/PartyList', component: PartyList, hidden: true, meta: { title: '党建学习' } },
    { path: '/PartyDetails/:id', component: PartyDetails, hidden: true, meta: { title: '党建学习详情' } },
    { path: '/NoticeList', component: NoticeList, hidden: true, meta: { title: '通知公告' } },
    { path: '/NoticeDetails/:id', component: NoticeDetails, hidden: true, meta: { title: '通知公告详情' } },
    { path: '/JournalList/:id', component: JournalList, hidden: true, meta: { title: '日志列表' } },
    { path: '/JournalList', component: JournalList, hidden: true, meta: { title: '日志列表' } },
    { path: '/JournalDetails/:id', component: JournalDetails, hidden: true, meta: { title: '日志详情' } },
    { path: '/AddJournal', component: AddJournal, hidden: true, meta: { title: '添加日志' } },
    { path: '/ProjectManagementList', component: ProjectManagementList, hidden: true, meta: { title: '项目管理' } },
    { path: '/ProList', component: ProList, hidden: true, meta: { title: '项目管理' } },
    { path: '/ProjectManagementUpdate/:id', component: ProjectManagementUpdate, hidden: true, meta: { title: '进度更新' } },
    { path: '/ProjectManagementDetails/:id', component: ProjectManagementDetails, hidden: true, meta: { title: '进度更新' } },
    { path: '/ProDetails/:id', component: ProDetails, hidden: true, meta: { title: '进度更新' } },
    { path: '/XJJM', component: XJJM, hidden: true, meta: { title: '新疆吉木萨尔县' } },
    { path: '/XZZG', component: XZZG, hidden: true, meta: { title: '西藏左贡县' } },
    { path: '/CQWZ', component: CQWZ, hidden: true, meta: { title: '重庆万州' } },
    { path: '/GansuNingxiazhou', component: GansuNingxiazhou, hidden: true, meta: { title: '甘肃临夏州' } },
    { path: '/NXGY', component: NXGY, hidden: true, meta: { title: '宁夏固原市' } },
    { path: '/Coordination', component: Coordination, hidden: true, meta: { title: '任务协同' } },
    { path: '/AddTask', component: AddTask, hidden: true, meta: { title: '新增任务' } },
    { path: '/TaskMessage', component: TaskMessage, hidden: true, meta: { title: '任务协同消息' } },
    { path: '/TaskMessageDetails/:id', component: TaskMessageDetails, hidden: true, meta: { title: '任务详情' } },
    { path: '/Revoke', component: Revoke, hidden: true, meta: { title: '取消授权' } },
    { path: '/error/:text', component: ErrorPage, hidden: true, meta: { title: '错误信息' } },
    { path: '/404', component: Err404, hidden: true }
]

export default new Router({
    //mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});