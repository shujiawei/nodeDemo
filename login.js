const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')
var users ={};
http.createServer((req, res)=> {
	let str;
	req.on('data',data => {
		str += data
	})
	req.on('end',data=> {
		var post = str;
	})
	const obj = urlLib.parse(req.url,true)
	const url = obj.pathname
	const get = obj.query
	if(url == '/user') {
		if(get.act == 'reg') {
			console.log(users[get.user])
			if(users[get.user]){
				res.write("{'ok':false,'message':'该账号已经注册了'}")
			}else{
				users[get.user] = get.pass
				console.log(users[get.user])
				res.write("{'ok':true,'message':'注册成功'}")
			}
		}else{
			if(users[get.user]){
				if(users[get.pass] == get.pass){
					res.write("{'ok':true,'message':'登陆成功'}")
				}else{
					res.write("{'ok':false,'message':'密码错误'}")
				}
			}else{
				res.write("{'ok':false,'message':'密码错误'}")
			}
		}
		res.end()
	}else{
		var file_name = './www'+req.url
		if(req.url != '/favicon.ico') {
			fs.readFile(file_name,(err,data)=>{
				if(err){
					console.log(err)
				}else{
					res.write(data)
					res.end()
				}
			})
		}
		
	}
}).listen(8097)