var httpProxy = require('http-proxy');
var http = require('http');
var express = require('express');

var app = express();
app.get('/aeon', function(req, res) {
  var proxy = new httpProxy.createProxyServer({
    target: {
      host: '104.149.157.51',
      port: 20085
    }
  });

  var proxyServer = http.createServer(function(req, res) {
    proxy.web(req, res);
  });


  //
  // Listen to the `upgrade` event and proxy the
  // WebSocket requests as well.
  //
  proxyServer.on('upgrade', function(req, socket, head) {
    proxy.ws(req, socket, head);
  });

  proxyServer.listen(20085);
});

app.get('/1.8', function(req, res) {
  var proxy = new httpProxy.createProxyServer({
    target: {
      host: '104.149.157.51',
      port: 20085
    }
  });

  var proxyServer = http.createServer(function(req, res) {
    proxy.web(req, res);
  });


  //
  // Listen to the `upgrade` event and proxy the
  // WebSocket requests as well.
  //
  proxyServer.on('upgrade', function(req, socket, head) {
    proxy.ws(req, socket, head);
  });

  proxyServer.listen(20085);
});

app.listen(8080);