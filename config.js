// This is for updating the project to the newest WebGME.
// It has been created for this to be used with the webgme-cli
'use strict';

var config = {plugin: {basePaths: []}};/*FIXME: Fix this rather than using it as a mock
    require('webgme/config/config.webgme.js'),*/
    //validateConfig = require('webgme/config/validator');

// Add/overwrite any additional settings here
// config.server.port = 8080;
// config.mongo.uri = mongodb://127.0.0.1:27017/webgme_my_app;

config.plugin.basePaths.push('./plugins');
//validateConfig(config);
module.exports = config;
