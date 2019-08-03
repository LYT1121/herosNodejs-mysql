$(function(){
    // 得到id
    let id = location.search.substring(4);
    // 获取旧数据=>发送ajax请求
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:8080/getOldHero',
        data:{id},
        success:function(res){
            console.log(res)
            if(res.code === 200){
                // 把数据填进表单
                $('#name').val(res.data.name);
                // 性别
                let selector = res.data.gender === '男'? '#nan':'#nv';
                $(selector).prop('checked',true);
                // 图片
                $('#headSrc').val(res.data.img);
                // 把id的隐藏域也修改
                $('#id').val(res.data.id);
            }
        }
    });
    // 给修改完成注册事件
    $('#sub').on('click',function(){
        // 非空判断
        // 收集表单数据
        let data = $('#form').serialize();
        // console.log(data);
        //通过ajax发起请求
        $.ajax({
            type:'post',
            url:'http://127.0.0.1:8080/editHeroById',
            data,
            success:function(res){
                if(res.code===200){
                    alert(res.msg);
                    location.href = '/index';
                }
            }
        })
    })
})