'use strict'

var path = require('path');
var api = require('../api/whoami.js');

module.exports = function(app) {
    app.route('/api/whoami').get(function(req, res){
        var dateObj = { ipaddress: api.getIpAddress(req), language: api.getLanguage(req), software: api.getSoftware(req) };
        res.send(dateObj);
    });

    app.route('/').get(function(req, res){
        res.sendFile(path.resolve('public/index.html'));
    })
}