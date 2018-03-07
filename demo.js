'use strict'
const http = require('http');
var ser = http.createServer(function (req, res){//req 请求 res 服务器返回给浏览器
	console.log(req.url)
	res.write('aaa');
	res.end()
})
// console.log( __dirname );//文件路径
// console.log(__filename)

setTimeout(()=>{
	// console.error('两秒后执行。。')
},2000)

console.log(process.stdout)
ser.listen(1010)