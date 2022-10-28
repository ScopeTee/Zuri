const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer((req, res) => {
    if( req.url === '/'){
        let filePath = path.join(__dirname ,"public" , "home.html")
            fs.readFile(filePath , 'utf-8' , (err , data) => {
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.end(data)
        })
    }
    if( req.url === '/about'){
        let filePath = path.join(__dirname ,"public" , "about.html")
            fs.readFile(filePath , 'utf-8' , (err , data) => {
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.end(data)
        })
    }
    if( req.url === '/contact'){
        let filePath = path.join(__dirname ,"public" , "contact.html")
            fs.readFile(filePath , 'utf-8' , (err , data) => {
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.end(data)
        })
    }
})

server.listen(5000 ,() => {
    console.log( "Server is up and running ")
})
