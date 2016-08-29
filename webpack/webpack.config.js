"use strict";

var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        basic_react_on_native: ["webpack/hot/dev-server", "./app/entry/basic_react_on_native.js"],
        basic_react_on_es2015: ["webpack/hot/dev-server", "./app/entry/basic_react_on_es2015.js"],
        react_router_on_es2015: ["webpack/hot/dev-server", "./app/entry/react_router_on_es2015.js"],
    },
    output: {
        path: "./build",
        filename: "./js/[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
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
        new Webpack.HotModuleReplacementPlugin()
    ]
};