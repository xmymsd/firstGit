import Vue from 'vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'; 
import './assets/css/common/resetcss.css'   //样式重置文件
import './assets/css/common/global.css' //全局公共样式
import { ToastPlugin, LoadingPlugin, AlertPlugin, ConfirmPlugin } from 'vux'
import store from './store/' //vuex的配置地方
import router from './router'
import App from './app.vue'
import echarts from 'echarts'
import VueCookie from 'vue-cookie'
import './assets/js/rem-common'

Vue.prototype.$echarts = echarts 

// 设置默认toast
Vue.use(ToastPlugin, { position: 'middle' })
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)

Vue.use(VueCookie)

// require('echarts-gl')
Vue.use(Mint);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
})