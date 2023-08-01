const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text.txt' })
  res.end('Hello, World!');
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
