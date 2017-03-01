'use strict';

module.exports = {
    getIpAddress: function(req) {
        var ip = req.headers['x-forwarded-for'] || 
            req.connection.remoteAddress || 
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
        return ip;
    },
    getLanguage: function(req) {
        return req.headers["accept-language"].split(',')[0];
    },
    getSoftware: function(req) {
        return req.headers['user-agent'].split(') ')[0].split(' (')[1];
    },
};