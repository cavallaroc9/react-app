const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: '/'
        // path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
        port: 3000,
        inline: true
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'react', 'stage-0']
                }
            }
            // {
            //     test: /\.css$/,
            //     use: [
            //         'to-string-loader',
            //         'css-loader'
            //     ]
            // }
        ],
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx'
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
