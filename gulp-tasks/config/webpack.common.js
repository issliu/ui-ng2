const webpack = require('webpack');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
    baseUrl: './',
    entry: {
        // 'polyfills': './src/polyfills.ts',
        // 'vendor': './src/vendor.ts',
        'main': './src/main.ts'
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json'],
        root: helpers.root('src'),
        modulesDirectories: ['node_modules'],
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loaders: ['raw-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [helpers.root('src/index.html')]
            },
            {
                test: /\.scss$/,
                loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /.(png|woff(2)?|eot|ttf|svg)$/,
                loader: 'url-loader'
            }
        ]

    },
    plugins: [
        new ForkCheckerPlugin(),
        // new CopyWebpackPlugin([
        //     {from: 'src/assets', to: 'assets'},
        //     {from: 'src/app/i18n', to: 'app/i18n'},
        //     {from: 'src/loading.css', to: 'loading.css'},
        //     {from: 'src/fonts', to: 'fonts'},
        //     {from: 'src/favicon.ico', to: ''},
        //     {from: 'src/img', to: 'img'}]),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        })
    ],

    node: {
        global: 'window',
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }

};
