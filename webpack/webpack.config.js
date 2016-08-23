"use strict";

var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        port: 8000
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./build/index.html",
            filename: "index.html",
            inject: "body",
        })
    ]
};