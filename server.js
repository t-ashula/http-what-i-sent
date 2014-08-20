// server.js

'use strict';
var express = require('express');
var app = express();
var ipaddr  = process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || 'localhost',
    port    = process.env.OPENSHIFT_NODEJS_PORT || process.env.OPENSHIFT_INTERNAL_PORT || 9000;
app.use(function(req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    res.send({ 
        method: req.method,
        url : req.url,
        path: req.path
    });
});

app.listen(port, ipaddr, function(){
    console.log(ipaddr, ':', port);
});
