var webpack = require("webpack");
module.exports = {
    entry: './index.ts',
	output: {
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            },
            {
            enforce: 'pre',
            test: /\.tsx?$/,
            use: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    devtool: 'inline-source-map'
    // module: {
    //     preLoaders: [
    //         {
    //             test: /\.js$/,
    //             loader: "source-map-loader"
    //         }
    //     ]
    // },
    //plugins: [
    //    new webpack.optimize.UglifyJsPlugin({
    //        comments: false,
    //        minimize: true
    //    })
    //]
};