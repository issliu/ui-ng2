const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
/**
 * Webpack Plugins
 */
const webpack = require('webpack');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const HOST = process.env.HOST || 'localhost';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        filename: '[name].bundle.[hash].js',
        chunkFilename: '[name].chunk.[chunkhash].js'
    },

    plugins: [
        // new webpack.NoErrorsPlugin(), // 如果出现任何错误 就终止构建
        // new DedupePlugin(), // 检测完全相同(以及几乎完全相同)的文件 并把它们从输出中移除
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['polyfills', 'vendor', 'main'].reverse()
        // }),
        new UglifyJsPlugin({
            beautify: false,
            // mangle: { screw_ie8 : true, keep_fnames: true },
            mangle: true,
            // compress: { screw_ie8: true, warnings: false,  dead_code: true, loops: true, if_return: true },
            compress: {
                screw_ie8: true,
                sequences: true,
                //properties: true,
                dead_code: true,
                drop_debugger: true,
                comparisons: true,
                conditionals: true,
                evaluate: true,
                booleans: true,
                loops: true,
                unused: true,
                hoist_funs: true,
                if_return: true,
                join_vars: true,
                cascade: true,
                //negate_iife: true,
                drop_console: true
            },
            comments: false

        }),
        // new ExtractTextPlugin('[name].[hash].css'), // 把内嵌的 css 抽取成玩不文件 并为其文件名添加 hash 后缀 使得浏览端缓存失效
        new DefinePlugin({ // 定义环境变量
            'process.env': {
                ENV: JSON.stringify(ENV)
            }
        }),
    ],

    htmlLoader: {
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
        ],
        customAttrAssign: [/\)?\]?=/]
    },

    tslint: {
        emitErrors: true,
        failOnHint: true,
        resourcePath: 'src'
    },

    node: {
        global: 'window',
        crypto: 'empty',
        process: false,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }

});
