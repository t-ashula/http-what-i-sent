// server.js

'use strict';
var express = require('express'),
    helmet  = require('helmet'),
    cors    = require('cors');
var app     = express();
var ipaddr  = process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || 'localhost',
    port    = process.env.OPENSHIFT_NODEJS_PORT || process.env.OPENSHIFT_INTERNAL_PORT || 9000;
app.use(cors());
app.use(helmet());
app.use(function(req, res, next) {
    var r = {
        method: req.method,
        url : req.url,
        path: req.path,
        query: req.query,
        headers: req.headers
    };
    console.log(r);
    res.send(r);
});

app.listen(port, ipaddr, function(){
    console.log(ipaddr, ':', port);
});
