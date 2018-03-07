const http = require('http')
const fs = require('fs')

http.createServer((req, res)=> {
	fs.readFile('aaa.txt',(err, data)=> {
		if(err) {
			console.log('读取失败')
		}else {
			console.log(data.toString())
		}
	})
	res.write('555')
	res.end()
}).listen(8080)