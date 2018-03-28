const path = require('path');

module.exports = {
    output: {
        filename: "./bundle.js"
    },
    entry: './src/index.js',
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['env', 'react']
                }
            },
        ]
    },
    webserver: {
        hot: true
    },
}