const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if(req.url === '/') {
    //     res.write('hello world');
    //     res.end();
    // } else {
    //     res.write('using some other domains')
    //     res.end()
    // }
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200, {'Content-type': 'text/html'});
    readStream.pipe(res);
})

server.listen(3000)