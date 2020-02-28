import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/rem/rem'  // 开启rem适配
import { Row, Col, Toast } from 'vant'
Vue.use(Toast);
Vue.use(Row).use(Col);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
