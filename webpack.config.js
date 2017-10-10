const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['./app/main.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.sass$/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/template/main.html'
        })
    ]
};