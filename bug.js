const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  // ...
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//This code will create a simple HTTP server that listens on port 3000.However,if you try to access this server from a browser,you might encounter an error.
//The error is caused by a missing Content-Type header in the response.Browsers require a Content-Type header to determine how to render the response body.
//Without this header,the browser might refuse to display the content or display it incorrectly.To fix this,add a Content-Type header to the response:

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});