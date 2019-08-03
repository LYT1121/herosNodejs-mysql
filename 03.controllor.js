// 引入数据层
const model = require('./04.model');
// 使用逻辑层处理数据
const controllor = {
    // 请求主页的方法
    getAllHeroIndex(req, res) {
        // 调用数据层获取主页的数据
        model.getAllHero(arr=>{
            // 引入模板引擎处理好的动态数据进行渲染
            res.render('index',{arr});
        })
    },
    // 请求新增页面的数据
    getAddHero(req,res){
        // 因为新增页面里面不涉及动态数据，直接引入静态资源渲染
        res.render('add');
    },
};
// 把逻辑层所有方法曝光，方便其他调用
module.exports = controllor;