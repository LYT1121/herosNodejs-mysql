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
// 调用请求新增英雄数据的方法=>请求add页面
router.get('/add',(req,res)=>{
    controllor.getAddHero(req,res);
});
// 调用请求新增英雄数据的方法=>请求新增数据
router.post('/getAddNewHeros',(req,res)=>{
    controllor.getAddNewHeros(req,res);
});
// 调用请求删除这个英雄数据的方法
router.get('/delHeroId',(req,res)=>{
    controllor.delHeroById(req,res);
});
// 请求监听/edit =>修改编辑页面
router.get('/edit',(req,res)=>{
    controllor.getEditHtml(req,res);
});
// 请求获取想要修改的英雄原来的数据的接口
router.get('/getOldHero',(req,res)=>{
    controllor.getEditHeroById(req,res);
});
// 调用请求修改英雄数据的端口
router.post('/editHeroById',(req,res)=>{
    controllor.editHeroById(req,res);
});
// 把路由层曝光出去，方便其他调用
module.exports = router;
