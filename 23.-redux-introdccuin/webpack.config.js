const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PATH = require('path')

module.exports = {

    entry: './src/index.js',
    output: {
        path: PATH.resolve( __dirname, 'build' ),
        filename: 'bundle.js'
    },

    devServer: {
        open: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.s*(css)$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },

    performance: {
        hints: process.env.NODE_ENV == 'production' ? 'warning' : false
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: './assets/css/styles.css'
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ]

}