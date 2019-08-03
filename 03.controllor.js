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
    // 处理请求新增英雄页面的数据
    getAddNewHeros(req,res){
        // req的对象身上多一个属性body=>一个对象，该对象是解析post请求传递回来的数据
        console.log(req.body);
        model.getNewHeros(req.body,result=>{
            let response = {
                code:501,
                msg:'添加英雄失败'
            };
            // affectedRows=>受影响的行数
            if(result.affectedRows === 1){
                response.code = 200;
                response.msg = '恭喜你，添加英雄成功';
            }
            // 返回提示
            res.send(response);
        })
    },
    // 处理请求获取删除英雄数据
    delHeroById(req,res){
        console.log(req.body);
        model.delHeroById(req.query.id,result=>{
            let response = {
                code:501,
                msg:'删除英雄失败'
            };
            // affectedRows=>受影响的行数
            if(result.affectedRows === 1){
                response.code = 200;
                response.msg = '删除英雄成功';
            }
            // 返回提示
            res.send(response);
        })
    },
};
// 把逻辑层所有方法曝光，方便其他调用
module.exports = controllor;