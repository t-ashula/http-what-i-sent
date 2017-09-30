// server.js

'use strict';
var express = require('express'),
    helmet  = require('helmet'),
    cors    = require('cors');
var app     = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ipaddr = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
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
