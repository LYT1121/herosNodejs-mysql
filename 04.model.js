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
    }
}
// 把数据处理层曝光，方便其他调用
module.exports = model;