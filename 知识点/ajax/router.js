/**
 * 这里是接口范例，可根据需求进行修改
 * 可在当前项目文件夹下直接新建 html文件，向对应接口发送请求
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/getBook', function(req, res) {
    console.log(req.query);
    var book = req.query.bookName;
    var data1 = {
        status: 0, //1
        data: [{
            name: 'javascript权威指南'
        }, {
            name: 'javascript高级程序设计'
        }]
    };
    var data2 = {
        status: 1, //1
        errorMsg: "查询数据库失败"
    };
    var data3 = {
        status: 0, //1
        data: [{
            name: 'html权威指南'
        }, {
            name: 'html高级程序设计'
        }]
    };

    if (book === '') {
        console.log('data2');
        return res.send(data2);
    }
    if (book === 'javascript') {
        res.send(data1);
    } else {
        console.log('333');
        res.send(data3);
    }



});


/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/user/:uid', function(req, res) {
    console.log(req.params.uid); //100
    console.log(req.query.name); // 'ruoyu'
    res.send({
        status: 1,
        errorMsg: "请先注册"
    });
});


/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }
 */
app.post('/comment', function(req, res) {
    console.log(req.body.comment); // "这是评论内容"
    res.send({
        status: 0,
        data: {
            cid: 100,
            comment: "这是评论内容"
        }
    });
});



/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
app.get('/user', function(req, res) {
    res.render('user.ejs', {
        username: '饥人谷'
    });
});