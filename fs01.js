const http = require('http')
const fs = require('fs')

http.createServer((req, res)=> {
	fs.writeFile('bbb.txt','1221312',(data)=> {
		console.log(data)
	})
	res.write('222')
	res.end()
}).listen(8145)