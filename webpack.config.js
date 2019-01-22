module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader?url=false', 'sass-loader']
            }
        ]
    }
}