// 这是Home的小仓库

// 引入api
import { reqBannerList, reqCategoryList } from '@/api';

// state:仓库存储数据的地方
const state = {
    // state中数据默认初始值别瞎写，服务器放回对象，服务器放回数据【根据接口返回值初始化的】

    // 三级菜单数据
    categoryList:[], 
    // 轮播图数据
    bannerList: [],
};
// mutations:修改state的唯一手段
const mutations = {
    // 三级菜单
    CATEGORYLIST(state,categoryList) {
        state.categoryList = categoryList; 
    },
    // 轮播图 
    BANNERLIST(state,bannerList) {
        state.bannerList = bannerList;
    }
};
// action：处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 通过api里面的接口函数调用，向服务器发请求，获取服务器的数据
    // 三级菜单
    async categoryList({commit}) {
        let result = await reqCategoryList();
        if(result.code == 200) {
            commit("CATEGORYLIST",result.data);
        }
    },
    // 轮播图
    async bannerList({commit}) {
        let result = await reqBannerList();
        if(result.code == 200) {
            commit("BANNERLIST",result.data);
        }
    }
};
// getters: 理解为计算属性，可以简化仓库数据，让组件获得仓库的数据更加方便
const getters = {};

// 对外暴露  
export default {
    state, 
    mutations,
    actions,
    getters,
}