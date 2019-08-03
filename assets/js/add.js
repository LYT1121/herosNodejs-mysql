$(function () {
    // 注册新增按钮点击事件
    $('#sub').on('click', function () {
        // 获取form表单所有的数据
        let data = $('#myform').serialize();
        // 发送ajax请求
        $.ajax({
            type:'post',
            url:'http://127.0.0.1:8080/getAddNewHeros',
            data,
            success:function(res){
                if(res.code === 200){
                    // 提示用户
                    alert(res.msg);
                    // 跳转回主页
                    location.href ='/index';
                }
            }
        })
    })
})