import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './helper/api';
import'./assets/css/main.scss';
import'./assets/css/helper.scss';
import'./assets/css/responsive.scss';
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
Vue.use(SequentialEntrance);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
