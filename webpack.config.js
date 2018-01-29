/*
 * @Author: Administrator
 * @Date:   2018-01-08 22:16:12
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-01-29 22:01:07
 */

var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/src', //__dirname是全局目录，也是项目根目录
    entry: './js/root.js',
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
            loader: 'style-loader!css-loader'
            //上面localIndentName后面是自定义的经过style-loader和css-loader处理之后的类名，为了防止和其他模块冲突
        }, ]
    },
    output: {
        path: __dirname,
        filename: "./src/bundle.js"
    }
};