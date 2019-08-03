// 引入express模块=>第三方快速搭建服务器模块
const express = require('express');
// 引入逻辑层
const controllor = require('./03.controllor');
// 创建一个路由对象
const router = express.Router();
// 使用路由对象实现监听功能
// 调用请求index主页的方法
router.get('/index',(req,res)=>{
    controllor.getAllHeroIndex(req,res);
});
// 把路由层曝光出去，方便其他调用
module.exports = router;
