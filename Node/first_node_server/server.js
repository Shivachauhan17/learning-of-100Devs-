const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    fs.readFile('/home/shiva1974/Desktop/learning-of-100Devs-/Node/first_node_server/server.html', (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }   

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8000);
