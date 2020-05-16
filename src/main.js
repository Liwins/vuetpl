// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'
import axios from "axios";
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
Vue.prototype.axios=axios
Vue.config.productionTip = false
Vue.use(ECharts)
Vue.component('v-chart', ECharts)
Vue.use(VueRouter)
Vue.use(Antd)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
