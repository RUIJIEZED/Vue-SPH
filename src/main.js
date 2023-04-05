import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false

// 引入路由
import router from '@/router';
// 引入仓库
import store from '@/store';

// 引入三级联动组件
import TypeNav from '@/components/TypeNav';
// 第一个参数：全局组件的名称 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);


new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库:组件实例的身上会多了一个属性$store属性f
  store
}).$mount('#app')


