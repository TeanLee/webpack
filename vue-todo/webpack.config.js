const webpack = require("webpack");
var path = require('path');
module.exports = {
    entry: {
        "vue-todo-style": "./app/main.js"
    },
    output: {
        filename: [name].bundle.js,
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ["csss-loader", "style-loader"]
    }
}