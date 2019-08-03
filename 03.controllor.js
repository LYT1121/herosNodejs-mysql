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
    // 获取edit页面
    getEditHtml(req,res){
        // 因为edit.html里面没有动态数据,直接使用render把页面返回
        res.render('edit');
    },
    // 根据id获取原来数据的接口的方法
    getEditHeroById(req,res){
        // 获取想要修改的英雄id
        let id = req.query.id;
        // console.log(id);
        model.getEditHeroById(id,target=>{
            // console.log(target);
            let response = {};
            if(target){
                response.code = 200;
                response.msg = '获取成功';
                response.data = target[0];
            }else{
                response.code = 503;
                response.msg = '没有找到对应的数据，请确认id是否正确';
            }
            // 返回提示
            res.send(response);
        })
    },
    // 修改英雄数据的方法
    editHeroById(req,res){
        // console.log(req.body);
        model.editHero(req.body.id,req.body,result=>{
            // 返回提示
            res.send({code:200,msg:'修改成功'});
        })
    }
};
// 把逻辑层所有方法曝光，方便其他调用
module.exports = controllor;