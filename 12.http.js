const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end('welcome to our home page');
  } else if (req.url === "/about") {
    res.end('welcome to our about page');
  } else {
    res.end(`
  <h1>Hell No</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">Back to Home Page</a>
  `);
  }

})

server.listen(5000);