"use strict";

var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        basic_react_es5: ["webpack/hot/dev-server", "./app/entry/basic_react_es5.entry.js"],
        basic_react: ["webpack/hot/dev-server", "./app/entry/basic_react.entry.js"],
        react_router: ["webpack/hot/dev-server", "./app/entry/react_router.entry.js"],
        flux: ["webpack/hot/dev-server", "./app/entry/flux.entry.js"]
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