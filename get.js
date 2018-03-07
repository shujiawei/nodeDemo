const http = require('http')
const querystring = require('querystring')
const urlLib = require('url')

http.createServer((req, res)=> {
	if(req.url.indexOf('?')!=-1){
		let arr = req.url.split('?')
		let url = arr[0]
		let get = querystring.parse(arr[1])
	}else{
		let url = req.url
	}
	let data = urlLib.parse(req.url,true)
	let url = data.pathname
	let get = data.query
	console.log(url)
	console.log(get)
	res.write('555')
	res.end()
}).listen(8787)