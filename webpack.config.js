var path = require('path');
var webpack = require('webpack');

var config = {
    entry: {     
        app: './src/app.js',
    },
    output: {
        // publicPath: 'http://localhost:3001/builds',
        path:path.resolve(__dirname, 'builds/'),
        filename: '[name].min.js',
        chunkFilename: '[name].[hash].js'  //路由 
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue',
            },
            { 
                test: /\.js$/, 
                loader: 'babel', 
                exclude: /node_modules/ 
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            }
        ],
        
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin(),
    // ],
};

module.exports = config;