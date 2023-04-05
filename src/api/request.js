// 引入axios
import axios from "axios";

// 引入进度条模块
import nprogress from 'nprogress';
// 引入进度条样式
import "nprogress/nprogress.css";

// start进度条开始 done:进度条结束
// start: 进度条开始  done: 进度条结束

const instance = axios.create({
  // 请求响应时间 
  timeout: 5000,
  // url前缀
  baseURL: '/api',
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  // 进度条开始
  nprogress.start();
  return config;
},(error) => {
  return Promise.reject(error);
})

// 响应拦截器
instance.interceptors.response.use((response) => {
  // 进度条结束
  nprogress.done();
  return response.data;
},(error) => {
  return Promise.reject(error);
})



// 对外暴露
export default instance;