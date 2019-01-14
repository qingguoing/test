const http = require('http');

http.createServer((req, res) => {
  res.writeHead('301', {
    Location: 'https://www.baidu.com',
  });
  res.end();
}).listen(3000);