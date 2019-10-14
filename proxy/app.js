// include dependencies
var express = require('express');
var proxy = require('http-proxy-middleware');

// proxy middleware options
var options = {
  target: 'http://localhost:3001', // target host
  changeOrigin: true, // needed for virtual hosted sites
  pathRewrite: {
    '^/api/*': '/', // rewrite path
  }
};

// create the proxy (without context)
var exampleProxy = proxy(options);
var app = express();


app.use(express.static('../frontend'))
app.use('/api', exampleProxy);
app.listen(3000);