const http = require('http')
const querystring = require('querystring')

http.createServer((req, res)=> {
	let str = ''
	req.on('data',data => {
		str += data
	})
	req.on('end',data=> {
		console.log(querystring.parse(str)) 
		console.log(req.url)
	})
	res.end()
}).listen(8787)