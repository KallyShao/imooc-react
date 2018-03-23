/*
 * @Author: Administrator
 * @Date:   2018-01-08 22:16:12
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-03-23 16:04:34
 */

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    devServer: {
        historyApiFallback: true
    },
    context: path.join(__dirname), //__dirname是全局目录，也是项目根目录
    devtool: debug ? "inline-sourcemap" : null,
    entry: './src/js/root.js',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            //上面localIndentName后面是自定义的经过style-loader和css-loader处理之后的类名，为了防止和其他模块冲突
            },
        ]
    },
    output: {
        path: __dirname,
        filename: "./src/bundle.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
};