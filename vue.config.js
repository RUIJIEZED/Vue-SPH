const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // 处理请求后台数据跨域问题
    proxy: {
      // 对api开头的请求进行代理
      '/api' : {
        // 服务器地址
        target: 'http://gmall-h5-api.atguigu.cn',
        // 允许跨域
        changeOrigin: true,
        secure:false,
      }
    }
  }
})
 