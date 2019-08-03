$(function(){
    // 获取点击删除注册事件=>动态数据=>事件委托的方式
    $('#tbody').on('click','a:last-child',function(){
        // 交互常识 => 弹框确认是否删除
        if(!confirm('你确定要删除该英雄吗？')){
            return;
        };
        // 获取对应的id
        let id = $(this).attr('data-id');
        // 用闭包保存一下this
        let _this = this;
        // ajax请求
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:8080/delHeroId',
            data:{id},
            success:function(res){
                if(res.code === 200){
                    // 提示用户
                    alert(res.msg);
                    // 把对应的行删除
                    $(_this).parents('tr').remove();
                }
            }
        })
    })
})