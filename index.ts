const { fstat } = require('fs');
const http = require('http');
const { Http2ServerRequest } = require('http2');

const hostname = '127.0.0.1'
const port =3000;

const server = http.createServer((req, res) => {
   res.setHeader('Content-Type', 'text/html');
   displayHome(res);
});

server.listen(port, hostname,() => {
   console.log(`Server runing at http://${hostname}:${ports}`); 
});

function displayHome(res:http.ServerRequest): void {
    fs.readFile("index.html", (err, data) => {
        if (err)
    })
}