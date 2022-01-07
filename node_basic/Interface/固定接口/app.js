var express = require('express');
var app = express();


//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


var questions = [];


function createRandomItem(id) {
    var heroes = ['张三', '李四', '王五', '赵六', '钱七', '路人甲', '路人乙', 'bruse Lee'];
    return {
        id: id,
        name: heroes[Math.floor(Math.random() * 7)],
        age: Math.floor(Math.random() * 100)
        // saved: Math.floor(Math.random() * 10000)
    };

}

for (var i = 0; i < 100; i++) {
    questions.push(createRandomItem(i));
}

var arr = [
    {
        path: '/category',
        name: 'category',
        title: '分类',
        component: '/category',
        children: [{
            path: '/one',
            name: 'oneChildren',
            component: '/one',
            children: [
                {
                    path: '/two',
                    name: 'two',
                    component: '/two'
                }
            ]
        }]
    },
    {
        path: '/maneger',
        name: 'maneger',
        title: '管理',
        component: '/maneger'
    },
    {
        path: '/message',
        name: 'message',
        title: '信息',
        component: '/message'
    },
    {
        path: '/user',
        name: 'user',
        title: '用户',
        component: '/user'
    }
]


//写个接口123
app.get('/123', function (req, res) {
    res.status(200),
        res.json(arr)
});

//配置服务端口
var server = app.listen(3000, function () {

    var host = server.address().address;

    var port = server.address().port;
})
