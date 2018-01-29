/*
 * @Author: Administrator
 * @Date:   2018-01-08 22:16:12
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-01-29 17:40:40
 */

var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/src', //__dirname是全局目录，也是项目根目录
    entry: './js/index.js',
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        }, ]
    },
    output: {
        path: __dirname,
        filename: "./src/bundle.js"
    }
};