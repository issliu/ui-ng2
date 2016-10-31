const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const DefinePlugin = require('webpack/lib/DefinePlugin');
const webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
    cache: true,
    debug: true,

    devtool: 'cheap-module-source-map',
    output: {
        path: helpers.root('dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[name].chunk.js',
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    helpers.root('node_modules/rxjs'),
                    helpers.root('node_modules/@angular')
                ]
            }
        ]
    },
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name: ['polyfills', 'vendor', 'main'].reverse()
    //     }),
    // ],
    tslint: {
        emitErrors: false,
        failOnHint: false,
        resourcePath: 'src'
    },
    node: {
        global: 'window',
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
});
