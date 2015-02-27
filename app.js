/*globals WebGMEGlobal*/
var config = require('./config.json'),
    webgme = require('webgme'),
    server;

WebGMEGlobal.setConfig(config);

server = new webgme.standaloneServer();
server.start();
