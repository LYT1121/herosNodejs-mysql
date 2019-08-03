// 引入express模块=>第三方快速搭建服务器模块
const express = require('express');
// 引入第三方模块=>body-parser模块
const bodyParser = require('body-parser');
// 引入路由层
const router = require('./02.router');
// 创建服务器
const app = express();
// 获取端口和IP
app.listen(8080,function(){
    console.log('服务器已启动，可以通过 http://127.0.0.1:8080 访问');
})
// 获取静态资源
app.use('/assets',express.static('assets'));
app.use('/views',express.static('views'));
// 设置默认模板引擎
app.set('view engine','ejs');
// 注册body-parser中间件=>解析post请求的数据
app.use(bodyParser.urlencoded({extended:false}));
// 注册路由中间件
app.use(router);