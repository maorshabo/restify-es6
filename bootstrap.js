"use strict";
// bootstrap.js file
var System = require('es6-module-loader').System;
System.import('./server').then(function(server) {
    new server.default();
}).catch(function(err){
    console.log('err', err);
});