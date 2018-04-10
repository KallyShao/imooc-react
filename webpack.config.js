/*
 * @Author: Administrator
 * @Date:   2018-01-08 22:16:12
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-04-08 15:20:46
 */

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
    //配置浏览器中的详细错误，方便查找错误
    devServer: {
        historyApiFallback: true
    },
    // performance: {
    //     hints: 'warning', //级别
    //     maxEntrypointSize: 100000, //单位bytes
    //     maxAssetSize: 450000
    // },
    context: path.join(__dirname), //__dirname是全局目录，也是项目根目录
    // devtool: debug ? "inline-sourcemap" : null,
    entry: {
        app: './src/js/root.js',
        vendor: ['react'], //外部依赖
    },
    // devtool: 'source-map',
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
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    },
    output: {
        path: __dirname,
        filename: "[name].js"
    },
    plugins: [
        new BabiliPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
};