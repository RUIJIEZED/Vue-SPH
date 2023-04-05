import Vuex from 'vuex';
import Vue from "vue";


// 引入插件
Vue.use(Vuex);

import Home from "./Home";
import Search from "./Search";



export default new Vuex.Store({
    modules: {
        Home,
        Search
    }
})

