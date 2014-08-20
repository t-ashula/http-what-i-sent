// server.js

'use strict';
var express = require('express');
var app = express();
var port = process.env.OPENSHIFT_NODEJS_PORT || 9000,
    addr = process.env.OPENSHIFT_NODEJS_IPADDRESS || '127.0.0.1';

app.use(function(req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    res.send({ 
        method: req.method,
        url : req.url,
        path: req.path
    });
});

app.listen(port, addr,function(){
    console.log(addr, ':', port);
});
