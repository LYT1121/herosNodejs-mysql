// 引入数据库
const mysql = require('mysql');
// 从数据库中创建一个连接对象
const connection = mysql.createConnection({
    // ip地址
    host:'127.0.0.1',
    // 端口
    port:3306,
    // 用户名
    user:'root',
    // 用户密码
    password:'root',
    // 数据库名称
    database:'herosMysql',
});
// 数据处理的方法
const model = {
    // 处理获取主页的方法
    getAllHero(callback){
        // 需要一个获取主页数据的sql语句
        let htmlSql = `SELECT * FROM heros WHERE isDelete = 0`;
        // 执行这个htmlSql语句
        connection.query(htmlSql,(err,result,filed)=>{
            // err => 如果有错误，是一个错误对象
            if(err) console.log(err);
            // result => 返回语句执行结构
            callback(result);
        })
    },
    // 处理获取新增英雄的方法
    getNewHeros(data,callback){
        // 需要一个获取新增英雄信息的sql语句
        let NewHeroSql = `INSERT INTO heros SET \`name\`='${data.name}',\`gender\`='${data.gender}',\`img\`='${data.img}'`;
        // 执行这个NewHeroSql语句
        connection.query(NewHeroSql,(err,result,filed)=>{
            if(err) console.log(err);
            callback(result);
        })
    },
    // 处理删除英雄数据的方法
    delHeroById(id,callback){
        // 需要一个根据id获取这英雄的数据的sql语句
        // 实际删除=>不推荐
        // let byIdSql = `DELETE FROM heros WHERE id = 3`;
        // 软删除
        let byIdSql = `UPDATE heros SET isDelete = 1 WHERE id = ${id}`;
        // 执行这个byIdSql语句
        connection.query(byIdSql,(err,result,filed)=>{
            if(err) console.log(err);
            callback(result);
        })
    },
}
// 把数据处理层曝光，方便其他调用
module.exports = model;