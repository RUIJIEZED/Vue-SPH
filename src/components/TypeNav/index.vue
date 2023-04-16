<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all"  @mouseenter="enterShow" @mouseleave="leaveShow">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort" v-show="show" >
        <div class="all-sort-list2" @click="goSearch">
          <div class="item" v-for="(c1,index) in categoryList.slice(0,16)" :key="c1.categoryId" @mouseleave="leaveIndex">
            <h3 @mouseenter="enterIndex(index)" :class="{cur:currentIndex==index}">
              <a
              :data-categoryName="c1.categoryName" 
              :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
            </h3>
            <div class="item-list clearfix" :style="{display:currentIndex==index ? 'block':'none'}">
              <div class="subitem" v-for="(c2) in c1.categoryChild" :key="c2.categoryId">
                <dl class="fore">
                  <dt>
                    <a
                    :data-categoryName="c2.categoryName" 
                    :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                  </dt>
                  <dd>
                    <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                      <a 
                      :data-categoryName="c3.categoryName" 
                      :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
// 引入节流库
import throttle from 'lodash/throttle';

export default {

  name : "TypeNav",

  data() {
    return {
      // 用来存储一级菜单默认索引
      currentIndex: -1,
      show: true,
    }
  },
  methods: {
    // 节流防抖
    enterIndex:throttle(function(index){
      this.currentIndex = index;
    },20),
  
    // 鼠标移出取消高亮
    leaveIndex() {
      this.currentIndex = -1;
    },

    // 三级菜单点击路由跳转函数
    goSearch(event) {
      // 获取标签元素
      let Element = event.target;
      // 节点有个属性dataset属性，可以获取节点的自定义属性与属性值
      let { categoryname,category1id,category2id,category3id } = Element.dataset;
      // 判断是否a标签
      if (categoryname) {
        let location = { name:'search',};
        let query = { categoryName: categoryname};
        // 判断是否a的一级标签
        if (category1id){
          query.category1Id = category1id;
          // 判断是否a的二级标签
        } else if(category2id) {
          query.category2Id = category2id;
          // 判断是否a的三级标签
        } else if(category3id){
          query.category3Id = category3id;
        }
        // 动态的给location添加query属性
        location.query = query;
        // 路由跳转
        this.$router.push(location);
      }
    },

    enterShow() {
      if(this.$route.path != '/home') {
        this.show = true;
      }
    },

    leaveShow() {
      currentIndex = -1;
      if(this.$route.path != '/home') {
        this.show = false;
        
      }
    },



  },

  // 组件挂载完毕，可以向服务器发请求
  mounted() {
    // 通过Vuex发送请求，获取数据，存储与仓库当中
    this.$store.dispatch('categoryList'); 

    // 用来判断三级菜单在Search组件中显示与隐藏
    if (this.$route.path!='/home') {
      this.show = false;
    }
  },

  computed: {
    //数组的写法:目前书写的是大仓库state的K  ...mapState(['home'])
    ...mapState({
      //对象写法,对象的K,给VC新增的属性
      //新增的属性erha,右侧属性值为箭头函数返回的结果。作为新增属性的属性值
      //箭头函数执行，注入一个参数state->大仓库【包含小仓库】
      categoryList:(state) => {
        return state.Home.categoryList
      }, //对象简写形式
    }),
  },
}
</script>

<style lang="less">

.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {

          // 鼠标移入动态添加高亮
          .cur {
            background-color: skyblue;
          }
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }

          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        
      }
    }
  }
}

</style>