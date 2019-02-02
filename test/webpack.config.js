const webpack = require('webpack')
const path = require('path')
const DtsBundleWebpack = require('dts-bundle-webpack')

module.exports = {
    context: `${__dirname}`,
    target: 'web',
    entry: [
        `./index.tsx`,
    ],
    output: {
        path: `${__dirname}`,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            aspekto: `${__dirname}/../lib/index.js`,
        },
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
        },
            {
                test: /\.styl$/,
                use: [
                    // 'style-loader',
                    'css-loader',
                    'stylus-loader',
                ],
            },
            {
                test: /\.(woff2?|ttf|eot|svg|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                    },
                }],
            },
        ],
    },
}