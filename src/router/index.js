import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
// import { replace } from 'core-js/fn/symbol';

// 先把VueRouter原型对象的push,先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;


VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // 重写push|replace
    // 第一个参数：告诉原来push方法，你往哪里跳转（传递哪些参数）
    // 第二个参数：成功回调
    // 第三个参数：失败的回调
    // call||apple区别
    // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
    // 不同点：call与apply传递参数用逗号隔开，apply方法执行，传递数组
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => { }, () => { });
  }
}
VueRouter.prototype.replace = function (location, resole, reject) {
  if (resole && reject) {
    originReplace.call(this, location, resole, reject);
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
}

export default new VueRouter({
  // 配置路由
  routes: [
    // 主页路由
    {
      path: '/home',
      component: Home,
      meta: { show: true },
    },
    // 登录路由
    {
      path: '/login',
      component: Login,
      meta: { show: false },
    },
    // 注册路由
    {
      path: '/register',
      component: Register,
      meta: { show: false },

    },
    // 搜索路由
    {
      path: '/search/:keyword?',
      component: Search,
      name: 'search',
      meta: { show: true },
    },
    // 路由重定向
    {
      path: '*',
      redirect: '/home'
    }
  ]
})