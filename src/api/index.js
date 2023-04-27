
// 当前模块：API进行统一
import requests from './ajax';

import mockAjax from './mockAjax';

export const reqCategoryList = () => requests({
  method: 'get',
  url: '/product/getBaseCategoryList',
})

export const reqBannerList = () => mockAjax({
  method: 'get',
  url: '/banner',
})
