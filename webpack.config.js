const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPluginn = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/common.js',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                },
              },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPluginn.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPluginn({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ]
}