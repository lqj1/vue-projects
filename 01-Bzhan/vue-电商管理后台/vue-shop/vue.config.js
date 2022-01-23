// module.exports = {
//   devServer: {
//     host: 'localhost',
//     port: 8080,
//     proxy: {
//       server: {
//         target: 'http://127.0.0.1:8080', // 定义被拦截的请求需要访问的真实服务器
//         pathRewrite: {
//           // 通过前缀替换进行地址的重写和定义：去掉/api（因为/api默认会拼接上去）
//           '^/api': '', // 替换掉以/api开头的，这里用空字符串替换，直接去掉
//         },
//       },
//     },
//   },
// };
// /**
//  * 原理：当遇到“/api”时，会进入内部函数，将target变量的真实后台地址拼接到“/api”的前面，此时 请求路径变成了：“http://127.0.0.1:8080/api",然后由于pathRewrite方法中将 “/api”替换成了空，也就是说直接去掉，因此路径变成了 ““http://127.0.0.1:8080”，这就完成了代理，通过“/api”这个桥梁将后台地址成功地引入。
//   注：
//   vue.config.js文件只是做前端代理解决跨域问题时所用到的配置文件，当前端打包到服务器上时，该文件会被忽略，因此前端对于 api接口路径的定义一定要跟后端所提供的保持一致，不能随意增减上下文，即使你可能通过 配置代理 获取了正确的请求路径，因为打包到服务器后代理便失效了。
//  */
