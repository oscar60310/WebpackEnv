const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV || 'dev';
console.log(`Mode :${env}`);
const config = {
    entry: ['./app/main.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.sass$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.(png|jpg|jpeg|svg)$/,
            loader: 'url-loader?limit=8192&name=dist/[name].[ext]'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/template/main.html'
        })
    ]
};

// js 壓縮
if (env === 'prod') {
    config.module.rules.push({
        test: /\.(js)$/,
        loader: 'babel-loader'
    });
    const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
    config.plugins.push(new UglifyJSPlugin());
}
module.exports = config;