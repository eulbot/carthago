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
                use: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    devtool: 'source-map-inline'
};