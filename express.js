const express = require('express')
const experssStatic = require('express-static')//去取静态文件的一个中间件
var server = express()
// user?user=111&pass=123456
let users = {
    'blue':123456
}
server.use('/login',(req,res)=>{//res.send() 可以发送任何东西
    let obj = req.query
    if (users[obj.user] == null) {
        res.send({ok:false,message: '此用户没注册'})
    }else{
        if (users[obj.user] == obj.pass){
            res.send({ok:true,message: '成功'})
        }else {
            res.send({ok:false,message: '检查你的密码是否输入正确！'})
        }
    }
    console.log(req.query)
    res.send('4414')
})

server.use(experssStatic('./www'))
server.listen(8080)