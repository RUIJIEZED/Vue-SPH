// 这是Home的小仓库

// 引入api
import { reqCategoryList } from '@/api';

// state:仓库存储数据的地方
const state = {
    // state中数据默认初始值别瞎写，服务器放回对象，服务器放回数据【根据接口返回值初始化的】
    categoryList:[], 
};
// mutations:修改state的唯一手段f
const mutations = {
    CATEGORYLIST(state,categoryList) {
        state.categoryList = categoryList; 
    }
};
// action：处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 通过api里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}) {
        let result = await reqCategoryList();
        if(result.code == 200) {
            commit("CATEGORYLIST",result.data);
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