const http = require('http')
const fs = require('fs')
// utilities for parsing and formatting URLs , allows to work with url
const url = require('url')
//It allows you to parse query strings, stringify JavaScript objects into query string format
const querystring = require('querystring')
//The figlet module is a popular package that provides ASCII art generation from text
const figlet = require('figlet')


const server = http.createServer((req,res) => {
    //path component of the object returned by parse()
    const page = url.parse(req.url).pathname;
    //passed the querystring as an argument from Parse() 
    const params = querystring.parse(url.parse(req.url).query)
    console.log(page)
    if(page == '/'){
        fs.readFile('/home/shiva1974/Desktop/learning-of-100Devs-/Node/multipage_node_sever/index.html',(error,data) => {
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(page == '/other'){
        fs.readFile('/home/shiva1974/Desktop/learning-of-100Devs-/Node/multipage_node_sever/other.html', (error,data) => {
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(page == '/other_other'){
        fs.readFile('/home/shiva1974/Desktop/learning-of-100Devs-/Node/multipage_node_sever/other_other.html', (error,data) => {
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(page == '/api'){
        if('student' in params){
            if(params['student'] == 'shiva'){
                res.writeHead(200, {'Content-Type' : 'application/json'})
                const objTojson = {
                    name : 'shiva',
                    status : 'Bossman',
                    occupation : 'Baller'
                }
                res.end(JSON.stringify(objTojson))
            }
            else if(params['student'] != 'shiva'){
                res.writeHead(200, {'Content-Type' : 'application.json'})
                const objTojson = {
                    name : 'unknown',
                    status : 'unknown',
                    occupation : 'unknown'
                }
                res.end(JSON.stringify(objTojson))
            }
        }

    }
    else if(page == '/index.css'){
        fs.readFile('/home/shiva1974/Desktop/learning-of-100Devs-/Node/multipage_node_sever/index.css', (error,data) => {
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(data)
            res.end()
        })
    }
    else if(page == '//index.js'){
        fs.readFile('/home/shiva1974/Desktop/learning-of-100Devs-/Node/multipage_node_sever/server.js', (error,data) => {
            res.writeHead(200, {'Content-Type' : 'text/javascript'})
            res.write(data)
            res.end()
        })
    }
    else{
        figlet('404 !',(error,data) => {
            if(error){
                console.log('something went wrong.......')
                console.dir(error)
                return
            }
            res.write(data)
            res.end()
        })
    }
})

server.listen(8000)