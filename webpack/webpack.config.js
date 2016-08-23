"use strict";

var modWebpack = require('webpack');
var objHost = {
        ip: "0.0.0.0",
        port: "8080"
    };

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:' + objHost.port,
        'webpack/hot/dev-server',
        './app/main.js'
    ],
    output: {
        path: "./build",
        filename: "./js/bundle.js"
    },
    loaders: [{
        test: /\.js$/,
        loaders: [],
        include: "./app"

    }],
    devServer: {
        inline: true,
        host: objHost.ip,
        port: objHost.port
    },
    plugins: [
        new modWebpack.NoErrorsPlugin()
    ]
};