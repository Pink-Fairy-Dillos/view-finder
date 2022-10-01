const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Development",
        template: "index.html"
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new NodePolyfillPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        static: {
            directory: path.join(__dirname, 'build'),
            publicPath: '/build',
        },
        proxy: {
            '/api/**': { "target": "http://localhost:3000/", "secure": false }
        }
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },

};