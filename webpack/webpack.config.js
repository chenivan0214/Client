"use strict";

var webpack = require('webpack'),
    port = 8000;

module.exports = {
    entry: [
        "webpack/hot/dev-server",
        "./app/main.js"
    ],
    output: {
        path: "./build",
        filename: "./js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel'
            }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        port: port
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};