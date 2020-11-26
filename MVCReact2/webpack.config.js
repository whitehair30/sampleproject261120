const path = require("path");
 
module.exports = {
    entry: {
        index: "./wwwroot/src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "./wwwroot/dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                use: {
                    loader: "babel-loader"
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}