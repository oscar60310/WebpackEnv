const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['./app/main.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/template/main.html'
        })
    ]
};