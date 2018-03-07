const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')

http.createServer((req, res)=> {
	let str,users ={};
	req.on('data',data => {
		str += data
	})
	req.on('end',data=> {
		var post = str;
	})
	const obj = urlLib.parse(req.url,true)
	const url = obj.pathname
	const get = obj.query
	if(req.url == '/user') {
		if(get.act == 'reg') {
			if(users[get.user]){
				rew.write('该账号已经注册了')
			}else{
				users['user'] = user[get.user]
				users['pass'] = user[get.pass]
				rew.write('注册成功')
			}
		}else{
			if(users[get.user]){
				if(users[get.pass] == get.pass){
					res.write('登陆成功')
				}else{
					res.write('密码错误')
				}
			}else{
				res.write('密码错误')
			}
		}
	}
}).listen(8097)