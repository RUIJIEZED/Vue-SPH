<template>
  <div>
    <!-- 三级联动全局组件 -->
    <TypeNav/>
    <!-- 中间轮播图列表 -->
    <ListContainer/>
    <!-- 今日推荐 -->
    <Recommend/>
    <!-- 商品排行 -->
    <Rank/>
    <!-- 猜你喜欢 -->
    <Like/>
    <!-- 楼层 -->
    <Floor/>
    <Floor/>
    <!-- --商标-- -->
    <Brand/>

  </div>
</template>

<script>
// 引入中间轮播图列表
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';

export default {
  components: {
    // 中间轮播图列表
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style>

</style>