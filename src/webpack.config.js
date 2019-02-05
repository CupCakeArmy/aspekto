const webpack = require('webpack')
const path = require('path')
const DtsBundleWebpack = require('dts-bundle-webpack')

module.exports = {
    context: `${__dirname}`,
    target: 'node',
    entry: [
        `./index.ts`,
    ],
    output: {
        path: `${__dirname}/../lib`,
        filename: 'index.js',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    // devtool: 'source-map',
    // optimization: {
    // minimize: true,
    // },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
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
    plugins: [
        new DtsBundleWebpack({
            name: 'aspekto',
            main: `./lib/index.d.ts`
        })
    ],
    externals: ['react']
}