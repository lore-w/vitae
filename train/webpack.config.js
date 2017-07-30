var UglifyJsPlugin = require('D:/libs/node_modules/webpack/lib/optimize/UglifyJsPlugin');
var node_modules_path = 'D:/libs/node_modules/';
var path = require('path');
module.exports = {
    entry: {
        main: ["./js/index.js"]
    },
    output: {
        path: "assets/js",
        filename: "[name].bundle.js"
    },
    plugins: [
        new UglifyJsPlugin({
            compress: {
                //supresses warnings, usually from module minification
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: node_modules_path + "babel-loader"
            }
        ]
    },
    babel: {
        presets: [node_modules_path + 'babel-preset-es2015']
    }
};
