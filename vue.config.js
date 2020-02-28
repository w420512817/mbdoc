module.exports = {
  
  publicPath:"./",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 把px单位换算成rem单位
            rootValue: 32, // 换算的基数(设计图750的根字体为32)
            // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  },
  devServer: {
    port: 1890,
    proxy: {
      '/api': {
        //本地服务接口地址
        target: 'http://saber.aged.aijk.net/api', // 测试环境
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};
