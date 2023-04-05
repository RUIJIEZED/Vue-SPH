
// 当前模块：API进行统一
import requests from './request';

export const reqCategoryList = () => requests({
  method: 'get',
  url: '/product/getBaseCategoryList',
})