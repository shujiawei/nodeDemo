const express = require('express')
const bodyParser = require('body-parser')
const querystring = require('querystring')
const myBodyParser = require('./libs/my-body-parser')
let server = express()

server.use(myBodyParser)

// server.use((req, res, next) => {
//     let str = ''
//     req.on('data',data => {
//         str += data
//     })
//     req.on('end', () => {

//         req.body = querystring.parse(str)
//         console.log(querystring.parse(str))
        
//         next()
//     })
// })

// server.use('/',(req,res,next) => {
//     console.log(1)
//     next()//链式操作
// })

server.use('/',(req, res) => {
    console.log(req.body)
})
server.listen(8902)
