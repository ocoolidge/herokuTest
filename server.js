const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const fs = require('fs')
const fsP = require('fs').promises
const path = require("path")

const portNumber = 4029
const name = path.basename(__dirname)
let app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

let httpServer = http.createServer(app)

httpServer.listen(portNumber, function(){
  console.log('listening on port:: ' + portNumber)
})

app.post('/endpoint', funk)

function funk(request, response){
    response.send('hello wrld')
}